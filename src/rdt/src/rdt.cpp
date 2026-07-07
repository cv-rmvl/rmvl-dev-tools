#include "rdt/rdt.hpp"

#include <algorithm>

using namespace rm;
using namespace std::literals;

namespace rdt {

static bool is_same_node(lpss::Guid g1, lpss::Guid g2) {
    return g1.host() == g2.host() && g1.pid() == g2.pid();
}

static bool is_service_transport_topic(std::string_view topic_name) {
    return topic_name.starts_with("lq/"sv) || topic_name.starts_with("lr/"sv);
}

static std::string service_name(std::string_view topic_name) {
    return std::string(topic_name.substr(3));
}

static bool ends_with(std::string_view text, std::string_view suffix) {
    return text.size() >= suffix.size() && text.substr(text.size() - suffix.size()) == suffix;
}

static std::string service_type(std::string_view reqtype, std::string_view restype) {
    constexpr auto req_suffix = "_Request"sv;
    constexpr auto res_suffix = "_Response"sv;
    if (ends_with(reqtype, req_suffix) && ends_with(restype, res_suffix)) {
        auto req_base = reqtype.substr(0, reqtype.size() - req_suffix.size());
        auto res_base = restype.substr(0, restype.size() - res_suffix.size());
        if (req_base == res_base)
            return std::string(req_base);
    }
    return {};
}

template <typename T>
static void push_unique(std::vector<T> &values, T value) {
    if (std::find_if(values.begin(), values.end(), [&](const auto &item) { return item.name == value.name; }) ==
        values.end())
        values.push_back(std::move(value));
}

struct service_state {
    std::unordered_map<std::string, std::string> lq_pubs;
    std::unordered_map<std::string, std::string> lq_subs;
    std::unordered_map<std::string, std::string> lr_pubs;
    std::unordered_map<std::string, std::string> lr_subs;
};

std::vector<node> LpssTool::info() const {
    std::unordered_map<lpss::Guid, size_t, lpss::GuidHash> guid_to_idx;
    std::vector<node> graph;
    for (const auto &[guid, storage_info] : _discovered_nodes) {
        guid_to_idx[guid] = graph.size();
        graph.push_back({storage_info.rndp_msg.name, {}, {}, {}, {}});
    }
    std::vector<service_state> service_states(graph.size());

    auto find_node_index = [&](lpss::Guid target) -> size_t {
        for (const auto &[guid, idx] : guid_to_idx)
            if (is_same_node(guid, target))
                return idx;
        return static_cast<size_t>(-1);
    };

    auto add_pub = [&](size_t idx, const std::string &topic_name, const std::string &msgtype) {
        if (is_service_transport_topic(topic_name)) {
            auto name = service_name(topic_name);
            if (topic_name.starts_with("lq/"sv))
                service_states[idx].lq_pubs.emplace(std::move(name), msgtype);
            else
                service_states[idx].lr_pubs.emplace(std::move(name), msgtype);
            return;
        }
        push_unique(graph[idx].pubs, topic{topic_name, msgtype});
    };

    auto add_sub = [&](size_t idx, const std::string &topic_name, const std::string &msgtype) {
        if (is_service_transport_topic(topic_name)) {
            auto name = service_name(topic_name);
            if (topic_name.starts_with("lq/"sv))
                service_states[idx].lq_subs.emplace(std::move(name), msgtype);
            else
                service_states[idx].lr_subs.emplace(std::move(name), msgtype);
            return;
        }
        push_unique(graph[idx].subs, topic{topic_name, msgtype});
    };

    for (const auto &[topic_name, writer_storage] : _discovered_writers) {
        for (const auto &writer_guid : writer_storage.writers) {
            auto idx = find_node_index(writer_guid);
            if (idx == static_cast<size_t>(-1))
                continue;
            add_pub(idx, topic_name, writer_storage.msgtype);
        }
    }

    for (const auto &[topic_name, reader_storage] : _discovered_readers) {
        for (const auto &[reader_guid, locator] : reader_storage.readers) {
            auto idx = find_node_index(reader_guid);
            if (idx == static_cast<size_t>(-1))
                continue;
            add_sub(idx, topic_name, reader_storage.msgtype);
        }
    }

    for (size_t i = 0; i < graph.size(); ++i) {
        const auto &state = service_states[i];
        for (const auto &[name, reqtype] : state.lq_subs) {
            auto rit = state.lr_pubs.find(name);
            if (rit != state.lr_pubs.end())
                graph[i].srvs.push_back({name, service_type(reqtype, rit->second), reqtype, rit->second});
        }
        for (const auto &[name, reqtype] : state.lq_pubs) {
            auto rit = state.lr_subs.find(name);
            if (rit != state.lr_subs.end())
                graph[i].clis.push_back({name, service_type(reqtype, rit->second), reqtype, rit->second});
        }

        auto by_name = [](const auto &lhs, const auto &rhs) { return lhs.name < rhs.name; };
        std::sort(graph[i].pubs.begin(), graph[i].pubs.end(), by_name);
        std::sort(graph[i].subs.begin(), graph[i].subs.end(), by_name);
        std::sort(graph[i].srvs.begin(), graph[i].srvs.end(), by_name);
        std::sort(graph[i].clis.begin(), graph[i].clis.end(), by_name);
    }

    return graph;
}

std::vector<std::string> LpssTool::nodes() const {
    std::vector<std::string> res;
    for (const auto &[guid, storage_info] : _discovered_nodes)
        res.push_back(storage_info.rndp_msg.name);
    return res;
}

std::unordered_map<std::string, std::string> LpssTool::topics() const {
    std::unordered_map<std::string, std::string> result;
    for (const auto &[topic_name, writer_storage] : _discovered_writers)
        if (!is_service_transport_topic(topic_name))
            result.emplace(topic_name, writer_storage.msgtype);
    for (const auto &[topic_name, reader_storage] : _discovered_readers)
        if (!is_service_transport_topic(topic_name))
            result.emplace(topic_name, reader_storage.msgtype);
    return result;
}

std::unordered_map<std::string, service> LpssTool::services() const {
    std::unordered_map<std::string, service> result;
    auto graph = info();
    auto add_service = [&](const service &srv) {
        auto [it, inserted] = result.emplace(srv.name, srv);
        if (!inserted) {
            if (it->second.srvtype.empty())
                it->second.srvtype = srv.srvtype;
            if (it->second.reqtype.empty())
                it->second.reqtype = srv.reqtype;
            if (it->second.restype.empty())
                it->second.restype = srv.restype;
        }
    };

    for (const auto &nd : graph) {
        for (const auto &srv : nd.srvs)
            add_service(srv);
        for (const auto &srv : nd.clis)
            add_service(srv);
    }
    return result;
}

} // namespace rdt

#include <unordered_set>

#include "rdt/rdt.hpp"

using namespace rm;
using namespace std::literals;

namespace rdt {

static bool is_same_node(lpss::Guid g1, lpss::Guid g2) {
    return g1.fields.host == g2.fields.host && g1.fields.pid == g2.fields.pid;
}

std::vector<node> LpssTool::info() const {
    std::unordered_map<lpss::Guid, size_t, lpss::GuidHash> guid_to_idx;
    std::vector<node> graph;
    for (const auto &[guid, storage_info] : _discovered_nodes) {
        guid_to_idx[guid] = graph.size();
        graph.push_back({storage_info.rndp_msg.name, {}, {}});
    }

    auto find_node = [&](lpss::Guid target) -> node * {
        for (const auto &[guid, idx] : guid_to_idx)
            if (is_same_node(guid, target))
                return &graph[idx];
        return nullptr;
    };

    for (const auto &[topic_name, writer_storage] : _discovered_writers) {
        auto rit = _discovered_readers.find(topic_name);
        for (const auto &writer_guid : writer_storage.writers) {
            auto *from_nd = find_node(writer_guid);
            if (!from_nd)
                continue;
            from_nd->pubs.emplace_back(topic_name, std::string(writer_storage.msgtype));
            if (rit != _discovered_readers.end())
                for (const auto &[reader_guid, locator] : rit->second.readers) {
                    auto *to_nd = find_node(reader_guid);
                    if (to_nd)
                        to_nd->subs.emplace_back(topic_name, std::string(writer_storage.msgtype));
                }
        }
    }

    for (const auto &[topic_name, reader_storage] : _discovered_readers) {
        if (_discovered_writers.count(topic_name))
            continue;
        for (const auto &[reader_guid, locator] : reader_storage.readers) {
            auto *to_nd = find_node(reader_guid);
            if (!to_nd)
                continue;
            to_nd->subs.emplace_back(topic_name, std::string(reader_storage.msgtype));
        }
    }

    return graph;
}

std::vector<std::string> LpssTool::nodes() const {
    std::vector<std::string> res;
    for (const auto &[guid, storage_info] : _discovered_nodes)
        res.push_back(storage_info.rndp_msg.name);
    return res;
}

std::vector<std::string> LpssTool::topics() const {
    std::unordered_set<std::string> topic_set;
    for (const auto &[topic_name, _] : _discovered_writers)
        topic_set.insert(topic_name);
    for (const auto &[topic_name, _] : _discovered_readers)
        topic_set.insert(topic_name);
    return {topic_set.begin(), topic_set.end()};
}

} // namespace rdt
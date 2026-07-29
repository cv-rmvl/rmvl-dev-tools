#include <ranges>
#include <fmt/ranges.h>

#include <rmvl/core/timer.hpp>
#include <rmvl/io/netapp.hpp>
#include <rmvl/lpss/node.hpp>

#include "graph/path_config.hpp"

#ifndef LGRAPH_VERSION
#define LGRAPH_VERSION "unknown"
#endif

namespace lgraph {

using Json = rm::basic_json<>;

constexpr std::uint16_t PORT = 17493;
static std::int64_t gtime{};

static inline std::string guid_string(rm::lpss::Guid guid) { return fmt::format("{:016x}", guid.full); }

static std::string lowmac_string(std::uint32_t data) {
    return fmt::format("{:02x}:{:02x}:{:02x}:{:02x}", (data >> 24) & 0xff, (data >> 16) & 0xff, (data >> 8) & 0xff, data & 0xff);
}

static inline std::uint64_t node_key(rm::lpss::Guid guid) { return guid.full >> 16; }

class Backend final : public rm::lpss::async::Node {
public:
    explicit Backend(std::string_view name) : Node(name) {
        app.use(rm::cors());
        app.get("/api/graph", [this](const rm::Request &, rm::Response &res) {
            res.json(graph());
        });
        app.get("/api/health", [](const rm::Request &, rm::Response &res) {
            res.json({{"status", "ok"}, {"version", LGRAPH_VERSION}});
        });
        app.use(rm::statics("/", path::web_root));

        server.listen(PORT, [] {
            const auto duration = rm::Time::now_us() - gtime;
            fmt::println("  \033[32;1mLGraph\033[0m \033[32mv{}\033[0m \033[2m ready in\033[0m \033[1m{}\033[0m ms\n", LGRAPH_VERSION, duration / 1000.0);
            fmt::println("  \033[32m\u279c\033[0m  \033[1mLocal\033[0m:   \033[36mhttp://localhost:{}\033[0m", PORT);
            const auto ifaces = rm::NetworkInterface::list();
            for (const auto &iface : ifaces)
                if (iface.up() && !iface.loopback())
                    for (const auto &addr : iface.ipv4())
                        fmt::println("  \033[32m\u279c\033[0m  \033[1mNetwork\033[0m: \033[36mhttp://{}:{}\033[0m", fmt::join(addr.address(), "."), PORT);
            fmt::println("  \033[32;2m\u279c\033[0m  \033[2mPress\033[0m \033[1mctrl(\u2303) + c\033[0m \033[2mto stop this node\033[0m\n");
        });
        rm::async::co_spawn(_ctx, &rm::async::HttpServer::spinWithoutSigint, &server);
    }

private:
    struct NodeInfo {
        rm::lpss::Guid guid{};
        std::string name;
        std::unordered_set<std::string> publishers;
        std::unordered_set<std::string> subscribers;
        std::unordered_set<std::string> services;
        std::unordered_set<std::string> clients;
    };

    static inline bool is_request_topic(std::string_view topic) { return topic.starts_with("lq/"); }
    static inline bool is_response_topic(std::string_view topic) { return topic.starts_with("lr/"); }
    static inline std::string service_name(std::string_view topic) { return std::string(topic.substr(2)); }

    static std::string service_type(std::string_view request_type, std::string_view response_type) {
        constexpr std::string_view request_suffix = "_Request";
        constexpr std::string_view response_suffix = "_Response";
        if (request_type.ends_with(request_suffix))
            return std::string(request_type.substr(0, request_type.size() - request_suffix.size()));
        if (response_type.ends_with(response_suffix))
            return std::string(response_type.substr(0, response_type.size() - response_suffix.size()));
        return {};
    }

    Json graph() const {
        std::unordered_map<std::uint64_t, NodeInfo> nodes;
        for (const auto &[guid, storage] : _discovered_nodes)
            nodes.emplace(node_key(guid), NodeInfo{guid, storage.rndp_msg.name, {}, {}, {}, {}});

        const auto ensure_node = [&nodes](rm::lpss::Guid endpoint) -> NodeInfo & {
            const auto key = node_key(endpoint);
            auto [it, inserted] = nodes.try_emplace(key);
            if (inserted) {
                auto node_guid = endpoint;
                node_guid.set_entity(0);
                it->second.guid = node_guid;
                it->second.name = fmt::format("unknown-{:08x}", node_guid.full & 0xffffffff);
            }
            return it->second;
        };

        struct TopicInfo {
            std::string type;
            std::unordered_set<std::uint64_t> publishers;
            std::unordered_set<std::uint64_t> subscribers;
        };
        struct ServiceInfo {
            std::string request_type;
            std::string response_type;
            std::unordered_set<std::uint64_t> servers;
            std::unordered_set<std::uint64_t> clients;
        };
        std::unordered_map<std::string, TopicInfo> topics;
        std::unordered_map<std::string, ServiceInfo> services;

        for (const auto &[topic, storage] : _discovered_writers) {
            if (is_request_topic(topic) || is_response_topic(topic)) {
                const auto name = service_name(topic);
                auto &service = services[name];
                auto &endpoints = is_request_topic(topic) ? service.clients : service.servers;
                auto &type = is_request_topic(topic) ? service.request_type : service.response_type;
                type = storage.msgtype;
                for (const auto &endpoint : storage.writers) {
                    const auto key = node_key(endpoint);
                    ensure_node(endpoint);
                    endpoints.insert(key);
                    if (is_request_topic(topic))
                        nodes.at(key).clients.insert(name);
                    else
                        nodes.at(key).services.insert(name);
                }
                continue;
            }
            auto &item = topics[topic];
            item.type = storage.msgtype;
            for (const auto &endpoint : storage.writers) {
                const auto key = node_key(endpoint);
                ensure_node(endpoint).publishers.insert(topic);
                item.publishers.insert(key);
            }
        }
        for (const auto &[topic, storage] : _discovered_readers) {
            if (is_request_topic(topic) || is_response_topic(topic)) {
                const auto name = service_name(topic);
                auto &service = services[name];
                auto &endpoints = is_request_topic(topic) ? service.servers : service.clients;
                auto &type = is_request_topic(topic) ? service.request_type : service.response_type;
                if (type.empty())
                    type = storage.msgtype;
                for (const auto &[endpoint, _] : storage.readers) {
                    const auto key = node_key(endpoint);
                    ensure_node(endpoint);
                    endpoints.insert(key);
                    if (is_request_topic(topic))
                        nodes.at(key).services.insert(name);
                    else
                        nodes.at(key).clients.insert(name);
                }
                continue;
            }
            auto &item = topics[topic];
            if (item.type.empty())
                item.type = storage.msgtype;
            for (const auto &[endpoint, _] : storage.readers) {
                const auto key = node_key(endpoint);
                ensure_node(endpoint).subscribers.insert(topic);
                item.subscribers.insert(key);
            }
        }

        std::vector<std::uint64_t> node_keys;
        node_keys.reserve(nodes.size());
        for (const auto &[key, _] : nodes)
            node_keys.push_back(key);
        std::ranges::sort(node_keys, {}, [&nodes](auto key) { return nodes.at(key).name; });

        Json node_array = Json::array();
        for (const auto key : node_keys) {
            const auto &node = nodes.at(key);
            std::vector<std::string> publishers(node.publishers.begin(), node.publishers.end());
            std::vector<std::string> subscribers(node.subscribers.begin(), node.subscribers.end());
            std::vector<std::string> node_services(node.services.begin(), node.services.end());
            std::vector<std::string> clients(node.clients.begin(), node.clients.end());
            std::ranges::sort(publishers);
            std::ranges::sort(subscribers);
            std::ranges::sort(node_services);
            std::ranges::sort(clients);
            node_array.push_back({
                {"id", guid_string(node.guid)},
                {"name", node.name},
                {"host", lowmac_string(node.guid.host())},
                {"pid", node.guid.pid()},
                {"publishers", publishers},
                {"subscribers", subscribers},
                {"services", node_services},
                {"clients", clients},
            });
        }

        std::vector<std::string> topic_names;
        topic_names.reserve(topics.size());
        for (const auto &[name, _] : topics)
            topic_names.push_back(name);
        std::ranges::sort(topic_names);

        Json topic_array = Json::array();
        for (const auto &name : topic_names) {
            const auto &topic = topics.at(name);
            Json publishers = Json::array();
            Json subscribers = Json::array();
            for (const auto key : topic.publishers)
                publishers.push_back(guid_string(nodes.at(key).guid));
            for (const auto key : topic.subscribers)
                subscribers.push_back(guid_string(nodes.at(key).guid));
            topic_array.push_back({
                {"name", name},
                {"type", topic.type},
                {"publishers", std::move(publishers)},
                {"subscribers", std::move(subscribers)},
            });
        }

        std::vector<std::string> service_names;
        service_names.reserve(services.size());
        for (const auto &[name, _] : services)
            service_names.push_back(name);
        std::ranges::sort(service_names);

        Json service_array = Json::array();
        for (const auto &name : service_names) {
            const auto &service = services.at(name);
            Json servers = Json::array();
            Json clients = Json::array();
            for (const auto key : service.servers)
                servers.push_back(guid_string(nodes.at(key).guid));
            for (const auto key : service.clients)
                clients.push_back(guid_string(nodes.at(key).guid));
            service_array.push_back({
                {"name", name},
                {"type", service_type(service.request_type, service.response_type)},
                {"requestType", service.request_type},
                {"responseType", service.response_type},
                {"servers", std::move(servers)},
                {"clients", std::move(clients)},
            });
        }

        return {
            {"timestamp", std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count()},
            {"nodes", std::move(node_array)},
            {"topics", std::move(topic_array)},
            {"services", std::move(service_array)},
        };
    }

    rm::async::Webapp app{_ctx};
    rm::async::HttpServer server{app};
};

} // namespace lgraph

int main(int argc, char **argv) {
    lgraph::gtime = rm::Time::now_us();
    std::string name = "lgraph_";
    name += argc > 1 ? argv[1] : "default";
    lgraph::Backend backend(name);
    backend.spin();
}

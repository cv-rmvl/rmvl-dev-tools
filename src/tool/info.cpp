#include "rdt/rdt.hpp"
#include <algorithm>
#include <string>
#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

using namespace rm;
using namespace std::literals;

template <typename T>
static void print_named_list(const std::vector<T> &items) {
    if (items.empty())
        printf("  (none)\n");
    else
        for (const auto &item : items)
            printf("  %s\n", item.name.c_str());
}

static void print_string_list(const std::vector<std::string> &items) {
    if (items.empty())
        printf("  (none)\n");
    else
        for (const auto &item : items)
            printf("  %s\n", item.c_str());
}

static std::string service_type_display(const rdt::service &srv) {
    if (!srv.srvtype.empty())
        return srv.srvtype;
    if (!srv.reqtype.empty() && !srv.restype.empty())
        return srv.reqtype + " -> " + srv.restype;
    if (!srv.reqtype.empty())
        return srv.reqtype;
    return srv.restype;
}

static bool has_arg(int argc, char *argv[], std::string_view target) {
    for (int i = 2; i < argc; ++i)
        if (std::string_view(argv[i]) == target)
            return true;
    return false;
}

static std::string first_non_option(int argc, char *argv[], int begin = 2) {
    for (int i = begin; i < argc; ++i)
        if (argv[i][0] != '-')
            return argv[i];
    return {};
}

static std::string join_args(int argc, char *argv[], int begin) {
    std::string result;
    for (int i = begin; i < argc; ++i) {
        if (!result.empty())
            result += ' ';
        result += argv[i];
    }
    return result;
}

template <typename T>
static void print_items(const std::vector<T> &items, bool count_only) {
    if (count_only) {
        printf("%zu\n", items.size());
        return;
    }
    for (const auto &item : items)
        printf("%s\n", item.c_str());
}

static void print_info(int argc, char *argv[], rdt::LpssTool &nd) {
    if (argv[1] == "nl"sv) {
        auto nodes = nd.nodes();
        for (const auto &name : nodes)
            printf("%s\n", name.c_str());
    } else if (argv[1] == "ni"sv) {
        if (argc < 3)
            return;
        std::string target = argv[2];
        auto graph = nd.info();
        for (const auto &n : graph) {
            if (n.name != target)
                continue;

            printf("Node: %s\n", n.name.c_str());

            printf("\nPublish Topics:\n");
            print_named_list(n.pubs);

            printf("\nSubscribe Topics:\n");
            print_named_list(n.subs);

            printf("\nServer Services:\n");
            print_named_list(n.srvs);

            printf("\nClient Services:\n");
            print_named_list(n.clis);
            return;
        }
        return;
    } else if (argv[1] == "tl"sv) {
        auto topics = nd.topics();
        std::vector<std::string> names;
        names.reserve(topics.size());
        for (const auto &[name, _] : topics)
            names.push_back(name);
        std::sort(names.begin(), names.end());
        print_items(names, has_arg(argc, argv, "-c"sv));
    } else if (argv[1] == "ti"sv) {
        if (argc < 3)
            return;
        std::string target = argv[2];

        auto graph = nd.info();
        std::string msgtype{};

        std::vector<std::string> publishers, subscribers;
        for (const auto &n : graph) {
            for (const auto &t : n.pubs)
                if (t.name == target) {
                    publishers.push_back(n.name);
                    if (msgtype.empty())
                        msgtype = t.msgtype;
                }
            for (const auto &t : n.subs)
                if (t.name == target) {
                    subscribers.push_back(n.name);
                    if (msgtype.empty())
                        msgtype = t.msgtype;
                }
        }

        if (publishers.empty() && subscribers.empty()) {
            printf("\033[31mTopic '%s' not found\033[0m\n", target.c_str());
            return;
        }

        printf("Type: %s\n", msgtype.c_str());
        printf("\nPublisher Node:\n");
        if (publishers.empty())
            printf("  (none)\n");
        else
            for (const auto &name : publishers)
                printf("  %s\n", name.c_str());

        printf("\nSubscriber Node:\n");
        if (subscribers.empty())
            printf("  (none)\n");
        else
            for (const auto &name : subscribers)
                printf("  %s\n", name.c_str());
    } else if (argv[1] == "tf"sv) {
        auto target = first_non_option(argc, argv);
        if (target.empty())
            return;
        auto topics = nd.topics();
        std::vector<std::string> names;
        for (const auto &[name, type] : topics)
            if (type == target)
                names.push_back(name);
        std::sort(names.begin(), names.end());
        print_items(names, has_arg(argc, argv, "-c"sv));
    } else if (argv[1] == "sl"sv) {
        auto services = nd.services();
        std::vector<std::string> names;
        names.reserve(services.size());
        for (const auto &[name, _] : services)
            names.push_back(name);
        std::sort(names.begin(), names.end());
        print_items(names, has_arg(argc, argv, "-c"sv));
    } else if (argv[1] == "si"sv) {
        if (argc < 3)
            return;
        std::string target = argv[2];

        auto graph = nd.info();
        rdt::service service_info{};
        std::vector<std::string> servers, clients;
        for (const auto &n : graph) {
            for (const auto &srv : n.srvs)
                if (srv.name == target) {
                    servers.push_back(n.name);
                    if (service_info.name.empty())
                        service_info = srv;
                }
            for (const auto &srv : n.clis)
                if (srv.name == target) {
                    clients.push_back(n.name);
                    if (service_info.name.empty())
                        service_info = srv;
                }
        }

        if (servers.empty() && clients.empty()) {
            printf("\033[31mService '%s' not found\033[0m\n", target.c_str());
            return;
        }

        printf("Type: %s\n", service_type_display(service_info).c_str());
        printf("Request Type: %s\n", service_info.reqtype.c_str());
        printf("Response Type: %s\n", service_info.restype.c_str());

        printf("\nServer Node:\n");
        print_string_list(servers);

        printf("\nClient Node:\n");
        print_string_list(clients);
    } else if (argv[1] == "st"sv) {
        if (argc < 3)
            return;
        auto services = nd.services();
        auto it = services.find(argv[2]);
        if (it != services.end())
            printf("%s\n", service_type_display(it->second).c_str());
    } else if (argv[1] == "sf"sv) {
        auto target = first_non_option(argc, argv);
        if (target.empty())
            return;
        auto services = nd.services();
        std::vector<std::string> names;
        for (const auto &[name, srv] : services) {
            if (service_type_display(srv) == target || srv.reqtype == target || srv.restype == target)
                names.push_back(name);
        }
        std::sort(names.begin(), names.end());
        print_items(names, has_arg(argc, argv, "-c"sv));
    } else if (argv[1] == "sc"sv) {
        auto target = first_non_option(argc, argv);
        if (target.empty())
            return;
        int request_begin = 3;
        for (int i = 2; i < argc; ++i)
            if (argv[i] == target) {
                request_begin = i + 1;
                break;
            }
        auto services = nd.services();
        auto it = services.find(target);
        if (it == services.end()) {
            printf("\033[31mService '%s' not found\033[0m\n", target.c_str());
            return;
        }
        auto result = nd.call(target, it->second, join_args(argc, argv, request_begin), std::chrono::milliseconds(3000));
        if (result.ok)
            printf("%s\n", result.response.c_str());
        else {
            printf("\033[31m%s\033[0m\n", result.error.c_str());
            return;
        }
    } else if (argv[1] == "tt"sv) {
        if (argc < 3)
            return;
        std::string target = argv[2];
        auto topics = nd.topics();
        auto it = topics.find(target);
        if (it != topics.end())
            printf("%s\n", it->second.c_str());
    } else if (argv[1] == "te"sv) {
        if (argc < 3)
            return;
        auto topics = nd.topics();
        auto it = topics.find(argv[2]);
        if (it == topics.end()) {
            printf("{ \"error\": \"Topic '%s' not found\"}\n", argv[2]);
            return;
        }
        nd.echo(argv[2], it->second, [](std::string_view msg) {
            printf("%s\n", msg.data());
        });
#ifdef _WIN32
        Sleep(INFINITE);
#else
        pause();
#endif
    } else if (argv[1] == "thz"sv) {
        if (argc < 3)
            return;
        auto topics = nd.topics();
        auto it = topics.find(argv[2]);
        if (it == topics.end()) {
            printf("\033[31mTopic '%s' not found\033[0m\n", argv[2]);
            return;
        }
        uint64_t count = 0;
        nd.echo(argv[2], it->second, [&count](std::string_view) { ++count; });
        uint64_t last_count = 0;
        while (true) {
            std::this_thread::sleep_for(1s);
            printf("%.1f Hz\n", static_cast<double>(count - last_count));
            last_count = count;
        }
    } else if (argv[1] == "tbw"sv) {
        if (argc < 3)
            return;
        auto topics = nd.topics();
        auto it = topics.find(argv[2]);
        if (it == topics.end()) {
            printf("\033[31mTopic '%s' not found\033[0m\n", argv[2]);
            return;
        }
        uint64_t total_bytes = 0;
        nd.echo(argv[2], it->second, [&total_bytes](std::string_view msg) {
            total_bytes += msg.size();
        });
        uint64_t last_bytes = 0;
        while (true) {
            std::this_thread::sleep_for(1s);
            auto bw = static_cast<double>(total_bytes - last_bytes);
            if (bw >= 1024.0 * 1024.0)
                printf("%.2f MB/s\n", bw / (1024.0 * 1024.0));
            else if (bw >= 1024.0)
                printf("%.2f kB/s\n", bw / 1024.0);
            else
                printf("%.0f B/s\n", bw);
            last_bytes = total_bytes;
        }
    }
}

int main(int argc, char *argv[]) {
    if (argc < 2)
        return 1;
    rdt::LpssTool nd{};
    std::jthread spin_thread([&nd]() {
        nd.spin();
    });
    std::this_thread::sleep_for(50ms);
    print_info(argc, argv, nd);
    nd.shutdown();
}

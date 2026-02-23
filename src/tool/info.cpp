#include "rdt/rdt.hpp"
#include <string>
#include <unistd.h>

using namespace rm;
using namespace std::literals;

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
            if (n.pubs.empty())
                printf("  (none)\n");
            else
                for (const auto &topic : n.pubs)
                    printf("  %s\n", topic.name.c_str());

            printf("\nSubscribe Topics:\n");
            if (n.subs.empty())
                printf("  (none)\n");
            else
                for (const auto &topic : n.subs)
                    printf("  %s\n", topic.name.c_str());
            return;
        }
        return;
    } else if (argv[1] == "tl"sv) {
        auto topics = nd.topics();
        for (const auto &[name, _] : topics)
            printf("%s\n", name.c_str());
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
        nd.echo(argv[2], it->second, [](const std::string &msg, std::size_t) {
            printf("%s\n", msg.c_str());
        });
#ifdef _Win32
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
        nd.echo(argv[2], it->second, [&count](const std::string &, std::size_t) { ++count; });
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
        nd.echo(argv[2], it->second, [&total_bytes](const std::string &, std::size_t sz) {
            total_bytes += sz;
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
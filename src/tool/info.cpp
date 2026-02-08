#include "rdt/rdt.hpp"

using namespace rm;
using namespace std::literals;

static void print_info(int argc, char *argv[], const rdt::LpssTool &nd) {
    if (argv[1] == "nl"sv) {
        auto nodes = nd.nodes();
        for (const auto &name : nodes)
            printf("%s\n", name.c_str());
    } else if (argv[1] == "tl"sv) {
        auto topics = nd.topics();
        for (const auto &name : topics)
            printf("%s\n", name.c_str());
    } else if (argv[1] == "ni"sv) {
        if (argc < 3)
            return;
        std::string target = argv[2];
        auto graph = nd.info();
        for (const auto &n : graph) {
            if (n.name != target)
                continue;

            printf("%s\n", n.name.c_str());

            printf("  Publishers:\n");
            if (n.pubs.empty())
                printf("    (none)\n");
            else
                for (const auto &name : n.pubs)
                    printf("    %s\n", name.c_str());

            printf("\n  Subscribers:\n");
            if (n.subs.empty())
                printf("    (none)\n");
            else
                for (const auto &name : n.subs)
                    printf("    %s\n", name.c_str());
            return;
        }
        return;
    } else if (argv[1] == "ti"sv) {
        if (argc < 3)
            return;
        std::string target = argv[2];

        auto graph = nd.info();
        std::vector<std::string> publishers, subscribers;
        for (const auto &n : graph) {
            for (const auto &t : n.pubs)
                if (t == target)
                    publishers.push_back(n.name);
            for (const auto &t : n.subs)
                if (t == target)
                    subscribers.push_back(n.name);
        }

        if (publishers.empty() && subscribers.empty()) {
            printf("\033[31mTopic '%s' not found\033[0m\n", target.c_str());
            return;
        }

        printf("Topic: %s\n", target.c_str());

        printf("  Publishers:\n");
        if (publishers.empty())
            printf("    (none)\n");
        else
            for (const auto &name : publishers)
                printf("    %s\n", name.c_str());

        printf("\n  Subscribers:\n");
        if (subscribers.empty())
            printf("    (none)\n");
        else
            for (const auto &name : subscribers)
                printf("    %s\n", name.c_str());
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
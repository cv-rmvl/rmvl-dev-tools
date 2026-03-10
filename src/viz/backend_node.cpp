/**
 * @file backend_node.cpp
 * @author zhaoxi (535394140@qq.com)
 * @brief Lviz Backend 节点
 * @version 1.0
 * @date 2026-02-19
 *
 * @copyright Copyright 2026 (c), zhaoxi
 *
 */

#include <fmt/ranges.h>

#include <rmvl/core/timer.hpp>

#include "backend_node.hpp"
#include "path_config.hpp"

#ifndef LVIZ_VERSION
#define LVIZ_VERSION "unknown"
#endif

using namespace rm;

namespace lviz {

using namespace std::chrono_literals;

static int64_t gtime{};

constexpr uint16_t PORT = 17492;

BackendNode::BackendNode(std::string_view name) : lpss::async::Node(name) {
    app.use(cors());
    app.use(statics("/", path::frontend));

    app.get("/topics", std::bind(&BackendNode::get_topics, this, std::placeholders::_1, std::placeholders::_2));
    app.post("/cleanup", std::bind(&BackendNode::get_cleanup, this, std::placeholders::_1, std::placeholders::_2));
    app.get("/mesh", std::bind(&BackendNode::get_mesh, this, std::placeholders::_1, std::placeholders::_2));

    LVIZ_REQUEST_REGISTER(point);
    LVIZ_REQUEST_REGISTER(pose);
    LVIZ_REQUEST_REGISTER(wrench);
    LVIZ_REQUEST_REGISTER(twist);
    LVIZ_REQUEST_REGISTER(image);
    LVIZ_REQUEST_REGISTER(tf);
    LVIZ_REQUEST_REGISTER(marker);
    LVIZ_REQUEST_REGISTER(marker_array);
    LVIZ_REQUEST_REGISTER2(robotmodel, urdf, tf);

    app.listen(PORT, []() {
        auto duration = rm::Time::now_us() - gtime;
        fmt::println("  \033[32;1mLViz\033[0m \033[32mv{}\033[0m \033[2m ready in\033[0m \033[1m{}\033[0m ms\n", LVIZ_VERSION, duration / 1000.0);
        fmt::println("  \033[32m\u279c\033[0m  \033[1mLocal\033[0m:   \033[36mhttp://localhost:{}/\033[0m", PORT);
        auto ifaces = NetworkInterface::list();
        for (const auto &iface : ifaces)
            if (iface.up() && !iface.loopback())
                for (const auto &addr : iface.ipv4())
                    fmt::println("  \033[32m\u279c\033[0m  \033[1mNetwork\033[0m: \033[36mhttp://{}:{}\033[0m", fmt::join(addr.address(), "."), PORT);
        fmt::println("  \033[32;2m\u279c\033[0m  \033[2mPress\033[0m \033[1mctrl(\u2303) + c\033[0m \033[2mto stop this node\033[0m\n");
    });

    co_spawn(_ctx, &async::Webapp::spinWithoutSigint, &app);
}

} // namespace lviz

int main(int argc, char *argv[]) {
    lviz::gtime = rm::Time::now_us();
    std::string node_name = "lviz_node_";
    node_name += argc > 1 ? argv[1] : "default";
    lviz::BackendNode node(node_name);

    node.spin();
}
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

#include <fmt/format.h>

#include "backend_node.hpp"
#include "path_config.hpp"

using namespace rm;

namespace lviz {

using namespace std::chrono_literals;

BackendNode::BackendNode(std::string_view name) : lpss::async::Node(name) {
    app.use(cors());
    app.use(statics("/", path::frontend));

    app.get("/topics", std::bind(&BackendNode::get_topics, this, std::placeholders::_1, std::placeholders::_2));
    app.post("/cleanup", std::bind(&BackendNode::get_cleanup, this, std::placeholders::_1, std::placeholders::_2));

    LVIZ_REQUEST_REGISTER("/geometry/point", point);
    LVIZ_REQUEST_REGISTER("/geometry/pose", pose);
    LVIZ_REQUEST_REGISTER("/geometry/wrench", wrench);
    LVIZ_REQUEST_REGISTER("/geometry/twist", twist);
    LVIZ_REQUEST_REGISTER("/sensor/image", img);
    LVIZ_REQUEST_REGISTER("/motion/tf", tf);
    LVIZ_REQUEST_REGISTER("/viz/marker", marker);
    LVIZ_REQUEST_REGISTER("/viz/marker_array", marker_array);

    app.listen(17492, []() {
        fmt::println("LViz is running at \033[32;1mhttp://localhost:17492\033[0m, press Ctrl and click this link to open in browser.");
    });

    co_spawn(_ctx, &async::Webapp::spinWithoutSigint, &app);
}

} // namespace lviz

int main(int argc, char *argv[]) {
    std::string node_name = "lviz_node_";
    node_name += argc > 1 ? argv[1] : "default";
    lviz::BackendNode node(node_name);

    node.spin();
}

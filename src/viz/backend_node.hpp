/**
 * @file backend_node.hpp
 * @author zhaoxi (535394140@qq.com)
 * @brief Lviz Backend 节点
 * @version 1.0
 * @date 2026-02-19
 *
 * @copyright Copyright 2026 (c), zhaoxi
 *
 */

#pragma once

#include <rmvl/io/netapp.hpp>
#include <rmvl/lpss/cv.hpp>
#include <rmvl/lpss/node.hpp>

#include <rmvlmsg/geometry/twist.hpp>
#include <rmvlmsg/geometry/wrench.hpp>
#include <rmvlmsg/motion/tf.hpp>
#include <rmvlmsg/sensor/image.hpp>
#include <rmvlmsg/std/string.hpp>
#include <rmvlmsg/viz/marker_array.hpp>

#include "backend_def.hpp"

namespace lviz {

class BackendNode : public rm::lpss::async::Node {
public:
    BackendNode(std::string_view name);

private:
    //! GET /topics 请求处理函数，返回符合查询条件的话题列表
    void get_topics(const rm::Request &req, rm::Response &res);

    //! POST /cleanup 请求处理函数，清理所有订阅和缓存
    void get_cleanup(const rm::Request &req, rm::Response &res);

    rm::async::Webapp app{_ctx};

    // geometry/Point
    LVIZ_MANAGE_REGISTER(point, Point, rm::msg::Point);
    // geometry/Pose
    LVIZ_MANAGE_REGISTER(pose, Pose, rm::msg::Pose);
    // geometry/Twist
    LVIZ_MANAGE_REGISTER(twist, Twist, rm::msg::Twist);
    // geometry/Wrench
    LVIZ_MANAGE_REGISTER(wrench, Wrench, rm::msg::Wrench);
    // sensor/Image
    LVIZ_MANAGE_REGISTER(img, Image, cv::Mat);
    // motion/TF
    LVIZ_MANAGE_REGISTER(tf, TF, rm::msg::TF);
    // viz/Marker
    LVIZ_MANAGE_REGISTER(marker, Marker, rm::msg::Marker);
    // viz/MarkerArray
    LVIZ_MANAGE_REGISTER(marker_array, MarkerArray, rm::msg::MarkerArray);
    // robotmodel
    LVIZ_MANAGE_REGISTER(robot_model, String, std::string);

    /**
     * @brief 释放共享订阅，减少引用计数，如果计数归零则销毁订阅者并清除缓存
     *
     * @tparam SharedHashMap 共享订阅哈希表类型
     * @tparam MsgType 消息类型
     * @param[in] shared_map 共享订阅哈希表
     * @param[in] topic 话题名称
     */
    template <typename MsgType, typename SharedHashMap>
    inline void release_shared(SharedHashMap &shared_map, const std::string &topic) {
        auto it = shared_map.find(topic);
        if (it == shared_map.end())
            return;
        it->second.count--;
        if (it->second.count == 0) {
            this->destroySubscriber<MsgType>(it->second.sub);
            shared_map.erase(it);
        }
    }
};

} // namespace lviz

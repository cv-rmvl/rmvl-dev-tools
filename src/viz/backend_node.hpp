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
#include <rmvlmsg/motion/joint_trajectory.hpp>
#include <rmvlmsg/motion/tf.hpp>
#include <rmvlmsg/motion/urdf.hpp>
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
    //! GET /mesh 请求处理函数，返回网格数据
    void get_mesh(const rm::Request &req, rm::Response &res);

    rm::async::Webapp app{_ctx};

    // Point: geometry/Point
    LVIZ_MANAGE_REGISTER(point, Point, rm::msg::Point);
    // Pose: geometry/Pose
    LVIZ_MANAGE_REGISTER(pose, Pose, rm::msg::Pose);
    // Twist: geometry/Twist
    LVIZ_MANAGE_REGISTER(twist, Twist, rm::msg::Twist);
    // Wrench: geometry/Wrench
    LVIZ_MANAGE_REGISTER(wrench, Wrench, rm::msg::Wrench);
    // Image: sensor/Image
    LVIZ_MANAGE_REGISTER(image, Image, cv::Mat);
    // TF: motion/TF
    LVIZ_MANAGE_REGISTER(tf, TF, rm::msg::TF);
    // Marker: viz/Marker
    LVIZ_MANAGE_REGISTER(marker, Marker, rm::msg::Marker);
    // MarkerArray: viz/MarkerArray
    LVIZ_MANAGE_REGISTER(marker_array, MarkerArray, rm::msg::MarkerArray);
    // Trajectory: motion/JointTrajectory
    LVIZ_MANAGE_REGISTER(trajectory, JointTrajectory, rm::msg::JointTrajectory);
    
    // RobotModel (Only TF managed here)
    struct robotmodelDisplay {
        std::string topic{};
    };
    std::unordered_map<std::string, std::unordered_map<std::string, robotmodelDisplay>> _robotmodel_displays{};
    void get_robotmodel(const rm::Request &req, rm::Response &res);
    void delete_robotmodel(const rm::Request &req, rm::Response &res);

    // URDF (Public Resource)
    struct urdfShared {
        rm::lpss::async::Subscriber<rm::msg::URDF>::ptr sub{};
        rm::msg::URDF cache{};
        bool received{false};
    };
    std::unordered_map<std::string, urdfShared> _urdf_shared{};
    void get_urdf(const rm::Request &req, rm::Response &res);

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

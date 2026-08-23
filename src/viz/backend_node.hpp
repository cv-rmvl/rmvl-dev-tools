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

#include <memory>

#include <rmvl/io/netapp.hpp>
#include <rmvl/lpss/cv.hpp>
#include <rmvl/lpss/node.hpp>
#include <rmvl/lpss/transform.hpp>
#include <rmvl/nav/map.hpp>

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
    rm::async::HttpServer server{app};

    // Point: geometry/Point
    LVIZ_MANAGE_REGISTER(point, Point, rm::msg::Point);
    // Pose: geometry/Pose
    LVIZ_MANAGE_REGISTER(pose, Pose, rm::msg::Pose);
    // Twist: geometry/Twist
    LVIZ_MANAGE_REGISTER(twist, Twist, rm::msg::Twist);
    // Wrench: geometry/Wrench
    LVIZ_MANAGE_REGISTER(wrench, Wrench, rm::msg::Wrench);
    // Image: sensor/Image
#ifdef HAVE_OPENCV
    LVIZ_MANAGE_REGISTER(image, Image, cv::Mat);
#endif
    // TF: motion/TF
    LVIZ_MANAGE_REGISTER(tf, TF, rm::msg::TF);
    // Marker: viz/Marker
    LVIZ_MANAGE_REGISTER(marker, Marker, rm::msg::Marker);
    // MarkerArray: viz/MarkerArray
    LVIZ_MANAGE_REGISTER(marker_array, MarkerArray, rm::msg::MarkerArray);
    // Trajectory: motion/JointTrajectory
    LVIZ_MANAGE_REGISTER(trajectory, JointTrajectory, rm::msg::JointTrajectory);

    // Map: nav/OccupancyGrid + nav/OccupancyGridUpdate
    struct mapDisplay {
        std::string map_key{};
        std::string tf_name{};
        std::unique_ptr<rm::lpss::tf::Buffer> tf_buffer{};
        std::unique_ptr<rm::lpss::tf::Listener> tf_listener{};
    };
    std::unordered_map<std::string, std::unordered_map<std::string, mapDisplay>> _map_displays{};
    struct mapShared {
        rm::lpss::async::Subscriber<rm::msg::OccupancyGrid>::ptr map_sub{};
        rm::lpss::async::Subscriber<rm::msg::OccupancyGridUpdate>::ptr update_sub{};
        rm::nav::GridMap cache{};
        rm::nav::MapStatus status{rm::nav::MapStatus::InvalidDimensions};
        size_t count{0};
        bool synchronized{false};
    };
    std::unordered_map<std::string, mapShared> _map_shared{};
    void get_map(const rm::Request &req, rm::Response &res);
    void get_map_data(const rm::Request &req, rm::Response &res);
    void delete_map(const rm::Request &req, rm::Response &res);
    void release_map(std::string_view key);
    
    // RobotModel（URDF 为公共资源，此处管理动态与静态 TF）
    struct robotmodelDisplay {
        std::string topic_tf{};
        std::string topic_tf_static{};
    };
    std::unordered_map<std::string, std::unordered_map<std::string, robotmodelDisplay>> _robotmodel_displays{};
    struct robotmodelShared {
        rm::lpss::async::Subscriber<rm::msg::TF>::ptr sub{};
        rm::msg::TF cache{};
        size_t count{0};
        bool received{false};
    };
    std::unordered_map<std::string, robotmodelShared> _robotmodel_tf_shared{};
    std::unordered_map<std::string, robotmodelShared> _robotmodel_tf_static_shared{};
    void get_robotmodel_tf(const rm::Request &req, rm::Response &res);
    void get_robotmodel_tf_static(const rm::Request &req, rm::Response &res);
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
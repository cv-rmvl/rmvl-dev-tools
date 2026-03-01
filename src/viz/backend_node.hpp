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

#include <rmvlmsg/geometry/wrench.hpp>
#include <rmvlmsg/sensor/image.hpp>
#include <rmvlmsg/motion/tf.hpp>
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
    LVIZ_MANAGE_REGISTER(Point, point, rm::msg::Point);
    // geometry/Pose
    LVIZ_MANAGE_REGISTER(Pose, pose, rm::msg::Pose);
    // geometry/Wrench
    LVIZ_MANAGE_REGISTER(Wrench, wrench, rm::msg::Wrench);
    // sensor/Image
    LVIZ_MANAGE_REGISTER(Image, img, cv::Mat);
    // motion/TF
    LVIZ_MANAGE_REGISTER(TF, tf, rm::msg::TF);
    // viz/Marker
    LVIZ_MANAGE_REGISTER(Marker, marker, rm::msg::Marker);
    // viz/MarkerArray
    LVIZ_MANAGE_REGISTER(MarkerArray, marker_array, rm::msg::MarkerArray);

    /**
     * @brief 释放缓存并更新计数器，如果计数器为 0 则删除缓存
     *
     * @tparam CacheHashMap 缓存哈希表类型
     * @param[in] cache_map 缓存哈希表
     * @param[in] topic 话题名称
     */
    template <typename CacheHashMap>
    inline void release_cache(CacheHashMap &cache_map, const std::string &topic) {
        cache_map[topic].count--;
        if (cache_map[topic].count == 0)
            cache_map.erase(topic);
    }

    /**
     * @brief 获取缓存并更新计数器，如果缓存不存在则创建新缓存
     *
     * @tparam CacheHashMap 缓存哈希表类型
     * @param[in] cache_map 缓存哈希表
     * @param[in] topic 话题名称
     */
    template <typename CacheHashMap>
    inline void acquire_cache(CacheHashMap &cache_map, const std::string &topic) { cache_map[topic].count++; }
};

} // namespace lviz

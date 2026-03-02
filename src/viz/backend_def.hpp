/**
 * @file backend_def.hpp
 * @author zhaoxi (535394140@qq.com)
 * @brief Lviz Backend 定义文件，包含显示管理与缓存结构定义，以及 GET 和 DELETE 请求分发宏
 * @version 1.0
 * @date 2026-02-23
 *
 * @copyright Copyright 2026 (c), zhaoxi
 *
 */

#pragma once

#define LVIZ_MANAGE_REGISTER_(name, sub_type, cache_type)            \
    struct name##Display {                                           \
        std::string topic{};                                         \
        rm::lpss::async::Subscriber<rm::msg::sub_type>::ptr sub{};   \
    };                                                               \
    std::unordered_map<std::string, name##Display> _##name##_subs{}; \
    struct name##Cache {                                             \
        cache_type cache{};                                          \
        size_t count{0};                                             \
        bool received{false};                                        \
    };                                                               \
    std::unordered_map<std::string, name##Cache> _##name##_cache{};  \
    void get_##name(const rm::Request &req, rm::Response &res);      \
    void delete_##name(const rm::Request &req, rm::Response &res)

#define LVIZ_GET_DISPATCH_(name, sub_type, cache_expr)                                                            \
    const std::string id = req.query.at("id");                                                                    \
    const std::string topic = urldecode(req.query.at("topic"));                                                   \
    if (topic.empty()) {                                                                                          \
        res.status(400);                                                                                          \
        return;                                                                                                   \
    }                                                                                                             \
    if (!_##name##_subs.contains(id)) {                                                                           \
        acquire_cache(_##name##_cache, topic);                                                                    \
        _##name##_subs[id] = {                                                                                    \
            topic, this->createSubscriber<rm::msg::sub_type>(topic, [this, topic](const rm::msg::sub_type &msg) { \
                _##name##_cache[topic].cache = cache_expr;                                                        \
                _##name##_cache[topic].received = true;                                                           \
            })};                                                                                                  \
        res.status(202);                                                                                          \
        return;                                                                                                   \
    }                                                                                                             \
    if (_##name##_subs[id].topic != topic) {                                                                      \
        this->destroySubscriber<rm::msg::sub_type>(_##name##_subs[id].sub);                                       \
        release_cache(_##name##_cache, _##name##_subs[id].topic);                                                 \
        acquire_cache(_##name##_cache, topic);                                                                    \
        _##name##_subs[id] = {                                                                                    \
            topic, this->createSubscriber<rm::msg::sub_type>(topic, [this, topic](const rm::msg::sub_type &msg) { \
                _##name##_cache[topic].cache = cache_expr;                                                        \
                _##name##_cache[topic].received = true;                                                           \
            })};                                                                                                  \
        res.status(202);                                                                                          \
        return;                                                                                                   \
    }                                                                                                             \
    if (!_##name##_cache.contains(topic) || !_##name##_cache[topic].received) {                                   \
        res.status(404);                                                                                          \
        return;                                                                                                   \
    }                                                                                                             \
    const auto &cache = _##name##_cache[topic].cache

#define LVIZ_DELETE_DISPATCH_(name, sub_type)                   \
    std::string id = urldecode(req.query.at("id"));             \
    if (id.empty()) {                                           \
        res.status(400);                                        \
        return;                                                 \
    }                                                           \
    auto it = _##name##_subs.find(id);                          \
    if (it == _##name##_subs.end()) {                           \
        res.status(404);                                        \
        return;                                                 \
    }                                                           \
    std::string topic = it->second.topic;                       \
    this->destroySubscriber<rm::msg::sub_type>(it->second.sub); \
    _##name##_subs.erase(it);                                   \
    release_cache(_##name##_cache, topic);                      \
    res.status(204)

/**
 * @brief 显示管理与缓存结构定义，包括对应的 DELETE 和 GET 请求处理函数
 *
 * @param name 显示类型名称，仅用于区分不同显示类型的结构体和函数
 * @param sub_type 移除 rm::msg:: 命名空间前缀的订阅消息类型，例如 Point、Pose、Image 等
 * @param cache_type 缓存数据的类型，例如 rm::msg::Point、cv::Mat 等
 */
#define LVIZ_MANAGE_REGISTER(name, sub_type, cache_type) LVIZ_MANAGE_REGISTER_(name, sub_type, cache_type)

/**
 * @brief 注册 GET 和 DELETE 请求处理函数的宏, 需要在使用过 LVIZ_MANAGE_REGISTER 的类成员函数内使用，同时调用上下文中定义 app 对象
 *
 * @param topic HTTP 请求路径，例如 "/geometry/point"
 * @param name 显示类型名称
 */
#define LVIZ_REQUEST_REGISTER(topic, name)                                                                   \
    app.get(topic, std::bind(&BackendNode::get_##name, this, std::placeholders::_1, std::placeholders::_2)); \
    app.del(topic, std::bind(&BackendNode::delete_##name, this, std::placeholders::_1, std::placeholders::_2))

/**
 * @brief GET 请求订阅者分发宏，需要在调用上下文中定义响应对象 res
 * @note 该宏实现了以下功能：
 * - 提供 id 和 topic 两个 const std::string 类型的查询参数变量，分别表示 Display ID 和话题名称
 * - 提供 cache 变量，类型为对应消息类型的缓存结构体，供 HTTP 响应使用
 * @param name 显示类型名称
 * @param sub_type 移除 rm::msg:: 命名空间前缀的订阅消息类型，例如 Point、Pose、Image 等
 * @param cache_expr 缓存表达式，表示如何从名为 msg 的消息对象中提取数据并存入缓存，表达式的值即为 cache 变量的值
 */
#define LVIZ_GET_DISPATCH(name, sub_type, cache_expr) LVIZ_GET_DISPATCH_(name, sub_type, cache_expr)

/**
 * @brief DELETE 请求订阅者分发宏，需要在调用上下文中定义响应对象 res
 *
 * @param name 显示类型名称
 * @param sub_type 移除 rm::msg:: 命名空间前缀的订阅消息类型，例如 Point、Pose、Image 等
 */
#define LVIZ_DELETE_DISPATCH(name, sub_type) LVIZ_DELETE_DISPATCH_(name, sub_type)

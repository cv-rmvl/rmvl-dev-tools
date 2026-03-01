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

#define LVIZ_MANAGE_REGISTER_(upper_name, lower_name, cache_type)                \
    struct upper_name##Display {                                                 \
        std::string topic{};                                                     \
        rm::lpss::async::Subscriber<rm::msg::upper_name>::ptr sub{};             \
    };                                                                           \
    std::unordered_map<std::string, upper_name##Display> _##lower_name##_subs{}; \
    struct upper_name##Cache {                                                   \
        cache_type cache{};                                                      \
        size_t count{0};                                                         \
        bool received{false};                                                    \
    };                                                                           \
    std::unordered_map<std::string, upper_name##Cache> _##lower_name##_cache{};  \
    void get_##lower_name(const rm::Request &req, rm::Response &res);            \
    void delete_##lower_name(const rm::Request &req, rm::Response &res)

#define LVIZ_GET_DISPATCH_(upper_name, lower_name, cache_expr)                                                        \
    const std::string id = req.query.at("id");                                                                        \
    const std::string topic = urldecode(req.query.at("topic"));                                                       \
    if (topic.empty()) {                                                                                              \
        res.status(400);                                                                                              \
        return;                                                                                                       \
    }                                                                                                                 \
    if (!_##lower_name##_subs.contains(id)) {                                                                         \
        acquire_cache(_##lower_name##_cache, topic);                                                                  \
        _##lower_name##_subs[id] = {                                                                                  \
            topic, this->createSubscriber<rm::msg::upper_name>(topic, [this, topic](const rm::msg::upper_name &msg) { \
                _##lower_name##_cache[topic].cache = cache_expr;                                                      \
                _##lower_name##_cache[topic].received = true;                                                         \
            })};                                                                                                      \
        res.status(202);                                                                                              \
        return;                                                                                                       \
    }                                                                                                                 \
    if (_##lower_name##_subs[id].topic != topic) {                                                                    \
        this->destroySubscriber<rm::msg::upper_name>(_##lower_name##_subs[id].sub);                                   \
        release_cache(_##lower_name##_cache, _##lower_name##_subs[id].topic);                                         \
        acquire_cache(_##lower_name##_cache, topic);                                                                  \
        _##lower_name##_subs[id] = {                                                                                  \
            topic, this->createSubscriber<rm::msg::upper_name>(topic, [this, topic](const rm::msg::upper_name &msg) { \
                _##lower_name##_cache[topic].cache = cache_expr;                                                      \
                _##lower_name##_cache[topic].received = true;                                                         \
            })};                                                                                                      \
        res.status(202);                                                                                              \
        return;                                                                                                       \
    }                                                                                                                 \
    if (!_##lower_name##_cache.contains(topic) || !_##lower_name##_cache[topic].received) {                           \
        res.status(404);                                                                                              \
        return;                                                                                                       \
    }                                                                                                                 \
    const auto &cache = _##lower_name##_cache[topic].cache

#define LVIZ_DELETE_DISPATCH_(upper_name, lower_name)             \
    std::string id = urldecode(req.query.at("id"));               \
    if (id.empty()) {                                             \
        res.status(400);                                          \
        return;                                                   \
    }                                                             \
    auto it = _##lower_name##_subs.find(id);                      \
    if (it == _##lower_name##_subs.end()) {                       \
        res.status(404);                                          \
        return;                                                   \
    }                                                             \
    std::string topic = it->second.topic;                         \
    this->destroySubscriber<rm::msg::upper_name>(it->second.sub); \
    _##lower_name##_subs.erase(it);                               \
    release_cache(_##lower_name##_cache, topic);                  \
    res.status(204)

/**
 * @brief 显示管理与缓存结构定义，包括对应的 DELETE 和 GET 请求处理函数
 *
 * @param upper_name 消息类型的首字母大写形式，例如 Point、Pose、Image 等
 * @param lower_name 消息类型的小写形式，例如 point、pose、image 等
 * @param cache_type 缓存数据的类型，例如 rm::msg::Point、cv::Mat 等
 */
#define LVIZ_MANAGE_REGISTER(upper_name, lower_name, cache_type) LVIZ_MANAGE_REGISTER_(upper_name, lower_name, cache_type)

/**
 * @brief 注册 GET 和 DELETE 请求处理函数的宏, 需要在使用过 LVIZ_MANAGE_REGISTER 的类成员函数内使用，同时调用上下文中定义 app 对象
 *
 * @param topic HTTP 请求路径，例如 "/geometry/point"
 * @param lower_name 消息类型的小写形式，例如 point、pose、image 等
 */
#define LVIZ_REQUEST_REGISTER(topic, lower_name)                                                                   \
    app.get(topic, std::bind(&BackendNode::get_##lower_name, this, std::placeholders::_1, std::placeholders::_2)); \
    app.del(topic, std::bind(&BackendNode::delete_##lower_name, this, std::placeholders::_1, std::placeholders::_2))

/**
 * @brief GET 请求订阅者分发宏，需要在调用上下文中定义响应对象 res
 * @note 该宏实现了以下功能：
 * - 提供 id 和 topic 两个 const std::string 类型的查询参数变量，分别表示 Display ID 和话题名称
 * - 提供 cache 变量，类型为对应消息类型的缓存结构体，供 HTTP 响应使用
 * @param upper_name 消息类型的首字母大写形式，例如 Point、Pose、Image 等
 * @param lower_name 消息类型的小写形式，例如 point、pose、image 等
 * @param cache_expr 缓存表达式，表示如何从名为 msg 的消息对象中提取数据并存入缓存，表达式的值即为 cache 变量的值
 */
#define LVIZ_GET_DISPATCH(upper_name, lower_name, cache_expr) LVIZ_GET_DISPATCH_(upper_name, lower_name, cache_expr)

/**
 * @brief DELETE 请求订阅者分发宏，需要在调用上下文中定义响应对象 res
 *
 * @param upper_name 消息类型的首字母大写形式，例如 Point、Pose、Image 等
 * @param lower_name 消息类型的小写形式，例如 point、pose、image 等
 */
#define LVIZ_DELETE_DISPATCH(upper_name, lower_name) LVIZ_DELETE_DISPATCH_(upper_name, lower_name)

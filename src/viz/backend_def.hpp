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

#define LVIZ_MANAGE_REGISTER_(name, sub_type, cache_type)                                                 \
    struct name##Display {                                                                                \
        std::string topic{};                                                                              \
    };                                                                                                    \
    std::unordered_map<std::string, std::unordered_map<std::string, name##Display>> _##name##_displays{}; \
    struct name##Shared {                                                                                 \
        rm::lpss::async::Subscriber<rm::msg::sub_type>::ptr sub{};                                        \
        cache_type cache{};                                                                               \
        size_t count{0};                                                                                  \
        bool received{false};                                                                             \
    };                                                                                                    \
    std::unordered_map<std::string, name##Shared> _##name##_shared{};                                     \
    void get_##name(const rm::Request &req, rm::Response &res);                                           \
    void delete_##name(const rm::Request &req, rm::Response &res)

#define LVIZ_GET_DISPATCH_(name, sub_type, cache_expr)                                                         \
    const std::string uuid = req.query.at("uuid");                                                             \
    const std::string id = req.query.at("id");                                                                 \
    const std::string topic = urldecode(req.query.at("topic"));                                                \
    if (topic.empty()) {                                                                                       \
        res.status(400);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    auto &_disps_ = _##name##_displays[uuid];                                                                  \
    if (!_disps_.contains(id)) {                                                                               \
        if (!_##name##_shared.contains(topic))                                                                 \
            _##name##_shared[topic].sub =                                                                      \
                this->createSubscriber<rm::msg::sub_type>(topic, [this, topic](const rm::msg::sub_type &msg) { \
                    _##name##_shared[topic].cache = cache_expr;                                                \
                    _##name##_shared[topic].received = true;                                                   \
                });                                                                                            \
        _##name##_shared[topic].count++;                                                                       \
        _disps_[id] = {topic};                                                                                 \
        res.status(202);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    if (_disps_[id].topic != topic) {                                                                          \
        release_shared<rm::msg::sub_type>(_##name##_shared, _disps_[id].topic);                                \
        if (!_##name##_shared.contains(topic))                                                                 \
            _##name##_shared[topic].sub =                                                                      \
                this->createSubscriber<rm::msg::sub_type>(topic, [this, topic](const rm::msg::sub_type &msg) { \
                    _##name##_shared[topic].cache = cache_expr;                                                \
                    _##name##_shared[topic].received = true;                                                   \
                });                                                                                            \
        _##name##_shared[topic].count++;                                                                       \
        _disps_[id] = {topic};                                                                                 \
        res.status(202);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    if (!_##name##_shared.contains(topic) || !_##name##_shared[topic].received) {                              \
        res.status(404);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    const auto &cache = _##name##_shared[topic].cache

#define LVIZ_DELETE_DISPATCH_(name, sub_type)                   \
    const std::string uuid = req.query.at("uuid");              \
    std::string id = urldecode(req.query.at("id"));             \
    if (id.empty()) {                                           \
        res.status(400);                                        \
        return;                                                 \
    }                                                           \
    auto &_disps_ = _##name##_displays[uuid];                   \
    auto it = _disps_.find(id);                                 \
    if (it == _disps_.end()) {                                  \
        res.status(404);                                        \
        return;                                                 \
    }                                                           \
    std::string topic = it->second.topic;                       \
    _disps_.erase(it);                                          \
    release_shared<rm::msg::sub_type>(_##name##_shared, topic); \
    res.status(204)

#define LVIZ_CLEANUP_DISPATCH_(name, sub_type, uuid)                              \
    if (_##name##_displays.contains(uuid)) {                                      \
        for (const auto &[_id_, _display_] : _##name##_displays[uuid])            \
            release_shared<rm::msg::sub_type>(_##name##_shared, _display_.topic); \
        _##name##_displays.erase(uuid);                                           \
    }

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
 * @param name 显示类型名称，同时作为请求路由的一部分，例如 "/point"、"/pose" 等
 */
#define LVIZ_REQUEST_REGISTER(name)                                                                              \
    app.get("/" #name, std::bind(&BackendNode::get_##name, this, std::placeholders::_1, std::placeholders::_2)); \
    app.del("/" #name, std::bind(&BackendNode::delete_##name, this, std::placeholders::_1, std::placeholders::_2))

/**
 * @brief GET 请求订阅者分发宏，需要在调用上下文中定义响应对象 res
 * @note 该宏实现了以下功能：
 * - 提供 uuid、id 和 topic 三个 const std::string 类型的查询参数变量，分别表示前端唯一标识、Display ID 和话题名称
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

/**
 * @brief 清理指定 UUID 的所有订阅者和缓存
 *
 * @param name 显示类型名称
 * @param sub_type 移除 rm::msg:: 命名空间前缀的订阅消息类型，例如 Point、Pose、Image 等
 * @param uuid 前端实例的唯一标识符
 */
#define LVIZ_CLEANUP_DISPATCH(name, sub_type, uuid) LVIZ_CLEANUP_DISPATCH_(name, sub_type, uuid)

// ========================= 双类型显示宏（2 个子订阅） =========================

#define LVIZ_GET_DISPATCH2_(name, sub_name, sub_type, cache_expr)                                              \
    const std::string uuid = req.query.at("uuid");                                                             \
    const std::string id = req.query.at("id");                                                                 \
    const std::string topic = urldecode(req.query.at("topic"));                                                \
    if (topic.empty()) {                                                                                       \
        res.status(400);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    auto &_disps_ = _##name##_displays[uuid];                                                                  \
    if (!_disps_.contains(id) || _disps_[id].topic_##sub_name.empty()) {                                       \
        if (!_##name##_##sub_name##_shared.contains(topic))                                                    \
            _##name##_##sub_name##_shared[topic].sub =                                                         \
                this->createSubscriber<rm::msg::sub_type>(topic, [this, topic](const rm::msg::sub_type &msg) { \
                    _##name##_##sub_name##_shared[topic].cache = cache_expr;                                   \
                    _##name##_##sub_name##_shared[topic].received = true;                                      \
                });                                                                                            \
        _##name##_##sub_name##_shared[topic].count++;                                                          \
        _disps_[id].topic_##sub_name = topic;                                                                  \
        res.status(202);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    if (_disps_[id].topic_##sub_name != topic) {                                                               \
        release_shared<rm::msg::sub_type>(_##name##_##sub_name##_shared, _disps_[id].topic_##sub_name);        \
        if (!_##name##_##sub_name##_shared.contains(topic))                                                    \
            _##name##_##sub_name##_shared[topic].sub =                                                         \
                this->createSubscriber<rm::msg::sub_type>(topic, [this, topic](const rm::msg::sub_type &msg) { \
                    _##name##_##sub_name##_shared[topic].cache = cache_expr;                                   \
                    _##name##_##sub_name##_shared[topic].received = true;                                      \
                });                                                                                            \
        _##name##_##sub_name##_shared[topic].count++;                                                          \
        _disps_[id].topic_##sub_name = topic;                                                                  \
        res.status(202);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    if (!_##name##_##sub_name##_shared.contains(topic) || !_##name##_##sub_name##_shared[topic].received) {    \
        res.status(404);                                                                                       \
        return;                                                                                                \
    }                                                                                                          \
    const auto &cache = _##name##_##sub_name##_shared[topic].cache

#define LVIZ_DELETE_DISPATCH2_(name, name1, sub_type1, name2, sub_type2)                          \
    const std::string uuid = req.query.at("uuid");                                                \
    std::string id = urldecode(req.query.at("id"));                                               \
    if (id.empty()) {                                                                             \
        res.status(400);                                                                          \
        return;                                                                                   \
    }                                                                                             \
    auto &_disps_ = _##name##_displays[uuid];                                                     \
    auto it = _disps_.find(id);                                                                   \
    if (it == _disps_.end()) {                                                                    \
        res.status(404);                                                                          \
        return;                                                                                   \
    }                                                                                             \
    if (!it->second.topic_##name1.empty())                                                        \
        release_shared<rm::msg::sub_type1>(_##name##_##name1##_shared, it->second.topic_##name1); \
    if (!it->second.topic_##name2.empty())                                                        \
        release_shared<rm::msg::sub_type2>(_##name##_##name2##_shared, it->second.topic_##name2); \
    _disps_.erase(it);                                                                            \
    res.status(204)

#define LVIZ_CLEANUP_DISPATCH2_(name, name1, sub_type1, name2, sub_type2, uuid)                          \
    if (_##name##_displays.contains(uuid)) {                                                             \
        for (const auto &[_id_, _display_] : _##name##_displays[uuid]) {                                 \
            if (!_display_.topic_##name1.empty())                                                        \
                release_shared<rm::msg::sub_type1>(_##name##_##name1##_shared, _display_.topic_##name1); \
            if (!_display_.topic_##name2.empty())                                                        \
                release_shared<rm::msg::sub_type2>(_##name##_##name2##_shared, _display_.topic_##name2); \
        }                                                                                                \
        _##name##_displays.erase(uuid);                                                                  \
    }

/**
 * @brief 注册双类型显示的 GET 和 DELETE 请求处理函数的宏
 *
 * @param name 显示类型名称，同时作为请求路由的一部分，例如 "/robotmodel" 等
 * @param name1 第一个子订阅名称
 * @param name2 第二个子订阅名称
 */
#define LVIZ_REQUEST_REGISTER2(name, name1, name2)                                                                                    \
    app.get("/" #name "/" #name1, std::bind(&BackendNode::get_##name##_##name1, this, std::placeholders::_1, std::placeholders::_2)); \
    app.get("/" #name "/" #name2, std::bind(&BackendNode::get_##name##_##name2, this, std::placeholders::_1, std::placeholders::_2)); \
    app.del("/" #name, std::bind(&BackendNode::delete_##name, this, std::placeholders::_1, std::placeholders::_2))

/**
 * @brief 双类型显示的 GET 请求订阅者分发宏
 * @note 该宏实现了以下功能：
 * - 提供 uuid、id 和 topic 三个 const std::string 类型的查询参数变量
 * - 提供 cache 变量，类型为对应子订阅的缓存类型
 * - 在统一的显示映射表中管理指定子订阅的话题和共享订阅
 *
 * @param name 显示类型名称
 * @param sub_name 当前处理的子订阅名称
 * @param sub_type 对应消息类型（去掉 rm::msg:: 前缀）
 * @param cache_expr 缓存表达式，表示如何从名为 msg 的消息对象中提取数据
 */
#define LVIZ_GET_DISPATCH2(name, sub_name, sub_type, cache_expr) LVIZ_GET_DISPATCH2_(name, sub_name, sub_type, cache_expr)

/**
 * @brief 双类型显示的 DELETE 请求分发宏，同时释放两个子订阅的引用计数
 *
 * @param name 显示类型名称
 * @param name1 第一个子订阅名称
 * @param sub_type1 第一个子订阅的消息类型（去掉 rm::msg:: 前缀）
 * @param name2 第二个子订阅名称
 * @param sub_type2 第二个子订阅的消息类型（去掉 rm::msg:: 前缀）
 */
#define LVIZ_DELETE_DISPATCH2(name, name1, sub_type1, name2, sub_type2) LVIZ_DELETE_DISPATCH2_(name, name1, sub_type1, name2, sub_type2)

/**
 * @brief 双类型显示的清理宏，释放指定 UUID 的所有子订阅
 *
 * @param name 显示类型名称
 * @param name1 第一个子订阅名称
 * @param sub_type1 第一个子订阅的消息类型（去掉 rm::msg:: 前缀）
 * @param name2 第二个子订阅名称
 * @param sub_type2 第二个子订阅的消息类型（去掉 rm::msg:: 前缀）
 * @param uuid 前端实例的唯一标识符
 */
#define LVIZ_CLEANUP_DISPATCH2(name, name1, sub_type1, name2, sub_type2, uuid) \
    LVIZ_CLEANUP_DISPATCH2_(name, name1, sub_type1, name2, sub_type2, uuid)

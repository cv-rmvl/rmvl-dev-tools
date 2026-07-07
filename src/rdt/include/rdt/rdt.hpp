/**
 * @file rdt.hpp
 * @author zhaoxi (535394140@qq.com)
 * @brief LPSS 工具类定义
 * @version 1.0
 * @date 2026-02-09
 *
 * @copyright Copyright 2026 (c), zhaoxi
 *
 */

#pragma once

#include <any>
#include <chrono>
#include <functional>

#include <rmvl/lpss/node.hpp>

namespace rdt {

//! 话题信息
struct topic {
    std::string name{};    //!< 话题名称
    std::string msgtype{}; //!< 消息类型
};

//! 服务信息
struct service {
    std::string name{};     //!< 服务名称
    std::string srvtype{};  //!< 服务类型
    std::string reqtype{};  //!< 服务请求类型
    std::string restype{};  //!< 服务响应类型
};

//! 服务调用结果
struct call_result {
    bool ok{};              //!< 是否调用成功
    std::string response{}; //!< 响应 JSON
    std::string error{};    //!< 错误信息
};

//! 节点信息
struct node {
    std::string name{};           //!< 节点名称
    std::vector<topic> pubs{};    //!< 发布的话题列表
    std::vector<topic> subs{};    //!< 订阅的话题列表
    std::vector<service> srvs{};  //!< 提供的服务列表
    std::vector<service> clis{};  //!< 调用的服务列表
};

class LpssTool : public rm::lpss::async::Node {
public:
    LpssTool() : Node("lpss_info") {}

    //! 获取节点和话题的连接关系图
    std::vector<node> info() const;

    //! 获取所有已发现的节点名称列表
    std::vector<std::string> nodes() const;

    //! 获取所有已发现的话题，key 为话题名称，value 为消息类型
    std::unordered_map<std::string, std::string> topics() const;

    //! 获取所有已发现的服务，key 为服务名称，value 为服务信息
    std::unordered_map<std::string, service> services() const;

    //! 调用指定服务
    call_result call(std::string_view service, const rdt::service &info, std::string_view request, std::chrono::milliseconds timeout);

    //! 消息回调类型：(格式化消息 JSON)
    using EchoCallback = std::function<void(std::string_view)>;

    //! 订阅指定话题，每收到一条消息时调用回调
    void echo(std::string_view topic, std::string_view msgtype, EchoCallback callback);

private:
    std::any _active_sub; //!< 类型擦除存储当前订阅
};

} // namespace rdt

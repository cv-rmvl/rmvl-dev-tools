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

#include <rmvl/lpss/node.hpp>

namespace rdt {

//! 话题信息
struct topic {
    std::string name{};    //!< 话题名称
    std::string msgtype{}; //!< 消息类型
};

//! 节点信息
struct node {

    std::string name{};        //!< 节点名称
    std::vector<topic> pubs{}; //!< 发布的话题列表
    std::vector<topic> subs{}; //!< 订阅的话题列表
};

class LpssTool : public rm::lpss::async::Node {
public:
    LpssTool() : Node("lpss_info") {}

    //! 获取节点和话题的连接关系图
    std::vector<node> info() const;

    //! 获取所有已发现的节点名称列表
    std::vector<std::string> nodes() const;

    //! 获取所有已发现的话题名称列表
    std::vector<std::string> topics() const;
};

} // namespace rdt

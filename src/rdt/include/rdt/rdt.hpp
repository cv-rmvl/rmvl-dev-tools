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

struct node {
    std::string name{};
    std::vector<std::string> pubs{};
    std::vector<std::string> subs{};
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

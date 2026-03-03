/**
 * @file backend_http.cpp
 * @author zhaoxi (535394140@qq.com)
 * @brief Lviz Backend 节点 HTTP 服务
 * @version 1.0
 * @date 2026-02-19
 *
 * @copyright Copyright 2026 (c), zhaoxi
 *
 */

#include <cstdio>
#include <nlohmann/json.hpp>
#include <opencv2/imgcodecs.hpp>

#include "backend_def.hpp"
#include "backend_node.hpp"

namespace lviz {

/**
 * @brief URL 解码，将 URL 编码的字符串转换回原始字符串
 *
 * @param[in] value URL 编码的字符串，例如 `Hello%20World%21`
 * @return 解码后的字符串，例如 `Hello World!`
 */
static std::string urldecode(std::string_view value) {
    std::string result;
    result.reserve(value.length());
    for (size_t i = 0; i < value.length(); ++i) {
        if (value[i] == '%' && i + 2 < value.length()) {
            std::string_view hex = value.substr(i + 1, 2);
            char ch = static_cast<char>(std::strtol(hex.data(), nullptr, 16));
            result += ch;
            i += 2;
        } else if (value[i] == '+')
            result += ' ';
        else
            result += value[i];
    }
    return result;
}

/**
 * @brief 将 Point 消息转换为 JSON 对象
 *
 * @param[in] point Point 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> point_json(const rm::msg::Point &point) {
    return {
        {"x", point.x},
        {"y", point.y},
        {"z", point.z},
    };
}

/**
 * @brief 将 Quaternion 消息转换为 JSON 对象
 *
 * @param[in] ori Quaternion 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> orientation_json(const rm::msg::Quaternion &ori) {
    return {
        {"x", ori.x},
        {"y", ori.y},
        {"z", ori.z},
        {"w", ori.w},
    };
}

/**
 * @brief 将 Vector3 消息转换为 JSON 对象
 *
 * @param[in] vec Vector3 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> vector3_json(const rm::msg::Vector3 &vec) {
    return {
        {"x", vec.x},
        {"y", vec.y},
        {"z", vec.z},
    };
}

/**
 * @brief 将 ColorRGBA 消息转换为 JSON 对象
 *
 * @param[in] color ColorRGBA 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> color_json(const rm::msg::ColorRGBA &color) {
    return {
        {"r", color.r},
        {"g", color.g},
        {"b", color.b},
        {"a", color.a},
    };
}

template <typename Range, typename Fn>
static rm::basic_json<> json_array(const Range &range, Fn fn) {
    auto arr = rm::basic_json<>::array();
    for (const auto &item : range)
        arr.push_back(fn(item));
    return arr;
}

/**
 * @brief 将 Marker 消息转换为 JSON 对象
 *
 * @param[in] marker Marker 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> marker_json(const rm::msg::Marker &marker) {
    return {
        {"ns", marker.ns},
        {"id", marker.id},
        {"type", marker.type},
        {"action", marker.action},
        {"pose", {
                     {"position", point_json(marker.pose.position)},
                     {"orientation", orientation_json(marker.pose.orientation)},
                 }},
        {"scale", vector3_json(marker.scale)},
        {"color", color_json(marker.color)},
        {"points", json_array(marker.points, point_json)},
        {"colors", json_array(marker.colors, color_json)},
    };
}

void BackendNode::get_topics(const rm::Request &req, rm::Response &res) {
    std::string_view type = req.query.at("type");             // "reader"、"writer" 或 "any"
    std::string msgtype = urldecode(req.query.at("msgtype")); // 消息类型，例如 "sensor/Image" 或 "any"

    std::vector<std::string> topics{};
    if (type == "any" || type == "reader")
        for (const auto &[topic, reader_storage] : _discovered_readers)
            if (msgtype == "any" || reader_storage.msgtype == msgtype)
                topics.push_back(topic);
    if (type == "any" || type == "writer")
        for (const auto &[topic, writer_storage] : _discovered_writers)
            if (msgtype == "any" || writer_storage.msgtype == msgtype)
                topics.push_back(topic);

    res.json({
        {"topics", topics},
    });
}

void BackendNode::get_cleanup(const rm::Request &req, rm::Response &res) {
    const std::string uuid = req.query.at("uuid");
    LVIZ_CLEANUP_DISPATCH(point, Point, uuid);
    LVIZ_CLEANUP_DISPATCH(pose, Pose, uuid);
    LVIZ_CLEANUP_DISPATCH(twist, Twist, uuid);
    LVIZ_CLEANUP_DISPATCH(wrench, Wrench, uuid);
    LVIZ_CLEANUP_DISPATCH(img, Image, uuid);
    LVIZ_CLEANUP_DISPATCH(tf, TF, uuid);
    LVIZ_CLEANUP_DISPATCH(marker, Marker, uuid);
    LVIZ_CLEANUP_DISPATCH(marker_array, MarkerArray, uuid);
    LVIZ_CLEANUP_DISPATCH(robot_model, String, uuid);
    // 返回 204 No Content，表示清理完成但无内容返回
    res.status(204);
}

void BackendNode::get_point(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(point, Point, msg);
    res.json(point_json(cache));
}

void BackendNode::delete_point(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(point, Point); }

void BackendNode::get_pose(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(pose, Pose, msg);
    res.json({
        {"position", point_json(cache.position)},
        {"orientation", orientation_json(cache.orientation)},
    });
}

void BackendNode::delete_pose(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(pose, Pose); }

void BackendNode::get_wrench(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(wrench, Wrench, msg);
    res.json({
        {"force", vector3_json(cache.force)},
        {"torque", vector3_json(cache.torque)},
    });
}

void BackendNode::delete_wrench(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(wrench, Wrench); }

void BackendNode::get_twist(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(twist, Twist, msg);
    res.json({
        {"linear", vector3_json(cache.linear)},
        {"angular", vector3_json(cache.angular)},
    });
}

void BackendNode::delete_twist(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(twist, Twist); }

void BackendNode::get_img(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(img, Image, rm::cvmsg::from_msg(msg));

    std::string_view option = req.query.at("option");

    std::vector<uint8_t> buf{};
    if (option == "png") {
        cv::imencode(".png", cache, buf);
        res.send(std::string_view(reinterpret_cast<char *>(buf.data()), buf.size()));
        res.set("Content-Type", "image/png");
    } else if (option == "jpg") {
        cv::imencode(".jpg", cache, buf);
        res.send(std::string_view(reinterpret_cast<char *>(buf.data()), buf.size()));
        res.set("Content-Type", "image/jpeg");
    } else if (option == "bmp") {
        cv::imencode(".bmp", cache, buf);
        res.send(std::string_view(reinterpret_cast<char *>(buf.data()), buf.size()));
        res.set("Content-Type", "image/bmp");
    } else {
        res.status(403);
    }
}

void BackendNode::delete_img(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(img, Image); }

void BackendNode::get_tf(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(tf, TF, msg);
    res.json(json_array(cache.transforms, [](const rm::msg::TransformStamped &t) -> rm::basic_json<> {
        return {
            {"frame_id", t.header.frame_id},
            {"child_frame_id", t.child_frame_id},
            {"translation", vector3_json(t.transform.translation)},
            {"rotation", orientation_json(t.transform.rotation)},
        };
    }));
}

void BackendNode::delete_tf(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(tf, TF); }

void BackendNode::get_marker(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(marker, Marker, msg);
    res.json(marker_json(cache));
}

void BackendNode::delete_marker(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(marker, Marker); }

void BackendNode::get_marker_array(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(marker_array, MarkerArray, msg);
    res.json(json_array(cache.markers, marker_json));
}

void BackendNode::delete_marker_array(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(marker_array, MarkerArray); }

void BackendNode::get_robot_model(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(robot_model, String, msg.data);
    res.status(404); // 目前尚未实现 RobotModel 的 JSON 转换，返回 404 Not Found
}

} // namespace lviz

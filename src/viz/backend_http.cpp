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

#include <rmvl/rmvl_modules.hpp>

#include <fstream>
#include <nlohmann/json.hpp>
#include <rmvlmsg/motion/urdf.hpp>

#ifdef HAVE_OPENCV
#include <opencv2/imgcodecs.hpp>
#endif

#include "backend_def.hpp"
#include "backend_node.hpp"

namespace lviz {

#ifdef __MSVC__
#pragma region Utility Functions
#endif

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
            char hex[3] = {value[i + 1], value[i + 2], '\0'};
            char ch = static_cast<char>(std::strtol(hex, nullptr, 16));
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
 * @brief 将 JointTrajectoryPoint 消息转换为 JSON 对象
 *
 * @param[in] pt JointTrajectoryPoint 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> trajectory_point_json(const rm::msg::JointTrajectoryPoint &pt) {
    auto positions = rm::basic_json<>::array();
    for (const auto &p : pt.positions)
        positions.push_back(p);
    return {
        {"positions", positions},
        {"time_from_start", static_cast<double>(pt.time_from_start.nanoseconds) / 1'000'000.0}
    };
}

/**
 * @brief 将 JointTrajectory 消息转换为 JSON 对象
 *
 * @param[in] traj JointTrajectory 消息对象
 * @return JSON 对象
 */
static rm::basic_json<> trajectory_json(const rm::msg::JointTrajectory &traj) {
    auto joint_names = rm::basic_json<>::array();
    for (const auto &name : traj.joint_names)
        joint_names.push_back(name);
    return {
        {"joint_names", joint_names},
        {"points", json_array(traj.points, trajectory_point_json)}
    };
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

#ifdef __MSVC__
#pragma endregion
#pragma region LViz Basic Requests
#endif

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
#ifdef HAVE_OPENCV
    LVIZ_CLEANUP_DISPATCH(image, Image, uuid);
#endif
    LVIZ_CLEANUP_DISPATCH(tf, TF, uuid);
    LVIZ_CLEANUP_DISPATCH(marker, Marker, uuid);
    LVIZ_CLEANUP_DISPATCH(marker_array, MarkerArray, uuid);
    LVIZ_CLEANUP_DISPATCH(trajectory, JointTrajectory, uuid);
    LVIZ_CLEANUP_DISPATCH2(robotmodel, tf, TF, tf_static, TF, uuid);
    if (_map_displays.contains(uuid)) {
        for (const auto &entry : _map_displays[uuid])
            release_map(entry.second.map_key);
        _map_displays.erase(uuid);
    }
    // 返回 204 No Content，表示清理完成但无内容返回
    res.status(204);
}

void BackendNode::get_mesh(const rm::Request &req, rm::Response &res) {
    std::string filepath = urldecode(req.query.at("filepath"));
    if (filepath.empty()) {
        res.status(400);
        return;
    }

    std::ifstream file(filepath, std::ios::binary | std::ios::ate);
    if (!file.is_open()) {
        res.status(404);
        return;
    }

    auto size = file.tellg();
    file.seekg(0, std::ios::beg);
    std::string buffer(static_cast<size_t>(size), '\0');
    if (!file.read(buffer.data(), size)) {
        res.status(500);
        return;
    }

    res.send(std::string_view(buffer.data(), buffer.size()));
    res.set("Content-Type", "application/octet-stream");
}

#ifdef __MSVC__
#pragma endregion
#pragma region LViz Manage Register
#endif

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

#ifdef HAVE_OPENCV
void BackendNode::get_image(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(image, Image, rm::cvmsg::from_msg(msg));

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

void BackendNode::delete_image(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(image, Image); }
#endif

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

void BackendNode::get_trajectory(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH(trajectory, JointTrajectory, msg);
    res.json(trajectory_json(cache));
}

void BackendNode::delete_trajectory(const rm::Request &req, rm::Response &res) { LVIZ_DELETE_DISPATCH(trajectory, JointTrajectory); }

namespace {

std::string mapKey(std::string_view topic, std::string_view update_topic) {
    std::string key(topic);
    key.push_back('\n');
    key.append(update_topic);
    return key;
}

rm::msg::Pose mapPose(const rm::msg::OccupancyGrid &map, const rm::lpss::tf::Buffer &buffer,
                      std::string_view fixed_frame, rm::lpss::tf::Status &status) {
    if (fixed_frame.empty() || map.header.frame_id.empty()) {
        status = rm::lpss::tf::Status::InvalidArgument;
        return {};
    }
    if (fixed_frame == map.header.frame_id) {
        status = rm::lpss::tf::Status::Ok;
        return map.info.origin;
    }
    const auto lookup = buffer.lookup(fixed_frame, map.header.frame_id);
    status = lookup.status;
    return lookup ? lookup.transform.transform * map.info.origin : rm::msg::Pose{};
}

} // namespace

void BackendNode::release_map(std::string_view key) {
    auto it = _map_shared.find(std::string(key));
    if (it == _map_shared.end())
        return;
    if (--it->second.count != 0)
        return;
    this->destroySubscriber<rm::msg::OccupancyGrid>(it->second.map_sub);
    this->destroySubscriber<rm::msg::OccupancyGridUpdate>(it->second.update_sub);
    _map_shared.erase(it);
}

void BackendNode::get_map(const rm::Request &req, rm::Response &res) {
    const std::string uuid = req.query.at("uuid");
    const std::string id = req.query.at("id");
    const std::string topic = urldecode(req.query.at("topic"));
    std::string update_topic = urldecode(req.query.at("update_topic"));
    const std::string tf_name = urldecode(req.query.at("tf_name"));
    const std::string fixed_frame = urldecode(req.query.at("fixed_frame"));
    if (topic.empty() || fixed_frame.empty()) {
        res.status(400);
        return;
    }
    if (update_topic.empty())
        update_topic = topic + "_updates";

    const std::string key = mapKey(topic, update_topic);
    auto &displays = _map_displays[uuid];
    auto display_it = displays.find(id);
    if (display_it == displays.end() || display_it->second.map_key != key) {
        if (display_it != displays.end()) {
            release_map(display_it->second.map_key);
            displays.erase(display_it);
        }
        if (!_map_shared.contains(key)) {
            auto shared_it = _map_shared.try_emplace(key).first;
            auto &shared = shared_it->second;
            shared.map_sub = this->createSubscriber<rm::msg::OccupancyGrid>(
                topic, [this, key](const rm::msg::OccupancyGrid &msg) {
                    auto it = _map_shared.find(key);
                    if (it == _map_shared.end())
                        return;
                    it->second.status = it->second.cache.reset(msg);
                    it->second.synchronized = it->second.status == rm::nav::MapStatus::Ok;
                });
            shared.update_sub = this->createSubscriber<rm::msg::OccupancyGridUpdate>(
                update_topic, [this, key](const rm::msg::OccupancyGridUpdate &msg) {
                    auto it = _map_shared.find(key);
                    if (it == _map_shared.end() || !it->second.synchronized)
                        return;
                    it->second.status = it->second.cache.apply(msg);
                    if (it->second.status != rm::nav::MapStatus::Ok)
                        it->second.synchronized = false;
                });
        }
        _map_shared[key].count++;
        auto &display = displays[id];
        display.map_key = key;
        display.tf_name = tf_name;
        display.tf_buffer = std::make_unique<rm::lpss::tf::Buffer>();
        display.tf_listener = std::make_unique<rm::lpss::tf::Listener>(tf_name, *this, *display.tf_buffer);
        res.status(202);
        return;
    }

    auto &display = display_it->second;
    if (display.tf_name != tf_name) {
        display.tf_listener.reset();
        display.tf_buffer = std::make_unique<rm::lpss::tf::Buffer>();
        display.tf_listener = std::make_unique<rm::lpss::tf::Listener>(tf_name, *this, *display.tf_buffer);
        display.tf_name = tf_name;
        res.status(202);
        return;
    }

    const auto shared_it = _map_shared.find(key);
    if (shared_it == _map_shared.end() || !shared_it->second.cache.valid()) {
        res.status(202);
        return;
    }
    const auto &shared = shared_it->second;
    if (!shared.synchronized) {
        res.json({{"status", rm::nav::to_string(shared.status)}});
        res.status(409);
        return;
    }

    const auto &map = shared.cache.message();
    rm::lpss::tf::Status tf_status{};
    const auto pose = mapPose(map, *display.tf_buffer, fixed_frame, tf_status);
    res.json({
        {"frame_id", map.header.frame_id},
        {"revision", std::to_string(map.revision)},
        {"width", map.info.width},
        {"height", map.info.height},
        {"resolution", map.info.resolution},
        {"transform_valid", tf_status == rm::lpss::tf::Status::Ok},
        {"status", rm::lpss::tf::to_string(tf_status)},
        {"pose", {
                     {"position", point_json(pose.position)},
                     {"orientation", orientation_json(pose.orientation)},
                 }},
    });
}

void BackendNode::get_map_data(const rm::Request &req, rm::Response &res) {
    const std::string uuid = req.query.at("uuid");
    const std::string id = req.query.at("id");
    const auto displays_it = _map_displays.find(uuid);
    if (displays_it == _map_displays.end() || !displays_it->second.contains(id)) {
        res.status(404);
        return;
    }
    const auto shared_it = _map_shared.find(displays_it->second.at(id).map_key);
    if (shared_it == _map_shared.end() || !shared_it->second.synchronized) {
        res.status(409);
        return;
    }
    const auto &map = shared_it->second.cache.message();
    const auto expected = req.query.find("revision");
    if (expected != req.query.end() && expected->second != std::to_string(map.revision)) {
        res.status(409);
        return;
    }
    const auto *data = reinterpret_cast<const char *>(map.data.data());
    res.send(std::string_view(data, map.data.size()));
    res.set("Content-Type", "application/octet-stream");
    res.set("Cache-Control", "no-store");
    res.set("X-LViz-Revision", std::to_string(map.revision));
}

void BackendNode::delete_map(const rm::Request &req, rm::Response &res) {
    const std::string uuid = req.query.at("uuid");
    const std::string id = req.query.at("id");
    auto displays_it = _map_displays.find(uuid);
    if (displays_it == _map_displays.end() || !displays_it->second.contains(id)) {
        res.status(404);
        return;
    }
    release_map(displays_it->second.at(id).map_key);
    displays_it->second.erase(id);
    if (displays_it->second.empty())
        _map_displays.erase(displays_it);
    res.status(204);
}

void BackendNode::get_urdf(const rm::Request &req, rm::Response &res) {
    std::string topic = urldecode(req.query.at("topic"));
    if (topic.empty()) {
        res.status(400);
        return;
    }
    if (!_urdf_shared.contains(topic)) {
        _urdf_shared[topic].sub = this->createSubscriber<rm::msg::URDF>(topic, [this, topic](const rm::msg::URDF &msg) {
            _urdf_shared[topic].cache = msg;
            _urdf_shared[topic].received = true;
        });
        res.status(202);
        return;
    }
    if (!_urdf_shared[topic].received) {
        res.status(202);
        return;
    }
    const auto &cache = _urdf_shared[topic].cache;
    res.json({
        {"urdf", cache.data},
        {"mesh_path", cache.mesh_path},
    });
}

void BackendNode::get_robotmodel_tf(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH2(robotmodel, tf, TF, msg);
    res.json(json_array(cache.transforms, [](const rm::msg::TransformStamped &t) -> rm::basic_json<> {
        return {
            {"frame_id", t.header.frame_id},
            {"child_frame_id", t.child_frame_id},
            {"translation", vector3_json(t.transform.translation)},
            {"rotation", orientation_json(t.transform.rotation)},
        };
    }));
}

void BackendNode::get_robotmodel_tf_static(const rm::Request &req, rm::Response &res) {
    LVIZ_GET_DISPATCH2(robotmodel, tf_static, TF, msg);
    res.json(json_array(cache.transforms, [](const rm::msg::TransformStamped &t) -> rm::basic_json<> {
        return {
            {"frame_id", t.header.frame_id},
            {"child_frame_id", t.child_frame_id},
            {"translation", vector3_json(t.transform.translation)},
            {"rotation", orientation_json(t.transform.rotation)},
        };
    }));
}

void BackendNode::delete_robotmodel(const rm::Request &req, rm::Response &res) {
    LVIZ_DELETE_DISPATCH2(robotmodel, tf, TF, tf_static, TF);
}

#ifdef __MSVC__
#pragma endregion
#endif

} // namespace lviz
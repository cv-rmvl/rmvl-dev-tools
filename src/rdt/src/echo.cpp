#include <fmt/format.h>
#include <nlohmann/json.hpp>

#include <rmvlmsg/geometry/vector3.hpp>
#include <rmvlmsg/std/bool.hpp>
#include <rmvlmsg/std/char.hpp>
#include <rmvlmsg/std/color_rgba.hpp>
#include <rmvlmsg/std/float32.hpp>
#include <rmvlmsg/std/float64.hpp>
#include <rmvlmsg/std/int16.hpp>
#include <rmvlmsg/std/int32.hpp>
#include <rmvlmsg/std/int64.hpp>
#include <rmvlmsg/std/int8.hpp>
#include <rmvlmsg/std/string.hpp>
#include <rmvlmsg/std/uint16.hpp>
#include <rmvlmsg/std/uint32.hpp>
#include <rmvlmsg/std/uint64.hpp>
#include <rmvlmsg/std/uint8.hpp>

#include <rmvlmsg/geometry/point32.hpp>
#include <rmvlmsg/geometry/pose.hpp>
#include <rmvlmsg/geometry/transform.hpp>
#include <rmvlmsg/geometry/twist.hpp>
#include <rmvlmsg/geometry/wrench.hpp>

#include <rmvlmsg/sensor/camera_info.hpp>
#include <rmvlmsg/sensor/image.hpp>
#include <rmvlmsg/sensor/imu.hpp>
#include <rmvlmsg/sensor/joint_state.hpp>
#include <rmvlmsg/sensor/multi_dofjoint_state.hpp>

#include "rdt/rdt.hpp"

using namespace rm;

namespace rdt {

// 用于简化 echo 中按消息类型分发的宏
#define LPSS_ECHO_CASE(MsgClass, ...)                                                                                                 \
    do {                                                                                                                              \
        if (msgtype == msg::MsgClass::msg_type) {                                                                                     \
            _active_sub = createSubscriber<msg::MsgClass>(topic, [cb = std::move(callback), topic, msgtype](const msg::MsgClass &m) { \
                cb(rm::json(__VA_ARGS__).dump(), 6 + topic.size() + msgtype.size() + m.compact_size());                               \
            });                                                                                                                       \
            return;                                                                                                                   \
        }                                                                                                                             \
    } while (0)

static rm::basic_json<> point_json(const msg::Point &p) {
    return {{"x", p.x}, {"y", p.y}, {"z", p.z}};
}

static rm::basic_json<> orientation_json(const msg::Quaternion &q) {
    return {{"x", q.x}, {"y", q.y}, {"z", q.z}, {"w", q.w}};
}

static rm::basic_json<> vector3_json(const msg::Vector3 &p) {
    return {{"x", p.x}, {"y", p.y}, {"z", p.z}};
}

static rm::basic_json<> header_json(const msg::Header &h) {
    return {{"seq", h.seq}, {"stamp", h.stamp}, {"frame_id", h.frame_id}};
}

static rm::basic_json<> transform_json(const msg::Transform &t) {
    return {{"translation", vector3_json(t.translation)}, {"rotation", orientation_json(t.rotation)}};
}

static rm::basic_json<> twist_json(const msg::Twist &t) {
    return {{"linear", vector3_json(t.linear)}, {"angular", vector3_json(t.angular)}};
}

static rm::basic_json<> wrench_json(const msg::Wrench &w) {
    return {{"force", vector3_json(w.force)}, {"torque", vector3_json(w.torque)}};
}

template <typename Range, typename Fn>
static rm::basic_json<> json_array(const Range &range, Fn fn) {
    auto arr = rm::basic_json<>::array();
    for (const auto &item : range)
        arr.push_back(fn(item));
    return arr;
}

void LpssTool::echo(std::string_view topic, std::string_view msgtype, EchoCallback callback) {
    // std
    LPSS_ECHO_CASE(Bool, {{"data", m.data}});
    LPSS_ECHO_CASE(Char, {{"data", m.data}});
    LPSS_ECHO_CASE(Int8, {{"data", m.data}});
    LPSS_ECHO_CASE(Int16, {{"data", m.data}});
    LPSS_ECHO_CASE(Int32, {{"data", m.data}});
    LPSS_ECHO_CASE(Int64, {{"data", m.data}});
    LPSS_ECHO_CASE(UInt8, {{"data", m.data}});
    LPSS_ECHO_CASE(UInt16, {{"data", m.data}});
    LPSS_ECHO_CASE(UInt32, {{"data", m.data}});
    LPSS_ECHO_CASE(UInt64, {{"data", m.data}});
    LPSS_ECHO_CASE(Float32, {{"data", m.data}});
    LPSS_ECHO_CASE(Float64, {{"data", m.data}});
    LPSS_ECHO_CASE(String, {{"data", m.data}});
    LPSS_ECHO_CASE(ColorRGBA, {{"r", m.r}, {"g", m.g}, {"b", m.b}, {"a", m.a}});
    LPSS_ECHO_CASE(Header, {{"seq", m.seq}, {"stamp", m.stamp}, {"frame_id", m.frame_id}});
    // geometry
    LPSS_ECHO_CASE(Point, point_json(m));
    LPSS_ECHO_CASE(Point32, {{"x", m.x}, {"y", m.y}, {"z", m.z}});
    LPSS_ECHO_CASE(Vector3, vector3_json(m));
    LPSS_ECHO_CASE(Quaternion, orientation_json(m));
    LPSS_ECHO_CASE(Pose, {{"position", point_json(m.position)}, {"orientation", orientation_json(m.orientation)}});
    LPSS_ECHO_CASE(Twist, {{"linear", vector3_json(m.linear)}, {"angular", vector3_json(m.angular)}});
    LPSS_ECHO_CASE(Wrench, {{"force", vector3_json(m.force)}, {"torque", vector3_json(m.torque)}});
    LPSS_ECHO_CASE(Transform, {{"translation", vector3_json(m.translation)}, {"rotation", orientation_json(m.rotation)}});
    // sensor
    LPSS_ECHO_CASE(Imu, {
                            {"header", header_json(m.header)},
                            {"orientation", orientation_json(m.orientation)},
                            {"orientation_covariance", m.orientation_covariance},
                            {"angular_velocity", vector3_json(m.angular_velocity)},
                            {"angular_velocity_covariance", m.angular_velocity_covariance},
                            {"linear_acceleration", vector3_json(m.linear_acceleration)},
                            {"linear_acceleration_covariance", m.linear_acceleration_covariance},
                        });
    LPSS_ECHO_CASE(CameraInfo, {{"header", header_json(m.header)}, {"height", m.height}, {"width", m.width}, {"D", m.D}, {"K", m.K}});
    LPSS_ECHO_CASE(Image, {{"header", header_json(m.header)}, {"height", m.height}, {"width", m.width}, {"encoding", m.encoding}, {"data_size", m.data.size()}});
    LPSS_ECHO_CASE(JointState, {{"header", header_json(m.header)}, {"name", m.name}, {"position", m.position}, {"velocity", m.velocity}, {"effort", m.effort}});
    LPSS_ECHO_CASE(MultiDOFJointState, {
                                           {"header", header_json(m.header)},
                                           {"joint_names", m.joint_names},
                                           {"transforms", json_array(m.transforms, transform_json)},
                                           {"twist", json_array(m.twist, twist_json)},
                                           {"wrench", json_array(m.wrench, wrench_json)},
                                       });
    fmt::println("\033[33mUnsupported message type: {}\033[0m", msgtype);
}

#undef LPSS_ECHO_CASE

} // namespace rdt
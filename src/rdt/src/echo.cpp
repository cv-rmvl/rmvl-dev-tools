
#include <fmt/format.h>
#include <fmt/ranges.h>
#include <ranges>

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

using namespace fmt;
using namespace fmt::literals;

using namespace rm;

namespace rdt {

// 用于简化 echo 中按消息类型分发的宏
#define LPSS_ECHO_CASE(MsgClass, ...)                                                                                             \
    if (msgtype == msg::MsgClass::msg_type) {                                                                                     \
        _active_sub = createSubscriber<msg::MsgClass>(topic, [cb = std::move(callback), topic, msgtype](const msg::MsgClass &m) { \
            cb(fmt::format(__VA_ARGS__), 6 + topic.size() + msgtype.size() + m.compact_size());                                   \
        });                                                                                                                       \
        return;                                                                                                                   \
    }

void LpssTool::echo(std::string_view topic, std::string_view msgtype, EchoCallback callback) {
    // std
    LPSS_ECHO_CASE(Bool, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(Char, R"({{"data": "{}"}})", m.data)
    LPSS_ECHO_CASE(Int8, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(Int16, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(Int32, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(Int64, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(UInt8, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(UInt16, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(UInt32, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(UInt64, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(Float32, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(Float64, R"({{"data": {}}})", m.data)
    LPSS_ECHO_CASE(String, R"({{"data": "{}"}})", m.data)
    LPSS_ECHO_CASE(ColorRGBA, R"({{"r": {}, "g": {}, "b": {}, "a": {}}})", m.r, m.g, m.b, m.a)
    LPSS_ECHO_CASE(Header, R"({{"seq": {}, "stamp": {}, "frame_id": "{}"}})", m.seq, m.stamp, m.frame_id)
    // geometry
    LPSS_ECHO_CASE(Point, R"({{"x": {}, "y": {}, "z": {}}})", m.x, m.y, m.z)
    LPSS_ECHO_CASE(Point32, R"({{"x": {}, "y": {}, "z": {}}})", m.x, m.y, m.z)
    LPSS_ECHO_CASE(Vector3, R"({{"x": {}, "y": {}, "z": {}}})", m.x, m.y, m.z)
    LPSS_ECHO_CASE(Quaternion, R"({{"x": {}, "y": {}, "z": {}, "w": {}}})", m.x, m.y, m.z, m.w)
    LPSS_ECHO_CASE(Pose, R"({{"position": {{"x": {}, "y": {}, "z": {}}}, "orientation": {{"x": {}, "y": {}, "z": {}, "w": {}}}}})",
                   m.position.x, m.position.y, m.position.z, m.orientation.x, m.orientation.y, m.orientation.z, m.orientation.w)
    LPSS_ECHO_CASE(Twist, R"({{"linear": {{"x": {}, "y": {}, "z": {}}}, "angular": {{"x": {}, "y": {}, "z": {}}}}})",
                   m.linear.x, m.linear.y, m.linear.z, m.angular.x, m.angular.y, m.angular.z)
    LPSS_ECHO_CASE(Wrench, R"({{"force": {{"x": {}, "y": {}, "z": {}}}, "torque": {{"x": {}, "y": {}, "z": {}}}}})",
                   m.force.x, m.force.y, m.force.z, m.torque.x, m.torque.y, m.torque.z)
    LPSS_ECHO_CASE(Transform, R"({{"translation": {{"x": {}, "y": {}, "z": {}}}, "rotation": {{"x": {}, "y": {}, "z": {}, "w": {}}}}})",
                   m.translation.x, m.translation.y, m.translation.z, m.rotation.x, m.rotation.y, m.rotation.z, m.rotation.w)
    // sensor
    LPSS_ECHO_CASE(Imu, R"({{"header": {{"seq": {}, "stamp": {}, "frame_id": "{}"}}, "orientation": {{"x": {}, "y": {}, "z": {}, "w": {}}}, )"
                        R"("orientation_covariance": [{}], "angular_velocity": {{"x": {}, "y": {}, "z": {}}}, "angular_velocity_covariance": [{}], )"
                        R"("linear_acceleration": {{"x": {}, "y": {}, "z": {}}}, "linear_acceleration_covariance": [{}]}})",
                   m.header.seq, m.header.stamp, m.header.frame_id, m.orientation.x, m.orientation.y, m.orientation.z, m.orientation.w,
                   fmt::join(m.orientation_covariance, ", "), m.angular_velocity.x, m.angular_velocity.y, m.angular_velocity.z,
                   fmt::join(m.angular_velocity_covariance, ", "), m.linear_acceleration.x, m.linear_acceleration.y, m.linear_acceleration.z,
                   fmt::join(m.linear_acceleration_covariance, ", "))
    LPSS_ECHO_CASE(CameraInfo, R"({{"header": {{"seq": {}, "stamp": {}, "frame_id": "{}"}}, "height": {}, "width": {}, "D": [{}], "K": [{}]}})",
                   m.header.seq, m.header.stamp, m.header.frame_id, m.height, m.width, fmt::join(m.D, ", "), fmt::join(m.K, ", "))
    LPSS_ECHO_CASE(Image, R"({{"header": {{"seq": {}, "stamp": {}, "frame_id": "{}"}}, "height": {}, "width": {}, "encoding": "{}", "data_size": {}}})",
                   m.header.seq, m.header.stamp, m.header.frame_id, m.height, m.width, m.encoding, m.data.size())
    LPSS_ECHO_CASE(JointState, R"({{"header": {{"seq": {}, "stamp": {}, "frame_id": "{}"}}, "name": {}, "position": [{}], "velocity": [{}], "effort": [{}]}})",
                   m.header.seq, m.header.stamp, m.header.frame_id, fmt::join(m.name, ", "), fmt::join(m.position, ", "),
                   fmt::join(m.velocity, ", "), fmt::join(m.effort, ", "))
    LPSS_ECHO_CASE(MultiDOFJointState,
                   R"({{"header": {{"seq": {}, "stamp": {}, "frame_id": "{}"}}, "joint_names": [{}], "transforms": [{}], "twist": [{}], "wrench": [{}]}})",
                   m.header.seq, m.header.stamp, m.header.frame_id,
                   fmt::join(m.joint_names | std::views::transform([](const auto &s) { return fmt::format("\"{}\"", s); }), ", "),
                   fmt::join(m.transforms | std::views::transform([](const auto &t) {
                                 return fmt::format(R"({{"translation": {{"x": {}, "y": {}, "z": {}}}, "rotation": {{"x": {}, "y": {}, "z": {}, "w": {}}}}})",
                                                    t.translation.x, t.translation.y, t.translation.z, t.rotation.x, t.rotation.y, t.rotation.z, t.rotation.w);
                             }),
                             ", "),
                   fmt::join(m.twist | std::views::transform([](const auto &tw) {
                                 return fmt::format(R"({{"linear": {{"x": {}, "y": {}, "z": {}}}, "angular": {{"x": {}, "y": {}, "z": {}}}}})",
                                                    tw.linear.x, tw.linear.y, tw.linear.z, tw.angular.x, tw.angular.y, tw.angular.z);
                             }),
                             ", "),
                   fmt::join(m.wrench | std::views::transform([](const auto &w) {
                                 return fmt::format(R"({{"force": {{"x": {}, "y": {}, "z": {}}}, "torque": {{"x": {}, "y": {}, "z": {}}}}})",
                                                    w.force.x, w.force.y, w.force.z, w.torque.x, w.torque.y, w.torque.z);
                             }),
                             ", "))
    fmt::println("\033[33mUnsupported message type: {}\033[0m", msgtype);
}

#undef LPSS_ECHO_CASE

} // namespace rdt
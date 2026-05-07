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

#include <rmvlmsg/sensor/camera_info.hpp>
#include <rmvlmsg/sensor/image.hpp>
#include <rmvlmsg/sensor/imu.hpp>
#include <rmvlmsg/sensor/joint_state.hpp>
#include <rmvlmsg/sensor/multi_dofjoint_state.hpp>

#include <rmvlmsg/motion/joint_trajectory.hpp>
#include <rmvlmsg/motion/tf.hpp>
#include <rmvlmsg/motion/urdf.hpp>

#include <rmvlmsg/viz/marker_array.hpp>

#include "rdt/rdt.hpp"

using namespace rm;

namespace rdt {

// 用于简化 echo 中按消息类型分发的宏
#define LPSS_ECHO_CASE(MsgClass)                                                                                      \
    do {                                                                                                              \
        if (msgtype == msg::MsgClass::msg_type) {                                                                     \
            _active_sub = createSubscriber<msg::MsgClass>(topic, [cb = std::move(callback)](const msg::MsgClass &m) { \
                cb(m.json());                                                                                         \
            });                                                                                                       \
            return;                                                                                                   \
        }                                                                                                             \
    } while (0)

void LpssTool::echo(std::string_view topic, std::string_view msgtype, EchoCallback callback) {
    // std
    LPSS_ECHO_CASE(Bool);
    LPSS_ECHO_CASE(Char);
    LPSS_ECHO_CASE(Int8);
    LPSS_ECHO_CASE(Int16);
    LPSS_ECHO_CASE(Int32);
    LPSS_ECHO_CASE(Int64);
    LPSS_ECHO_CASE(UInt8);
    LPSS_ECHO_CASE(UInt16);
    LPSS_ECHO_CASE(UInt32);
    LPSS_ECHO_CASE(UInt64);
    LPSS_ECHO_CASE(Float32);
    LPSS_ECHO_CASE(Float64);
    LPSS_ECHO_CASE(String);
    LPSS_ECHO_CASE(ColorRGBA);
    LPSS_ECHO_CASE(Header);
    LPSS_ECHO_CASE(Time);
    // geometry
    LPSS_ECHO_CASE(Point);
    LPSS_ECHO_CASE(Point32);
    LPSS_ECHO_CASE(Vector3);
    LPSS_ECHO_CASE(Quaternion);
    LPSS_ECHO_CASE(Pose);
    LPSS_ECHO_CASE(Twist);
    LPSS_ECHO_CASE(Wrench);
    LPSS_ECHO_CASE(Transform);
    // sensor
    LPSS_ECHO_CASE(Imu);
    LPSS_ECHO_CASE(CameraInfo);
    LPSS_ECHO_CASE(Image);
    LPSS_ECHO_CASE(JointState);
    LPSS_ECHO_CASE(MultiDOFJointState);
    // motion
    LPSS_ECHO_CASE(TF);
    LPSS_ECHO_CASE(URDF);
    LPSS_ECHO_CASE(JointTrajectoryPoint);
    LPSS_ECHO_CASE(JointTrajectory);
    // viz
    LPSS_ECHO_CASE(Marker);
    LPSS_ECHO_CASE(MarkerArray);
    printf("\033[33mUnsupported message type: %s\033[0m", msgtype.data());
}

#undef LPSS_ECHO_CASE

} // namespace rdt
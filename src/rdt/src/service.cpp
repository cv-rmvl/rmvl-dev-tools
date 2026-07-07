#include "rdt/rdt.hpp"

#include <future>

#include <nlohmann/json.hpp>

#include <rmvlsrv/sensor/set_camera_info.hpp>
#include <rmvlsrv/std/empty.hpp>
#include <rmvlsrv/std/set_bool.hpp>
#include <rmvlsrv/std/trigger.hpp>

using namespace rm;
using namespace std::literals;

namespace rdt {

static std::string json_escape(std::string_view text) {
    std::string result;
    result.reserve(text.size());
    for (auto ch : text) {
        switch (ch) {
        case '\\':
            result += "\\\\";
            break;
        case '"':
            result += "\\\"";
            break;
        case '\n':
            result += "\\n";
            break;
        case '\r':
            result += "\\r";
            break;
        case '\t':
            result += "\\t";
            break;
        default:
            result += ch;
            break;
        }
    }
    return result;
}

static std::string normalize_type(std::string_view type) {
    auto normalized = std::string(type);
    if (auto pos = normalized.find("_Request"); pos != std::string::npos)
        normalized.erase(pos);
    else if (auto pos = normalized.find("_Response"); pos != std::string::npos)
        normalized.erase(pos);
    return normalized;
}

static std::string to_json(const srv::Empty::Response &) {
    return "{}";
}

static std::string to_json(const srv::Trigger::Response &response) {
    return "{ \"success\": "s + (response.success ? "true" : "false") + ", \"message\": \"" + json_escape(response.message) + "\" }";
}

static std::string to_json(const srv::SetBool::Response &response) {
    return "{ \"success\": "s + (response.success ? "true" : "false") + ", \"message\": \"" + json_escape(response.message) + "\" }";
}

static std::string to_json(const srv::SetCameraInfo::Response &response) {
    return "{ \"success\": "s + (response.success ? "true" : "false") + ", \"status_message\": \"" + json_escape(response.status_message) + "\" }";
}

static std::string trim(std::string_view text) {
    auto first = text.find_first_not_of(" \t\r\n");
    if (first == std::string_view::npos)
        return {};
    auto last = text.find_last_not_of(" \t\r\n");
    return std::string(text.substr(first, last - first + 1));
}

static bool parse_json(std::string_view request, rm::json &json, std::string &error) {
    auto text = trim(request);
    if (text.empty())
        text = "{}";
    try {
        json = rm::json::parse(text);
    } catch (const std::exception &e) {
        error = "invalid JSON request: "s + e.what();
        return false;
    }
    if (!json.is_object()) {
        error = "JSON request must be an object";
        return false;
    }
    return true;
}

static bool parse_request(std::string_view request, srv::Empty::Request &, std::string &error) {
    rm::json json;
    return parse_json(request, json, error);
}

static bool parse_request(std::string_view request, srv::Trigger::Request &, std::string &error) {
    rm::json json;
    return parse_json(request, json, error);
}

static bool parse_request(std::string_view request, srv::SetBool::Request &req, std::string &error) {
    rm::json json;
    if (!parse_json(request, json, error))
        return false;
    if (!json.contains("data")) {
        error = "std/SetBool request requires JSON field 'data'";
        return false;
    }
    if (!json["data"].is_boolean()) {
        error = "std/SetBool field 'data' must be a boolean";
        return false;
    }
    req.data = json["data"].get<bool>();
    return true;
}

static bool parse_time(const rm::json &json, msg::Time &time, std::string &error) {
    if (!json.is_object()) {
        error = "std/Time must be an object";
        return false;
    }
    if (json.contains("sec"))
        time.sec = json["sec"].get<int32_t>();
    if (json.contains("nsec"))
        time.nsec = json["nsec"].get<uint32_t>();
    return true;
}

static bool parse_header(const rm::json &json, msg::Header &header, std::string &error) {
    if (!json.is_object()) {
        error = "std/Header must be an object";
        return false;
    }
    if (json.contains("stamp") && !parse_time(json["stamp"], header.stamp, error))
        return false;
    if (json.contains("frame_id"))
        header.frame_id = json["frame_id"].get<std::string>();
    return true;
}

template <std::size_t N>
static bool parse_double_array(const rm::json &json, std::array<double, N> &values, std::string_view field, std::string &error) {
    if (!json.is_array() || json.size() != N) {
        error = std::string(field) + " must be an array with " + std::to_string(N) + " numbers";
        return false;
    }
    for (std::size_t i = 0; i < N; ++i)
        values[i] = json[i].get<double>();
    return true;
}

static bool parse_camera_info(const rm::json &json, msg::CameraInfo &camera_info, std::string &error) {
    if (!json.is_object()) {
        error = "sensor/CameraInfo must be an object";
        return false;
    }
    if (json.contains("header") && !parse_header(json["header"], camera_info.header, error))
        return false;
    if (json.contains("height"))
        camera_info.height = json["height"].get<uint32_t>();
    if (json.contains("width"))
        camera_info.width = json["width"].get<uint32_t>();
    if (json.contains("D") && !parse_double_array(json["D"], camera_info.D, "D", error))
        return false;
    if (json.contains("K") && !parse_double_array(json["K"], camera_info.K, "K", error))
        return false;
    return true;
}

static bool parse_request(std::string_view request, srv::SetCameraInfo::Request &req, std::string &error) {
    rm::json json;
    if (!parse_json(request, json, error))
        return false;
    if (!json.contains("camera_info")) {
        error = "sensor/SetCameraInfo request requires JSON field 'camera_info'";
        return false;
    }
    try {
        return parse_camera_info(json["camera_info"], req.camera_info, error);
    } catch (const std::exception &e) {
        error = "invalid sensor/SetCameraInfo request: "s + e.what();
        return false;
    }
}

template <typename SrvType>
static rm::async::Task<> call_task(rm::async::IOContext *ctx, typename lpss::async::Client<SrvType>::ptr client, typename SrvType::Request request,
                                  std::chrono::milliseconds timeout, std::promise<call_result> *promise) {
    rm::async::Timer timer{*ctx};
    co_await timer.sleep_for(200ms);
    auto response = co_await client->call(request, timeout);
    if (response)
        promise->set_value({true, to_json(*response), {}});
    else
        promise->set_value({false, {}, "service call timeout"});
}

template <typename SrvType>
call_result call_builtin(LpssTool &node, rm::async::IOContext &ctx, std::string_view service, const typename SrvType::Request &request,
                         std::chrono::milliseconds timeout) {
    auto client = node.createClient<SrvType>(service);
    if (!client || client->invalid())
        return {false, {}, "failed to create service client"};

    std::promise<call_result> promise;
    auto future = promise.get_future();
    rm::async::co_spawn(ctx, call_task<SrvType>, &ctx, client, request, timeout, &promise);
    return future.get();
}

template <typename SrvType>
call_result call_builtin_json(LpssTool &node, rm::async::IOContext &ctx, std::string_view service, std::string_view request,
                              std::chrono::milliseconds timeout) {
    typename SrvType::Request req;
    std::string error;
    try {
        if (!parse_request(request, req, error))
            return {false, {}, error};
    } catch (const std::exception &e) {
        return {false, {}, "invalid JSON request: "s + e.what()};
    }
    return call_builtin<SrvType>(node, ctx, service, req, timeout);
}

call_result LpssTool::call(std::string_view service, const rdt::service &info, std::string_view request, std::chrono::milliseconds timeout) {
    auto type = normalize_type(info.srvtype.empty() ? info.reqtype : info.srvtype);
    if (type == srv::Empty::srv_type)
        return call_builtin_json<srv::Empty>(*this, _ctx, service, request, timeout);
    if (type == srv::Trigger::srv_type)
        return call_builtin_json<srv::Trigger>(*this, _ctx, service, request, timeout);
    if (type == srv::SetBool::srv_type)
        return call_builtin_json<srv::SetBool>(*this, _ctx, service, request, timeout);
    if (type == srv::SetCameraInfo::srv_type)
        return call_builtin_json<srv::SetCameraInfo>(*this, _ctx, service, request, timeout);
    return {false, {}, "unsupported service type: " + type};
}

} // namespace rdt

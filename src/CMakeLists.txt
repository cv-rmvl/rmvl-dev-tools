cmake_minimum_required(VERSION 3.16)

project(RMVLDevTools LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

configure_file(
  ${CMAKE_CURRENT_SOURCE_DIR}/viz/runtime/path_config.hpp.in
  ${CMAKE_CURRENT_BINARY_DIR}/gen/path_config.hpp
)

include_directories(${CMAKE_CURRENT_BINARY_DIR}/gen)

find_package(RMVL REQUIRED)

add_subdirectory(rdt)

rmvl_add_exe(
  lpss_tool
  SOURCES tool/info.cpp
  DEPENDS rdt
)

rmvl_add_exe(
  lpss_viz
  SOURCES viz/backend_http.cpp viz/backend_node.cpp
  DEPENDS lpss
)
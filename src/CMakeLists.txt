cmake_minimum_required(VERSION 3.16)

project(RMVLDevTools LANGUAGES CXX)

foreach(m graph viz)
  configure_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/${m}/runtime/path_config.hpp.in
    ${CMAKE_CURRENT_BINARY_DIR}/gen/${m}/path_config.hpp
  )
endforeach()

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

target_compile_definitions(
  lpss_viz PRIVATE LVIZ_VERSION="1.0.1"
)

rmvl_add_exe(
  lpss_graph
  SOURCES graph/backend.cpp
  DEPENDS lpss
)

target_compile_definitions(
  lpss_graph PRIVATE LGRAPH_VERSION="1.0.0"
)
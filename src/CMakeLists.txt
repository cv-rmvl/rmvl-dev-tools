cmake_minimum_required(VERSION 3.16)

project(RMVLDevTools LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(RMVL REQUIRED)

add_subdirectory(rdt)

rmvl_add_exe(
  lpss_tool
  SOURCES tool/info.cpp
  DEPENDS rdt
)
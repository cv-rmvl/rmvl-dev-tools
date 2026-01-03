#!/bin/bash

if [ "$#" -lt 1 ]; then
  echo "用法: rmvl create [help | <module_name> [sub_module_1 [sub_module_2] ...]]"
  echo "   help:              显示详细的帮助信息"
  echo "   module_name:       要创建的主模块名称"
  echo "      sub_module_<n>: 可选的子模块名称"
  exit 1
fi

if [ "$1" = "help" ]; then
  echo -e "该命令会在当前目录下生成一个新的 RMVL 模块的基本目录结构和必要文件\n"
  echo "用法: rmvl create <module_name> [sub_module_1 [sub_module_2] ...]"
  space="                 "
  echo "   module_name:  要创建的主模块名称，在 RMVL 库中将作为一个独立的模块，核心 CMake 命令如下"
  echo -e "$space\033[34mrmvl_add_module\033[0m(\n$space  <module_name>\n$space  \033[34mDEPENDS\033[0m core\n$space)\n"
  echo "   sub_module_n: 可选的子模块名称，每个子模块也将作为一个独立的模块，依赖于主模块，核心 CMake 命令如下"
  echo -e "$space\033[34mforeach\033[0m(sub_module \033[34m\${sub_modules}\033[0m)\n$space  \033[34mrmvl_add_module\033[0m("
  echo -e "$space    <sub_module>\n$space    \033[34mDEPENDS\033[0m <module_name>\n$space  )\n$space\033[34mendforeach\033[0m()\n"
  echo "示例: rmvl create my_module sub1 sub2 sub3"
  echo "   该命令将在当前目录下创建名为 my_module 的主模块，并包含 sub1、sub2 和 sub3 三个子模块"
  exit 0
fi

module_name=$1
shift
sub_modules=("$@")

if [ -d "$module_name" ]; then
  echo -e "\033[31mError: Directory '$module_name' already exists.\033[0m"
  exit 1
fi

echo "Creating module structure for '$module_name'..."

# create main module directory
mkdir -p $module_name/src
mkdir -p $module_name/test
mkdir -p $module_name/perf
mkdir -p $module_name/param
if [ ${#sub_modules[@]} = 0 ]; then
  mkdir -p $module_name/include/rmvl/
else
  for sub_module in "${sub_modules[@]}"; do
    mkdir -p $module_name/include/rmvl/$module_name/$sub_module
    mkdir -p $module_name/src/$sub_module
  done
fi

# create main module files
touch $module_name/CMakeLists.txt
touch $module_name/include/rmvl/$module_name.hpp
touch $module_name/src/$module_name.cpp
for sub_module in "${sub_modules[@]}"; do
  touch $module_name/include/rmvl/$module_name/$sub_module.hpp
  touch $module_name/src/$sub_module/$sub_module.cpp
done
touch $module_name/perf/perf_$module_name.cpp
touch $module_name/test/test_$module_name.cpp

# initialize CMakeLists.txt
{
  echo "rmvl_add_module("
  echo "  $module_name"
  echo "  DEPENDS core"
  echo ")"

  for sub_module in "${sub_modules[@]}"; do
    echo ""
    echo "rmvl_add_module("
    echo "  $sub_module"
    echo "  DEPENDS $module_name"
    echo ")"
  done

  echo -e "\n# --------------------------------------------------------------------------"
  echo "#  Build the test program"
  echo "# --------------------------------------------------------------------------"
  echo "if(BUILD_TESTS)"
  echo "  rmvl_add_test("
  echo "    $module_name Unit"
  echo "    DEPENDS $module_name"
  echo "    EXTERNAL GTest::gtest_main"
  echo "  )"
  echo -e "endif(BUILD_TESTS)\n"

  echo "if(BUILD_PERF_TESTS)"
  echo "  rmvl_add_test("
  echo "    $module_name Performance"
  echo "    DEPENDS $module_name"
  echo "    EXTERNAL benchmark::benchmark_main"
  echo "  )"
  echo "endif(BUILD_PERF_TESTS)"
} >> $module_name/CMakeLists.txt

# initialize *.hpp files
echo -e "#pragma once\n" > $module_name/include/rmvl/$module_name.hpp
for sub_module in "${sub_modules[@]}"; do
  echo -e "#pragma once\n" > $module_name/include/rmvl/$module_name/$sub_module.hpp
done

echo -e "\033[32mCreating module structure for '$module_name' done!\033[0m"

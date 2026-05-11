#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
source "$TOOLS_ROOT/setup/rdtcolor.bash"
rdtcolor_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl create${C_RESET} ${C_DIM}[help | <module_name> [sub_module_1 [sub_module_2] ...]]${C_RESET}\n"
  echo -e "${C_BOLD}参数:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}             ${C_DIM}显示详细的帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}module_name${C_RESET}      ${C_DIM}要创建的主模块名称${C_RESET}"
  echo -e "  ${C_CYAN}sub_module_<n>${C_RESET}   ${C_DIM}可选的子模块名称${C_RESET}"
}

if [ "$#" -lt 1 ]; then
  usage
  exit 1
fi

if [ "$1" = "help" ]; then
  echo -e "${C_DIM}该命令会在当前目录下生成一个新的 RMVL 模块的基本目录结构和必要文件${C_RESET}"
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl create${C_RESET} ${C_DIM}<module_name> [sub_module_1 [sub_module_2] ...]${C_RESET}"
  space="                 "
  echo -e "  ${C_CYAN}module_name${C_RESET} ${C_DIM}要创建的主模块名称，在 RMVL 库中将作为一个独立的模块，核心 CMake 命令如下${C_RESET}"
  echo -e "$space${C_CYAN}rmvl_add_module${C_RESET}(\n$space  <module_name>\n$space  ${C_CYAN}DEPENDS${C_RESET} core\n$space)"
  echo -e "  ${C_CYAN}sub_module_n${C_RESET} ${C_DIM}可选的子模块名称，每个子模块也将作为一个独立的模块，核心 CMake 命令如下${C_RESET}"
  echo -e "$space${C_CYAN}foreach${C_RESET}(sub_module ${C_CYAN}\${sub_modules}${C_RESET})\n$space  ${C_CYAN}rmvl_add_module${C_RESET}("
  echo -e "$space    <sub_module>\n$space    ${C_CYAN}DEPENDS${C_RESET} <module_name>\n$space  )\n$space${C_CYAN}endforeach${C_RESET}()"
  echo -e "${C_BOLD}示例:${C_RESET} ${C_CYAN}rmvl create my_module sub1 sub2 sub3${C_RESET}"
  echo -e "  ${C_DIM}该命令将在当前目录下创建名为 my_module 的主模块，并包含 sub1、sub2 和 sub3 三个子模块${C_RESET}"
  exit 0
fi

module_name=$1
shift
sub_modules=("$@")

if [ -d "$module_name" ]; then
  echo -e "${C_RED}Error: Directory '$module_name' already exists.${C_RESET}"
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

echo -e "${C_GREEN}Creating module structure for '$module_name' done!${C_RESET}"

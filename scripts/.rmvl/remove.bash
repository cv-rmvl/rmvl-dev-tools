#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
source "$TOOLS_ROOT/setup/rdtcolor.bash"
rdtcolor_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl remove${C_RESET} ${C_DIM}[help | tool | lib]${C_RESET}\n"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}tool${C_RESET}   ${C_DIM}移除 rmvl-dev-tools 工具${C_RESET}"
  echo -e "  ${C_CYAN}lib${C_RESET}    ${C_DIM}移除 RMVL 动态/静态库${C_RESET}"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")"/../.. && pwd)"

# 移除 rmvl-dev-tools 工具
function remove_tool() {
  RMVL_ROOT_=$RMVL_ROOT_
  bash $project_dir/setup/uninstall.bash
  echo -e "${C_GREEN}rmvl-dev-tools 工具已被移除，重启终端后生效${C_RESET}"
  echo -e "${C_YELLOW}注意: RMVL 仓库代码仍保留在 $RMVL_ROOT_，如需移除请执行以下命令手动删除该目录。${C_RESET}"
  echo -e "\nrm -rf $RMVL_ROOT_"
}

# 移除 RMVL 动态/静态库
function remove_lib() {
  sudo rm -f /usr/local/lib/librmvl_*
  sudo rm -rf /usr/local/lib/cmake/RMVL
  sudo rm -rf /usr/local/include/RMVL
  sudo rm -rf /usr/local/share/doc/RMVL
  echo -e "${C_GREEN}RMVL 库文件、头文件、CMake 配置、文档已被移除${C_RESET}"
}

case $mode in
  help)
    usage
    ;;
  tool)
    remove_tool
    ;;
  lib)
    remove_lib
    ;;
  *)
    usage
    exit 1
    ;;
esac
#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
source "$TOOLS_ROOT/setup/bash/rdtcolor.bash"
rdtcolor_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss node${C_RESET} ${C_DIM}[help | info | list]${C_RESET}"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}info${C_RESET}   ${C_DIM}显示节点信息${C_RESET}"
  echo -e "  ${C_CYAN}list${C_RESET}   ${C_DIM}列出所有节点，-c 仅显示数量${C_RESET}"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
shift
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function node_info() {
  if [ $# -lt 1 ]; then
    echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss node info${C_RESET} ${C_DIM}<node_name>${C_RESET}"
    exit 1
  fi
  node_name=$1
  $cur_dir/_autogen_lpss_tool ni "$node_name"
}

function node_list() {
  $cur_dir/_autogen_lpss_tool nl "$@"
}

if [ ! -f "$cur_dir/_autogen_lpss_tool" ]; then
  echo "lpss node 工具尚未实现。敬请期待！"
  exit 1
fi

case $mode in
  help)
    usage
    ;;
  info)
    node_info "$@"
    ;;
  list)
    node_list "$@"
    ;;
  *)
    usage
    exit 1
    ;;
esac

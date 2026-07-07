#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
source "$TOOLS_ROOT/setup/bash/rdtcolor.bash"
rdtcolor_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss service${C_RESET} ${C_DIM}[help | info | list | type | find | call]${C_RESET}"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}info${C_RESET}   ${C_DIM}显示服务信息${C_RESET}"
  echo -e "  ${C_CYAN}list${C_RESET}   ${C_DIM}列出所有服务，-c 仅显示数量${C_RESET}"
  echo -e "  ${C_CYAN}type${C_RESET}   ${C_DIM}显示服务类型${C_RESET}"
  echo -e "  ${C_CYAN}find${C_RESET}   ${C_DIM}按服务类型查找服务，-c 仅显示数量${C_RESET}"
  echo -e "  ${C_CYAN}call${C_RESET}   ${C_DIM}使用 JSON 请求调用内置服务${C_RESET}"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
shift
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function service_with_arg() {
  local cmd=$1
  local label=$2
  local arg_name=$3
  local arg_desc=$4
  if [ $# -lt 5 ]; then
    echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss service $label${C_RESET} ${C_DIM}<$arg_name>${C_RESET}"
    echo -e "  ${C_CYAN}$arg_name${C_RESET}   ${C_DIM}$arg_desc${C_RESET}"
    exit 1
  fi
  "$cur_dir/_autogen_lpss_tool" "$cmd" "${@:5}"
}

case $mode in
  help)
    usage
    ;;
  info)
    service_with_arg si info service_name 服务名称 "$@"
    ;;
  list)
    "$cur_dir/_autogen_lpss_tool" sl "$@"
    ;;
  type)
    service_with_arg st type service_name 服务名称 "$@"
    ;;
  find)
    service_with_arg sf find service_type 服务类型 "$@"
    ;;
  call)
    if [ $# -lt 1 ]; then
      echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss service call${C_RESET} ${C_DIM}<service_name> [json_request]${C_RESET}"
      echo -e "  ${C_CYAN}service_name${C_RESET}   ${C_DIM}服务名称${C_RESET}"
      exit 1
    fi
    "$cur_dir/_autogen_lpss_tool" sc "$@"
    ;;
  *)
    usage
    exit 1
    ;;
esac

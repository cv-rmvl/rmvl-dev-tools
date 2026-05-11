#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
source "$TOOLS_ROOT/setup/rdtcolor.bash"
rdtcolor_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss topic${C_RESET} ${C_DIM}[help | info | list | echo | pub | type | hz | bw]${C_RESET}"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}info${C_RESET}   ${C_DIM}显示话题信息${C_RESET}"
  echo -e "  ${C_CYAN}list${C_RESET}   ${C_DIM}列出所有话题${C_RESET}"
  echo -e "  ${C_CYAN}echo${C_RESET}   ${C_DIM}显示话题内容${C_RESET}"
  echo -e "  ${C_CYAN}pub${C_RESET}    ${C_DIM}发布话题${C_RESET}"
  echo -e "  ${C_CYAN}type${C_RESET}   ${C_DIM}显示话题类型${C_RESET}"
  echo -e "  ${C_CYAN}hz${C_RESET}     ${C_DIM}测量话题发布频率，单位为 Hz${C_RESET}"
  echo -e "  ${C_CYAN}bw${C_RESET}     ${C_DIM}测量话题带宽，单位为 MB/s、kB/s 或 B/s${C_RESET}"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
shift
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function topic_with_name() {
  local cmd=$1
  local label=$2
  if [ $# -lt 3 ]; then
    echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}lpss topic $label${C_RESET} ${C_DIM}<topic_name>${C_RESET}"
    echo -e "  ${C_CYAN}topic_name${C_RESET}   ${C_DIM}话题名称${C_RESET}"
    exit 1
  fi
  $cur_dir/_autogen_lpss_tool "$cmd" "$3"
}

function topic_list() {
  $cur_dir/_autogen_lpss_tool tl
}

function topic_pub() {
  echo "" 
}

case $mode in
  help)
    usage
    ;;
  info)
    topic_with_name ti info "$@"
    ;;
  list)
    topic_list
    ;;
  echo)
    topic_with_name te echo "$@"
    ;;
  pub)
    topic_pub "$@"
    ;;
  type)
    topic_with_name tt type "$@"
    ;;
  hz)
    topic_with_name thz hz "$@"
    ;;
  bw)
    topic_with_name tbw bw "$@"
    ;;
  *)
    usage
    exit 1
    ;;
esac
#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
source "$TOOLS_ROOT/setup/bash/rdtui.bash"
rdtui_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rdt dev${C_RESET} ${C_DIM}[help | code | nvim | dir]${C_RESET}\n"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}code${C_RESET}   ${C_DIM}在 Visual Studio Code 中打开本地 RMVL${C_RESET}"
  echo -e "  ${C_CYAN}nvim${C_RESET}   ${C_DIM}在 Neovim 中打开本地 RMVL${C_RESET}"
  echo -e "  ${C_CYAN}dir${C_RESET}    ${C_DIM}Linux 上使用 nautilus 打开本地 RMVL${C_RESET}"
}

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

mode=$1

case "$mode" in
  help)
    usage
    ;;
  code)
    if ! command -v code &> /dev/null; then
      echo -e "${C_RED}Visual Studio Code 未安装或 'code' 命令在 PATH 中不可用。${C_RESET}"
      exit 1
    fi
    code "$RMVL_ROOT_"
    ;;
  nvim)
    if ! command -v nvim &> /dev/null; then
      echo -e "${C_RED}Neovim 未安装或 'nvim' 命令在 PATH 中不可用。${C_RESET}"
      exit 1
    fi
    nvim "$RMVL_ROOT_"
    ;;
  dir)
    if ! command -v nautilus &> /dev/null; then
      echo -e "${C_RED}Nautilus 文件管理器未安装或 'nautilus' 命令在 PATH 中不可用。${C_RESET}"
      exit 1
    fi
    nautilus "$RMVL_ROOT_"
    ;;
  *)
    usage
    exit 1
    ;;
esac

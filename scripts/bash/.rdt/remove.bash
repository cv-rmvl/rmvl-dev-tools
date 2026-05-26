#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
source "$TOOLS_ROOT/setup/bash/rdtui.bash"
rdtui_init
RDT_REMOVE_UI_OPEN=0

function cleanup() {
  if [ "${RDT_REMOVE_UI_OPEN:-0}" -eq 1 ]; then
    ui_close
  fi
}

trap 'cleanup' EXIT

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rdt remove${C_RESET} ${C_DIM}[help | tool | lib]${C_RESET}\n"
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
project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")"/../../.. && pwd)"

function read_rmvl_root() {
  local root="${RMVL_ROOT_:-}"
  local bashrc="$HOME/.bashrc"
  local marker_start="# >>> rmvl-dev-tools >>>"
  local line=""

  if [ -z "$root" ] && [ -f "$bashrc" ] && grep -qF "$marker_start" "$bashrc"; then
    line=$(grep -A1 "$marker_start" "$bashrc" | tail -n1 || true)
    if [[ "$line" == *"export RMVL_ROOT_="* ]]; then
      root=${line#*export RMVL_ROOT_=\"}
      root=${root%\"}
    fi
  fi

  printf "%s" "$root"
}

function remove_dir() {
  local target="$1"
  local label="$2"

  if [ -z "$target" ]; then
    log_warn "$label 路径为空，已跳过"
    return 0
  fi

  if [ ! -d "$target" ]; then
    log_warn "$label 路径不存在，已跳过: $target"
    return 0
  fi

  target="$(cd "$target" && pwd)"
  if [ "$target" = "/" ] || [ "$target" = "$HOME" ]; then
    log_error "$label 路径过于危险，已拒绝删除: $target"
    return 0
  fi

  log_info "正在移除 $label: $target"
  rm -rf "$target"
  log_success "$label 已移除"
}

# 移除 rmvl-dev-tools 工具
function remove_tool() {
  local remove_rmvl="no"
  local remove_rdt="yes"
  local rmvl_root=""

  UI_MODE=1
  RDT_REMOVE_UI_OPEN=1
  ui_header "移除 rmvl/rdt 相关工具"
  ui_blank
  ui_select_lr remove_rmvl "是否移除 rmvl 仓库" "移除" "保留" "yes" "no" 1
  ui_select_lr remove_rdt "是否移除 rdt 仓库" "移除" "保留" "yes" "no" 0
  ui_blank

  rmvl_root="$(read_rmvl_root)"

  if [ "$remove_rdt" = "yes" ]; then
    log_info "正在执行 uninstall.bash..."
    bash "$project_dir/setup/bash/uninstall.bash" 2>&1 | ui_prefix_output
    local uninstall_status=${PIPESTATUS[0]}
    if [ "$uninstall_status" -ne 0 ]; then
      ui_close
      return "$uninstall_status"
    fi
    log_success "rdt 配置已移除，重启终端后生效"
  fi

  if [ "$remove_rmvl" = "yes" ]; then
    remove_dir "$rmvl_root" "rmvl 仓库"
  fi

  if [ "$remove_rdt" = "yes" ]; then 
    remove_dir "$project_dir" "rdt 工具"
  fi

  if [ "$remove_rmvl" != "yes" ] && [ "$remove_rdt" != "yes" ]; then
    log_warn "未选择任何移除项"
  fi

  ui_close
  RDT_REMOVE_UI_OPEN=0
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

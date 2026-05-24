#!/bin/bash

set -eEuo pipefail

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BASHRC="$HOME/.bashrc"
BASHRC_BACKUP="$HOME/.bashrc.rmvl.bak"

TMP_DIRS=()
BASHRC_MODIFIED=0
UI_MODE=0
HEADER_TITLE="RDT - the Installation Wizard for RMVL Development Tools"

source "$TOOLS_ROOT/setup/rdtui.bash"
rdtui_init

cleanup() {
  local exit_code=$?
  for dir in "${TMP_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      rm -rf "$dir" 2>/dev/null || true
    fi
  done
  if [ $exit_code -ne 0 ] && [ $BASHRC_MODIFIED -eq 1 ]; then
    if [ -f "$BASHRC_BACKUP" ]; then
      log_warn "异常退出，正在恢复 .bashrc..."
      mv "$BASHRC_BACKUP" "$BASHRC" 2>/dev/null || true
    fi
  else
    rm -f "$BASHRC_BACKUP" 2>/dev/null || true
  fi
  ui_close
  return $exit_code
}

on_interrupt() {
  ui_break_line
  ui_fail_footer "操作取消"
  exit 130
}

on_error() {
  local exit_code=$?
  ui_fail_footer "构建失败"
  return $exit_code
}

trap 'cleanup' EXIT
trap 'on_interrupt' INT
trap 'on_error' ERR

MARKER_START="# >>> rmvl-dev-tools >>>"
MARKER_END="# <<< rmvl-dev-tools <<<"

CONTENT="source \"$TOOLS_ROOT/setup/setup.bash\""

root_path=""
acquisition=""
password=""
build_output="quiet"
optional_deps=""
NON_INTERACTIVE=0

if [ -n "${1:-}" ]; then
  NON_INTERACTIVE=1
  root_path="$1"
  acquisition="local"
fi

if [ "$NON_INTERACTIVE" -eq 0 ]; then
  UI_MODE=1
  ui_header "$HEADER_TITLE"
  ui_blank
  prompt_secret password "请输入本机密码以继续安装"

  if [ -z "$password" ]; then
    ui_fail_footer "未输入密码，无法继续安装"
    exit 1
  fi

  if ! printf '%s\n' "$password" | sudo -S -p '' -v >/dev/null 2>&1; then
    ui_fail_footer "sudo 验证失败"
    exit 1
  fi

  ui_blank
  if [ -z "$acquisition" ]; then
    ui_select_lr acquisition "rmvl 获取方式" "自动下载" "本地路径" "auto" "local" 0
  fi

  if [ "$acquisition" = "local" ]; then
    while true; do
      prompt_input root_path "请输入 rmvl 的路径" "${RMVL_ROOT_:-}"
      if [ -n "$root_path" ]; then
        break
      fi
      log_error "rmvl 路径不能为空"
    done
  else
    root_path="$(cd "$TOOLS_ROOT/.." && pwd)/rmvl"
    ui_select_multi optional_deps "请选择可选的依赖项" \
      "OpenCV" "opencv" \
      "Eigen 3" "eigen3" \
      "open62541（由 CMake 管理安装进程）" "open62541"
  fi

  ui_blank
  ui_select_lr build_output "构建信息显示" "简洁" "详细" "quiet" "verbose" 0
else
  if [ -z "$root_path" ]; then
    log_error "root_path 为空，无法继续安装"
    exit 1
  fi

  if [ -n "${SUDO_PASSWORD:-}" ]; then
    password="$SUDO_PASSWORD"
    if ! printf '%s\n' "$password" | sudo -S -p '' -v >/dev/null 2>&1; then
      ui_fail_footer "sudo 验证失败"
      exit 1
    fi
  else
    if ! sudo -n true 2>/dev/null; then
      if [ -t 0 ] || [ -r /dev/tty ]; then
        previous_ui_mode="$UI_MODE"
        UI_MODE=1
        ui_header "需要 sudo 权限"
        ui_blank
        prompt_secret password "请输入本机密码以继续安装"
        ui_close
        UI_MODE="$previous_ui_mode"

        if [ -z "$password" ]; then
          ui_fail_footer "未输入密码，无法继续安装"
          exit 1
        fi

        if ! printf '%s\n' "$password" | sudo -S -p '' -v >/dev/null 2>&1; then
          ui_fail_footer "sudo 验证失败"
          exit 1
        fi
      else
        ui_fail_footer "非交互模式且无可用 TTY，无法提示密码，请设置 SUDO_PASSWORD 或先执行 sudo -v"
        exit 1
      fi
    fi
  fi
fi

if [ -z "$root_path" ]; then
  log_error "rmvl 路径为空，无法继续安装"
  exit 1
fi

if [ "$acquisition" = "local" ]; then
  if [ ! -d "$root_path" ]; then
    log_error "rmvl 路径不存在: $root_path"
    exit 1
  fi
else
  if [ -d "$root_path" ]; then
    log_warn "检测到 rmvl 已存在，跳过克隆"
  else
    log_info "正在克隆 rmvl 项目到 $root_path..."
    run_cmd git clone https://github.com/cv-rmvl/rmvl.git "$root_path"
  fi
fi

CONTENT="export RMVL_ROOT_=\"$root_path\"
$CONTENT"

update_bashrc_block() {
  local tmp_file
  local skip=0

  tmp_file="$(mktemp)"
  while IFS= read -r line || [ -n "$line" ]; do
    if [ "$line" = "$MARKER_START" ]; then
      printf "%s\n" "$MARKER_START" >> "$tmp_file"
      printf "%s\n" "$CONTENT" >> "$tmp_file"
      skip=1
      continue
    fi
    if [ "$line" = "$MARKER_END" ]; then
      printf "%s\n" "$MARKER_END" >> "$tmp_file"
      skip=0
      continue
    fi
    if [ "$skip" -eq 0 ]; then
      printf "%s\n" "$line" >> "$tmp_file"
    fi
  done < "$BASHRC"

  mv "$tmp_file" "$BASHRC"
}

existing_root_path=""
if [ -f "$BASHRC" ] && grep -qF "$MARKER_START" "$BASHRC"; then
  log_warn "rdt 配置已经存在于 $BASHRC"
  existing_root_path=$(grep -A1 "$MARKER_START" "$BASHRC" | tail -n1 || true)
  if [[ "$existing_root_path" == *"export RMVL_ROOT_="* ]]; then
    existing_root_path=${existing_root_path#*export RMVL_ROOT_=\"}
    existing_root_path=${existing_root_path%\"}
  else
    existing_root_path=""
  fi

  if [ -z "$root_path" ] && [ -n "$existing_root_path" ]; then
    root_path="$existing_root_path"
  elif [ -n "$existing_root_path" ] && [ "$existing_root_path" != "$root_path" ]; then
    log_warn "当前路径与 .bashrc 中已有的不一致，将使用当前路径构建，并更新配置"
    if [ -f "$BASHRC" ]; then
      cp "$BASHRC" "$BASHRC_BACKUP"
      BASHRC_MODIFIED=1
    fi
    update_bashrc_block
  fi
else
  if [ -f "$BASHRC" ]; then
    cp "$BASHRC" "$BASHRC_BACKUP"
  else
    touch "$BASHRC"
  fi
  BASHRC_MODIFIED=1
  {
    echo "$MARKER_START"
    echo "$CONTENT"
    echo "$MARKER_END"
  } >> "$BASHRC"
fi

rmvl_cmake_extra_args=()
optional_packages=()

if [[ " $optional_deps " == *" opencv "* ]]; then
  optional_packages+=("libopencv-dev")
fi
if [[ " $optional_deps " == *" eigen3 "* ]]; then
  optional_packages+=("libeigen3-dev")
fi
if [[ " $optional_deps " == *" open62541 "* ]]; then
  rmvl_cmake_extra_args+=("-DBUILD_OPEN62541=ON")
fi

if [ ${#optional_packages[@]} -gt 0 ]; then
  log_info "正在安装可选依赖: ${optional_packages[*]}"
  run_sudo_cmd apt-get update
  run_sudo_cmd apt-get install -y "${optional_packages[@]}"
  log_success "依赖安装完成"
fi

log_info "正在自动构建 rmvl..."
cur_dir="$(pwd)"
build_ws=$cur_dir/.rmvltmp/rmvl/build
TMP_DIRS+=("$cur_dir/.rmvltmp")
mkdir -p "$build_ws"

run_cmd cmake -S "$root_path" -B "$build_ws" -DCMAKE_BUILD_TYPE=Release -DBUILD_EXTRA=ON "${rmvl_cmake_extra_args[@]}"
run_cmd cmake --build "$build_ws" -j$(nproc)
run_sudo_cmd cmake --install "$build_ws"
log_success "rmvl 构建完成"

unset cur_dir build_ws

log_info "正在构建 rdt..."
run_cmd cmake -S "$TOOLS_ROOT/src" -B "$TOOLS_ROOT/build_tmp"
run_cmd cmake --build "$TOOLS_ROOT/build_tmp"
log_success "rdt 构建完成"

for name in tool viz; do
  cp "$TOOLS_ROOT/build_tmp/lpss_$name" "$TOOLS_ROOT/scripts/.lpss/_autogen_lpss_$name"
done
TMP_DIRS+=("$TOOLS_ROOT/build_tmp")

log_success $'\u2714 安装完成，重启终端后生效'

#!/bin/bash

set -eu

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")"/../.. && pwd)"
UI_MODE=0
source "$project_dir/setup/rdtui.bash"
rdtui_init

TMP_DIRS=()

trap 'cleanup' EXIT
cleanup() {
  local exit_code=$?
  for dir in "${TMP_DIRS[@]}"; do
    if [ -d "$dir" ]; then
      rm -rf "$dir" 2>/dev/null || true
    fi
  done
  return $exit_code
}

ensure_sudo() {
  if sudo -n true 2>/dev/null; then
    return 0
  fi

  local password=""
  local previous_ui_mode="$UI_MODE"

  UI_MODE=1
  header=${1:-"Need Password"}
  ui_header "$header"
  ui_blank
  prompt_secret password "请输入本机密码："
  ui_close
  UI_MODE="$previous_ui_mode"

  if [ -z "$password" ]; then
    echo "未输入密码，无法继续更新"
    exit 1
  fi

  if ! printf '%s\n' "$password" | sudo -S -p '' -v; then
    echo "sudo 验证失败"
    exit 1
  fi
}

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl update${C_RESET} ${C_DIM}[help | tool | doc | code | lib | all]${C_RESET}\n"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}tool${C_RESET}   ${C_DIM}更新 rdt 工具到最新版本，并将自动更新 rmvl 代码${C_RESET}"
  echo -e "  ${C_CYAN}doc${C_RESET}    ${C_DIM}执行 Doxygen 文档生成，并推送到 cv-rmvl.github.io 仓库${C_RESET}"
  echo -e "  ${C_CYAN}code${C_RESET}   ${C_DIM}更新 RMVL 仓库至最新的 2.x 分支代码${C_RESET}"
  echo -e "  ${C_CYAN}lib${C_RESET}    ${C_DIM}执行完整的编译安装流程以更新 RMVL 动态/静态库${C_RESET}"
  echo -e "  ${C_CYAN}all${C_RESET}    ${C_DIM}依次执行 code 和 lib 两个步骤，即更新代码并编译安装${C_RESET}"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

user=$(whoami)
mode=$1

# 更新 rdt 工具
function update_tool() {
  ensure_sudo "更新 rdt 需要 root 权限"

  root_path=$(echo "$RMVL_ROOT_")
  bash $project_dir/setup/uninstall.bash
  cd $project_dir
  git checkout master
  git pull origin master
  bash $project_dir/setup/install.bash "$root_path"
  source "$HOME/.bashrc"
  echo -e "${C_GREEN}rmvl-dev-tools 工具已更新到最新版本。${C_RESET}"
}

# 更新 Doxygen 文档并推送到 cv-rmvl.github.io 仓库
function update_doc() {
  if [ $# -ne 2 ]; then
    echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl update doc${C_RESET} ${C_DIM}<folder>${C_RESET}"
    echo -e "  ${C_CYAN}folder${C_RESET} ${C_DIM}文档存放的文件夹名称，例如 2.x${C_RESET}"
    exit 1
  fi
  folder_name=$2

  cur_dir="$(pwd)"
  build_ws=$cur_dir/.rmvltmp/rmvl/build
  mkdir -p $build_ws && cd .rmvltmp
  TMP_DIRS+=("$cur_dir/.rmvltmp")
  doc_repo=cv-rmvl.github.io
  if [ -d $doc_repo ]; then
    rm -rf $doc_repo
  fi
  git clone git@github.com:cv-rmvl/$doc_repo.git --depth 1
  doc_ws=$cur_dir/.rmvltmp/$doc_repo

  cmake -S $RMVL_ROOT_ -B $build_ws \
    -D CMAKE_BUILD_TYPE=Release \
    -D BUILD_DOCS=ON \
    -D BUILD_EXTRA=ON \
    -D BUILD_PYTHON=ON
  cmake --build $build_ws --target doxygen
  doc_dst="$doc_ws/docs/$folder_name"
  if [ -d "$doc_dst" ]; then
    rm -rf "$doc_dst"
  fi
  mkdir -p "$doc_dst"
  cp -r $build_ws/doc/doxygen/html/* "$doc_dst"
  cd $doc_ws
  git add .
  git commit -m "更新 RMVL 文档 - 由 $user/rmvl-dev-tools 于 $(date +"%Y-%m-%d %H:%M:%S") 提交"
  git push origin master

  cd $cur_dir
}

# 更新 RMVL 代码到最新的 2.x 分支
function update_code() {
  cur_dir="$(pwd)"
  cd $RMVL_ROOT_
  git stash push -m "rmvl-dev-tools auto stash"
  git fetch origin
  git checkout 2.x
  git reset --hard origin/2.x
  cd $cur_dir
  echo -e "${C_GREEN}更新代码完成${C_RESET}"
}

# 编译安装 RMVL 库
function update_lib() {
  cur_dir="$(pwd)"
  build_ws=$cur_dir/.rmvltmp/rmvl/build
  TMP_DIRS+=("$cur_dir/.rmvltmp")
  mkdir -p $build_ws

  # 判断是 debug 还是 release 模式
  if [ $# -ne 2 ]; then
    echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl update lib${C_RESET} ${C_DIM}<mode>${C_RESET}"
    echo -e "  ${C_CYAN}mode${C_RESET} ${C_DIM}模式名称，包括 release 和 debug${C_RESET}"
    exit 1
  fi
  if [ "$2" == "release" ]; then
    build_type="Release"
  elif [ "$2" == "debug" ]; then
    build_type="Debug"
  else
    echo "无效的模式: $2"
    echo "请使用 release 或 debug"
    exit 1
  fi

  ensure_sudo "构建后安装 rmvl 需要 root 权限"

  cmake -S $RMVL_ROOT_ -B $build_ws -D CMAKE_BUILD_TYPE=$build_type -D BUILD_EXTRA=ON
  cmake --build $build_ws -j$(nproc)
  sudo cmake --install $build_ws
  echo -e "${C_GREEN}RMVL 完成部署${C_RESET}"
}

case "$mode" in
  help)
    usage
    ;;
  tool)
    update_code
    update_tool
    ;;
  doc)
    update_doc "$@"
    ;;
  code)
    update_code
    ;;
  lib)
    update_lib "$@"
    ;;
  all)
    update_code
    update_lib release
    ;;
  *)
    usage
    exit 1
    ;;
esac

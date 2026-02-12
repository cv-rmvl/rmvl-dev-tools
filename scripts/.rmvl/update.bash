#!/bin/bash

set -eu

function usage() {
  echo "用法: rmvl update [help | tool | doc | code | lib]"
  echo "   help:    显示此帮助信息"
  echo "   tool:    更新 rmvl-dev-tools 工具到最新版本"
  echo "   doc:     执行 Doxygen 文档生成，并推送到 cv-rmvl.github.io 仓库"
  echo "   code:    更新 RMVL 仓库至最新的 master 分支代码"
  echo "   lib:     执行完整的编译安装流程以更新 RMVL 动态/静态库"
  echo "   all:     依次执行 code 和 lib 两个步骤，即更新代码并编译安装"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

user=$(whoami)
mode=$1
project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")"/../.. && pwd)"

# 更新 rmvl-dev-tools 工具
function update_tool() {
  root_path=$(echo "$RMVL_ROOT_")
  bash $project_dir/setup/uninstall.bash
  cd $project_dir
  git fetch origin
  git checkout master
  git reset --hard origin/master
  bash $project_dir/setup/install.bash "$root_path"
  source "$HOME/.bashrc"
  echo -e "\033[32mrmvl-dev-tools 工具已更新到最新版本。\033[0m"
}

# 更新 Doxygen 文档并推送到 cv-rmvl.github.io 仓库
function update_doc() {
  if [ $# -ne 2 ]; then
    echo "用法: rmvl update doc <folder>"
    echo "   folder:  文档存放的文件夹名称，例如 2.x"
    exit 1
  fi
  folder_name=$2

  cur_dir="$(pwd)"
  build_ws=$cur_dir/.rmvltmp/rmvl/build
  mkdir -p $build_ws && cd .rmvltmp
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

  rm -rf $cur_dir/.rmvltmp
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
  echo -e "\033[32m更新代码完成\033[0m"
}

# 编译安装 RMVL 库
function update_lib() {
  cur_dir="$(pwd)"
  build_ws=$cur_dir/.rmvltmp/rmvl/build
  mkdir -p $build_ws
  cmake -S $RMVL_ROOT_ -B $build_ws \
    -D CMAKE_BUILD_TYPE=Release \
    -D BUILD_EXTRA=ON
  cmake --build $build_ws -j$(nproc)
  sudo cmake --install $build_ws
  rm -rf $cur_dir/.rmvltmp
  echo -e "\033[32mRMVL 完成部署\033[0m"
}

case "$mode" in
  help)
    usage
    ;;
  tool)
    update_tool
    ;;
  doc)
    update_doc "$@"
    ;;
  code)
    update_code
    ;;
  lib)
    update_lib
    ;;
  all)
    update_code
    update_lib
    ;;
  *)
    usage
    exit 1
    ;;
esac

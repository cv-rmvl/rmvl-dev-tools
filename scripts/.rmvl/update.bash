#!/bin/bash

set -eu

function usage() {
  echo "用法: rmvl update [tool | doc | code | lib]"
  echo "   tool:    更新 rmvl-dev-tools 工具到最新版本"
  echo "   doc:     执行 Doxygen 文档生成，并推送到 cv-rmvl.github.io 仓库"
  echo "   code:    执行 fetch 命令以更新 RMVL 仓库"
  echo "   lib:     更新本地的 RMVL 库，即执行完整的编译安装流程"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

user=$(whoami)
mode=$1
project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")"/../.. && pwd)"

if [ "$mode" = "tool" ]; then
  root_path=$(echo "$RMVL_ROOT")

  bash $project_dir/setup/uninstall.bash
  cd $project_dir
  git pull
  bash $project_dir/setup/install.bash "$root_path"
  source "$HOME/.bashrc"
  echo -e "\033[32mrmvl-dev-tools 工具已更新到最新版本。\033[0m"
elif [ "$mode" = "doc" ]; then
  if [ $# -ne 2 ]; then
    echo "用法: rmvl update doc <folder>"
    echo "   folder:  文档存放的文件夹名称，例如 2.x"
    exit 1
  fi
  folder_name=$2

  cur_dir="$(pwd)"
  mkdir -p .rmvltmp && cd .rmvltmp
  doc_repo=cv-rmvl.github.io
  if [ -d $doc_repo ]; then
    rm -rf $doc_repo
  fi
  git clone git@github.com:cv-rmvl/$doc_repo.git --depth 1
  doc_ws=$cur_dir/.rmvltmp/$doc_repo

  if [ -d build ]; then
    rm -rf build
  fi
  mkdir -p $RMVL_ROOT/build && cd $RMVL_ROOT/build
  cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_DOCS=ON -DBUILD_EXTRA=ON -DBUILD_PYTHON=ON ..
  cmake --build . --target doxygen
  doc_dst="$doc_ws/docs/$folder_name"
  if [ -d "$doc_dst" ]; then
    rm -rf "$doc_dst"
  fi
  mkdir -p "$doc_dst"
  cp -r $RMVL_ROOT/build/doc/doxygen/html/* "$doc_dst"
  cd $doc_ws
  git add .
  git commit -m "更新 RMVL 文档 - 由 $user/rmvl-dev-tools 于 $(date +"%Y-%m-%d %H:%M:%S") 提交"
  git push origin master

  rm -rf $cur_dir/.rmvltmp
elif [ "$mode" = "code" ]; then
  cd $RMVL_ROOT
  git fetch origin
  git fetch upstream
  echo -e "\033[32m更新代码完成\033[0m"
elif [ "$mode" = "lib" ]; then
  cd $RMVL_ROOT
  if [ -d build ]; then
    cd build
    sudo cmake --build . --target uninstall || true
    cd ..
  fi
  mkdir -p build && cd build
  cmake .. -DCMAKE_BUILD_TYPE=Release
  cmake --build . -j$(nproc)
  sudo cmake --install .
  echo -e "\033[32mRMVL 完成部署\033[0m"
else
  usage
  exit 1
fi

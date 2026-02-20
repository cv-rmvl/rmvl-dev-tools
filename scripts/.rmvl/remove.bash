#!/bin/bash

set -eu

function usage() {
  echo "用法: rmvl remove [help | lib | tool]"
  echo "   help:    显示此帮助信息"
  echo "   tool:    移除 rmvl-dev-tools 工具"
  echo "   lib:     移除 RMVL 动态/静态库"
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
  echo -e "\033[32mrmvl-dev-tools 工具已被移除，重启终端后生效\033[0m"
  echo -e "\033[33m注意: RMVL 仓库代码仍保留在 $RMVL_ROOT_，如需移除请执行以下命令手动删除该目录。\033[0m"
  echo -e "\nrm -rf $RMVL_ROOT_"
}

# 移除 RMVL 动态/静态库
function remove_lib() {
  sudo rm -f /usr/local/lib/librmvl_*
  sudo rm -rf /usr/local/lib/cmake/RMVL
  sudo rm -rf /usr/local/include/RMVL
  echo -e "\033[32mRMVL 动态/静态库已被移除\033[0m"
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
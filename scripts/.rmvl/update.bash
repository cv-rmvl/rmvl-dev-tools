#!/bin/bash

set -eu

function usage() {
  echo "用法: rmvltool update [doc | code ]"
  echo "   doc:     暂不可用"
  echo "   code:    执行 fetch 命令以更新 RMVL 仓库"
}

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

user=$(whoami)
mode=$1

if [ "$mode" = "doc" ]; then
  echo -e "\033[31m文档更新功能暂不可用\033[0m"
elif [ "$mode" = "code" ]; then
  cd $RMVL_ROOT
  echo "更新代码..."
  git fetch origin
  git fetch upstream
  echo -e "\033[32m更新代码完成\033[0m"
fi


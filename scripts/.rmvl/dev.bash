#!/bin/bash

set -eu

function usage() {
  echo "用法: rmvl dev [code | nvim]"
  echo "   help:  显示此帮助信息"
  echo "   code:  在 Visual Studio Code 中打开本地 RMVL"
  echo "   nvim:  在 Neovim 中打开本地 RMVL"
  echo "   dir:   Linux 上使用 nautilus 打开本地 RMVL"
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
      echo -e "\033[31mVisual Studio Code 未安装或 'code' 命令在 PATH 中不可用。\033[0m"
      exit 1
    fi
    code "$RMVL_ROOT_"
    ;;
  nvim)
    if ! command -v nvim &> /dev/null; then
      echo -e "\033[31mNeovim 未安装或 'nvim' 命令在 PATH 中不可用。\033[0m"
      exit 1
    fi
    nvim "$RMVL_ROOT_"
    ;;
  dir)
    if ! command -v nautilus &> /dev/null; then
      echo -e "\033[31mNautilus 文件管理器未安装或 'nautilus' 命令在 PATH 中不可用。\033[0m"
      exit 1
    fi
    nautilus "$RMVL_ROOT_"
    ;;
  *)
  usage
    exit 1
    ;;
esac

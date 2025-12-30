#!/bin/bash

set -eu

function usage() {
  echo "用法: rmvltool dev [vscode | nvim]"
  echo "   vscode:  在 Visual Studio Code 中打开本地 RMVL"
  echo "   nvim:    在 Neovim 中打开本地 RMVL"
}

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

mode=$1

if [ "$mode" = "vscode" ]; then
  if ! command -v code &> /dev/null; then
    echo -e "\033[31mVisual Studio Code 未安装或 'code' 命令在 PATH 中不可用。\033[0m"
    exit 1
  fi
  code "$RMVL_ROOT"
elif [ "$mode" = "nvim" ]; then
  if ! command -v nvim &> /dev/null; then
    echo -e "\033[31mNeovim 未安装或 'nvim' 命令在 PATH 中不可用。\033[0m"
    exit 1
  fi
  nvim "$RMVL_ROOT"
else
  usage
  exit 1
fi

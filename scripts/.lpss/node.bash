#!/bin/bash

set -eu

function usage() {
  echo "用法: lpss node [info | list]"
  echo "   info:    显示节点信息"
  echo "   list:    列出所有节点"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function node_info() {
  if [ $# -lt 2 ]; then
    echo "用法: lpss node info <node_name>"
    exit 1
  fi
  node_name=$2
  $cur_dir/_autogen_lpss_tool ni "$node_name"
}

function node_list() {
  $cur_dir/_autogen_lpss_tool nl
}

if [ ! -f "$cur_dir/_autogen_lpss_tool" ]; then
  echo "lpss node 工具尚未实现。敬请期待！"
  exit 1
fi

case $mode in
  info)
    node_info "$@"
    ;;
  list)
    node_list
    ;;
  *)
    usage
    exit 1
    ;;
esac
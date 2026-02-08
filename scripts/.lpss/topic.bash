#!/bin/bash

set -eu

function usage() {
  echo "用法: lpss topic [info | list]"
  echo "   info:    显示话题信息"
  echo "   list:    列出所有话题"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function topic_info() {
  if [ $# -lt 2 ]; then
    echo "用法: lpss topic info <topic_name>"
    exit 1
  fi
  topic_name=$2
  $cur_dir/_autogen_lpss_tool ti "$topic_name"
}

function topic_list() {
  $cur_dir/_autogen_lpss_tool tl
}

if [ ! -f "$cur_dir/_autogen_lpss_tool" ]; then
  echo "lpss topic 工具尚未实现。敬请期待！"
  exit 1
fi

case $mode in
  info)
    topic_info "$@"
    ;;
  list)
    topic_list
    ;;
  *)
    usage
    exit 1
    ;;
esac
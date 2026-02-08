#!/bin/bash

set -eu

function usage() {
  echo "用法: lpss topic [info | list]"
  echo "   info:    显示节点信息"
  echo "   list:    列出所有节点"
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
  $cur_dir/_autogen_lpss_tool topic_info "$topic_name"
}

function topic_list() {
  $cur_dir/_autogen_lpss_tool topic_list
}

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
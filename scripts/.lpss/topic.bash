#!/bin/bash

set -eu

function usage() {
  echo "用法: lpss topic [info | list | echo | type]"
  echo "   info:    显示话题信息"
  echo "   list:    列出所有话题"
  echo "   echo:    显示话题内容"
  echo "   type:    显示话题类型"
  echo "   hz:      每秒测量一次话题发布频率，单位为 Hz"
  echo "   bw:      每秒测量一次话题带宽，单位为 MB/s、kB/s 或 B/s"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
shift
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function topic_with_name() {
  local cmd=$1
  local label=$2
  if [ $# -lt 3 ]; then
    echo "用法: lpss topic $label <topic_name>"
    echo "   topic_name: 话题名称"
    exit 1
  fi
  $cur_dir/_autogen_lpss_tool "$cmd" "$3"
}

function topic_list() {
  $cur_dir/_autogen_lpss_tool tl
}

case $mode in
  info)
    topic_with_name ti info "$@"
    ;;
  list)
    topic_list
    ;;
  echo)
    topic_with_name te echo "$@"
    ;;
  type)
    topic_with_name tt type "$@"
    ;;
  hz)
    topic_with_name thz hz "$@"
    ;;
  bw)
    topic_with_name tbw bw "$@"
    ;;
  *)
    usage
    exit 1
    ;;
esac
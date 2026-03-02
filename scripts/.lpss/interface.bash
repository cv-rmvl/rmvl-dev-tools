#!/bin/bash

set -eu

function usage() {
  echo "用法: lpss interface [help | list | group | groups | show]"
  echo "   help:    显示此帮助信息"
  echo "   list:    列出所有的内置消息接口"
  echo "   group:   显示指定的消息分组包含的接口"
  echo "   groups:  列出所有消息分组"
  echo "   show:    显示接口详细信息"
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

mode=$1
shift
cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
msg_dir="$RMVL_ROOT_/modules/lpss/msg"

# 内置类型列表
BUILTIN_TYPES="bool int8 uint8 int16 uint16 int32 uint32 int64 uint64 float32 float64 string time"

function is_builtin() {
  local type_name=$1
  for bt in $BUILTIN_TYPES; do
    if [ "$type_name" = "$bt" ]; then
      return 0
    fi
  done
  return 1
}

function resolve_msg_file() {
  local type_name=$1
  local current_group=$2
  if [[ "$type_name" == */* ]]; then
    local group="${type_name%%/*}"
    local name="${type_name#*/}"
    local file="$msg_dir/$group/$name.msg"
    if [ -f "$file" ]; then
      echo "$file"
      return 0
    fi
  else
    local file="$msg_dir/$current_group/$type_name.msg"
    if [ -f "$file" ]; then
      echo "$file"
      return 0
    fi
    for group_dir in "$msg_dir"/*/; do
      if [ -d "$group_dir" ]; then
        file="$group_dir/$type_name.msg"
        if [ -f "$file" ]; then
          echo "$file"
          return 0
        fi
      fi
    done
  fi
  return 1
}

function show_recursive() {
  local file=$1
  local indent=$2
  local current_group=$3
  local depth=${4:-0}

  if [ "$depth" -gt 10 ]; then
    return
  fi

  while IFS= read -r line || [ -n "$line" ]; do
    if [ -z "$(echo "$line" | tr -d '[:space:]')" ]; then
      continue
    fi

    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    [[ "$line" == *"="* ]] && continue

    printf "%s%s\n" "$indent" "$line"

    local type_name
    type_name=$(echo "$line" | awk '{print $1}')
    local base_type="${type_name%\[\]}"

    is_builtin "$base_type" && continue

    local msg_file
    msg_file=$(resolve_msg_file "$base_type" "$current_group") || continue
    local sub_group
    sub_group=$(basename "$(dirname "$msg_file")")
    show_recursive "$msg_file" "${indent}    " "$sub_group" $((depth + 1))
  done < "$file"
}

case $mode in
  help)
    usage
    ;;
  list)
    for group_dir in $msg_dir/*/; do
      if [ -d "$group_dir" ]; then
        group_name=$(basename $group_dir)
        for interface_file in $group_dir/*.msg; do
          if [ -f "$interface_file" ]; then
            echo "$group_name/$(basename $interface_file .msg)"
          fi
        done
      fi
    done
    ;;
  group)
    if [ $# -lt 1 ]; then
      echo "用法: lpss interface group <name>"
      echo "   name: 消息分组名称"
      exit 1
    fi
    group_name=$1
    for interface_file in $msg_dir/$group_name/*.msg; do
      if [ -f "$interface_file" ]; then
        echo "$(basename $interface_file .msg)"
      fi
    done
    ;;
  groups)
    for group_dir in $msg_dir/*/; do
      if [ -d "$group_dir" ]; then
        echo "$(basename $group_dir)"
      fi
    done
    ;;
  show)
    if [ $# -lt 1 ]; then
      echo "用法: lpss interface show <interface>"
      echo "   interface: 消息接口名称，格式为 <group>/<interface>"
      exit 1
    fi
    interface_name=$1
    group_name=$(echo $interface_name | cut -d/ -f1)
    interface_file=$msg_dir/$group_name/$(echo $interface_name | cut -d/ -f2).msg
    if [ -f "$interface_file" ]; then
      show_recursive "$interface_file" "" "$group_name" 0
    else
      echo "接口 $interface_name 不存在"
      exit 1
    fi
    ;;
  *)
    usage
    exit 1
    ;;
esac
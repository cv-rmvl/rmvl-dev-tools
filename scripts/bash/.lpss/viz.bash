#!/bin/bash

set -eu

cur_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function lpss_short_id() {
  if command -v uuidgen >/dev/null 2>&1; then
    uuidgen | tr -d '-' | cut -c 1-5
  elif [ -r /proc/sys/kernel/random/uuid ]; then
    tr -d '-' < /proc/sys/kernel/random/uuid | cut -c 1-5
  elif command -v openssl >/dev/null 2>&1; then
    openssl rand -hex 3 | cut -c 1-5
  else
    date +%s%N | cksum | cut -c 1-5
  fi
}

if [ ! -f "$cur_dir/_autogen_lpss_viz" ]; then
  echo "lpss viz 工具尚未实现。敬请期待！"
  exit 1
fi

instance_name="${1:-}"
if [ -z "$instance_name" ]; then
  instance_name="$(lpss_short_id)"
fi

"$cur_dir/_autogen_lpss_viz" "$instance_name"

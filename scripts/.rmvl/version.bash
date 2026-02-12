#!/bin/bash

set -eu

project_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
cur_version=$(cat $project_dir/changelog.txt | head -n1)

if [ "${1:-}" = "log" ]; then
  echo -e "当前版本: $cur_version\n"
  echo -e "详细更新日志\n"
  cat "$project_dir/changelog.txt" | sed -E "s/(.*[0-9]+\.[0-9]+\.[0-9]+-[0-9]{6}.*)/$(echo -e '\033[33m')\1$(echo -e '\033[0m')/"
else
  echo "$cur_version"
fi

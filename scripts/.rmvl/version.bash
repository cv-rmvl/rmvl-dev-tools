#!/bin/bash

set -eu

project_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
source "$project_dir/setup/rdtcolor.bash"
rdtcolor_init
cur_version=$(cat $project_dir/changelog.txt | head -n1)

if [ "${1:-}" = "log" ]; then
  echo -e "${C_BOLD}当前版本:${C_RESET} $cur_version\n"
  echo -e "${C_BOLD}详细更新日志${C_RESET}\n"
  cat "$project_dir/changelog.txt" | sed -E "s/(.*[0-9]+\.[0-9]+\.[0-9]+-[0-9]{6}.*)/${C_YELLOW}\1${C_RESET}/"
else
  echo "$cur_version"
fi

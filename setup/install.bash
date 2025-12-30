#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BASHRC="$HOME/.bashrc"

MARKER_START="# >>> rmvl-dev-tools >>>"
MARKER_END="# <<< rmvl-dev-tools <<<"

CONTENT="source \"$TOOLS_ROOT/setup/setup.bash\""

if [ -z "${RMVL_ROOT:-}" ]; then
  echo -n "请输入 RMVL_ROOT 路径，即您本地的 rmvl 项目根目录: "
  read -r root_path
  CONTENT="export RMVL_ROOT=\"$root_path\"
$CONTENT"
fi

if grep -qF "$MARKER_START" "$BASHRC"; then
  echo -e "\033[33mRMVL 配置已经存在于 $BASHRC。\033[0m"
else
  {
    echo ""
    echo "$MARKER_START"
    echo "$CONTENT"
    echo "$MARKER_END"
  } >> "$BASHRC"
  echo -e "\033[32m完成。请重启终端或运行 'source ~/.bashrc'\033[0m"
fi
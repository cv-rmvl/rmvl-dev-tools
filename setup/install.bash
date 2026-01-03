#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BASHRC="$HOME/.bashrc"

MARKER_START="# >>> rmvl-dev-tools >>>"
MARKER_END="# <<< rmvl-dev-tools <<<"

CONTENT="source \"$TOOLS_ROOT/setup/setup.bash\""

if [ -n "${1:-}" ]; then
  root_path="$1"
  CONTENT="export RMVL_ROOT=\"$root_path\"
$CONTENT"
elif [ -z "${RMVL_ROOT:-}" ]; then
  echo -e "请输入您本地的 rmvl 项目根目录路径，\033[33m为空则自动克隆到 ~/rmvl\033[0m"
  echo -n ">>> "
  read -r root_path

  if [ -z "$root_path" ]; then
    root_path="$HOME/rmvl"
    if [ -d "$root_path" ]; then
      rm -rf "$root_path"
    fi
    git clone https://github.com/cv-rmvl/rmvl.git "$root_path"
  fi

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
  source "$BASHRC"
fi

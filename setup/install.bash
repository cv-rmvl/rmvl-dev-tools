#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BASHRC="$HOME/.bashrc"

MARKER_START="# >>> rmvl-dev-tools >>>"
MARKER_END="# <<< rmvl-dev-tools <<<"

CONTENT="source \"$TOOLS_ROOT/setup/setup.bash\""

if [ -n "${1:-}" ]; then
  root_path="$1"
  CONTENT="export RMVL_ROOT_=\"$root_path\"
$CONTENT"
elif [ -z "${RMVL_ROOT_:-}" ]; then
  echo -e "请输入您本地的 rmvl 项目根目录路径，\033[33m为空则自动克隆到 ~/rmvl\033[0m"
  read -r root_path

  if [ -z "$root_path" ]; then
    root_path="$HOME/rmvl"
    if [ -d "$root_path" ]; then
      rm -rf "$root_path"
    fi
    git clone https://github.com/cv-rmvl/rmvl.git "$root_path"
  fi

  CONTENT="export RMVL_ROOT_=\"$root_path\"
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

if [ -d "$TOOLS_ROOT/build_tmp" ]; then
  rm -rf "$TOOLS_ROOT/build_tmp"
fi

cmake -S "$TOOLS_ROOT/src" -B "$TOOLS_ROOT/build_tmp"
cmake --build "$TOOLS_ROOT/build_tmp"
for name in lpss_tool; do
  cp "$TOOLS_ROOT/build_tmp/$name" "$TOOLS_ROOT/scripts/.lpss/_autogen_$name"
done
rm -rf "$TOOLS_ROOT/build_tmp"

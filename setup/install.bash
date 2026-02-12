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
  if command -v zenity &> /dev/null; then
    root_path=$(zenity --entry --title="rmvl 项目根目录" --text="请输入您本地的 rmvl 项目根目录路径（为空则自动克隆到当前路径）：" 2>/dev/null || true)
  else
    echo "请输入您本地的 rmvl 项目根目录路径（为空则自动克隆到当前路径）:"
    read -r root_path
  fi

  if [ -z "$root_path" ]; then
    root_path="$(cd "$TOOLS_ROOT/.." && pwd)/rmvl"
    if [ -d "$root_path" ]; then
      rm -rf "$root_path"
    fi
    echo -e "\033[32m正在克隆 rmvl 项目到 $root_path...\033[0m"
    git clone https://github.com/cv-rmvl/rmvl.git "$root_path"
  fi

  CONTENT="export RMVL_ROOT_=\"$root_path\"
$CONTENT"
fi

if grep -qF "$MARKER_START" "$BASHRC"; then
  echo -e "\033[33mRMVL 配置已经存在于 $BASHRC。\033[0m"
  root_path=$(grep -A1 "$MARKER_START" "$BASHRC" | tail -n1 | sed 's/export RMVL_ROOT_="//;s/"//')
else
  {
    echo ""
    echo "$MARKER_START"
    echo "$CONTENT"
    echo "$MARKER_END"
  } >> "$BASHRC"
fi

echo -e "\033[32m正在自动构建 rmvl...\033[0m"
cur_dir="$(pwd)"
build_ws=$cur_dir/.rmvltmp/rmvl/build
mkdir -p $build_ws
cmake -S $root_path -B $build_ws -D CMAKE_BUILD_TYPE=Release -D BUILD_EXTRA=ON
cmake --build $build_ws -j$(nproc)
sudo cmake --install $build_ws
rm -rf $cur_dir/.rmvltmp
unset cur_dir build_ws

if [ -d "$TOOLS_ROOT/build_tmp" ]; then
  rm -rf "$TOOLS_ROOT/build_tmp"
fi

echo -e "\033[32m正在构建 rmvl-dev-tools...\033[0m"
cmake -S "$TOOLS_ROOT/src" -B "$TOOLS_ROOT/build_tmp"
cmake --build "$TOOLS_ROOT/build_tmp"
for name in lpss_tool; do
  cp "$TOOLS_ROOT/build_tmp/$name" "$TOOLS_ROOT/scripts/.lpss/_autogen_$name"
done
rm -rf "$TOOLS_ROOT/build_tmp"

echo -e "\033[32m安装完成，重启终端后生效\033[0m"
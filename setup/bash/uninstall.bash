#!/bin/bash

set -eu

BASHRC="$HOME/.bashrc"
BASHRC_BACKUP="$HOME/.bashrc.rmvl.bak"
MARKER_START="# >>> rmvl-dev-tools >>>"
MARKER_END="# <<< rmvl-dev-tools <<<"

trap 'cleanup' EXIT
cleanup() {
  local exit_code=$?
  if [ $exit_code -ne 0 ] && [ -f "$BASHRC_BACKUP" ]; then
    echo -e "\033[33m异常退出，正在恢复 .bashrc...\033[0m"
    mv "$BASHRC_BACKUP" "$BASHRC" 2>/dev/null || true
  else
    rm -f "$BASHRC_BACKUP" 2>/dev/null || true
  fi
  return $exit_code
}

if grep -qF "$MARKER_START" "$BASHRC"; then
  cp "$BASHRC" "$BASHRC_BACKUP"
  sed -i "/$MARKER_START/,/$MARKER_END/d" "$BASHRC"
  source "$BASHRC"
else
  echo -e "\033[33mRMVL 配置未在 $BASHRC 中找到。\033[0m"
fi

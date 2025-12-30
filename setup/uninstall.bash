#!/bin/bash

set -eu

BASHRC="$HOME/.bashrc"
MARKER_START="# >>> rmvl-dev-tools >>>"
MARKER_END="# <<< rmvl-dev-tools <<<"

if grep -qF "$MARKER_START" "$BASHRC"; then
  sed -i "/$MARKER_START/,/$MARKER_END/d" "$BASHRC"
  echo -e "\033[32mRMVL 配置已经从 $BASHRC 中移除。\033[0m"
else
  echo -e "\033[33mRMVL 配置未在 $BASHRC 中找到。\033[0m"
fi
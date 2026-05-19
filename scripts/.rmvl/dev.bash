#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
source "$TOOLS_ROOT/setup/rdtui.bash"
rdtui_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rmvl dev${C_RESET} ${C_DIM}[help | code | nvim | dir | commit | squash]${C_RESET}\n"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}   ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}code${C_RESET}   ${C_DIM}在 Visual Studio Code 中打开本地 RMVL${C_RESET}"
  echo -e "  ${C_CYAN}nvim${C_RESET}   ${C_DIM}在 Neovim 中打开本地 RMVL${C_RESET}"
  echo -e "  ${C_CYAN}dir${C_RESET}    ${C_DIM}Linux 上使用 nautilus 打开本地 RMVL${C_RESET}"
  echo -e "  ${C_CYAN}commit${C_RESET} ${C_DIM}执行 'git add . && git commit' 提交本地的更改${C_RESET}"
  echo -e "  ${C_CYAN}squash${C_RESET} ${C_DIM}创建临时提交并压缩至上一个提交${C_RESET}"
}

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

function dev_commit() {
  local commit_type=""
  local scope=""
  local subject=""
  local body=""
  local newline=$'\n'
  local confirm=""
  local commit_title=""
  local previous_build_output="${build_output:-quiet}"

  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    log_error "当前目录不在 Git 仓库中"
    exit 1
  fi

  if [ -z "$(git status --short)" ]; then
    log_warn "没有可提交的本地更改"
    return 0
  fi

  UI_MODE=1
  ui_header "将自动执行 'git add . && git commit' 来提交本地更改"
  ui_blank
  ui_select_one commit_type "请选择更改类型" \
    "feat:     新功能" "feat" \
    "fix:      修复 Bug" "fix" \
    "docs:     文档更新" "docs" \
    "refactor: 代码重构" "refactor" \
    "ci:       CI/CD 配置" "ci" \
    "chore:    其他更改" "chore"

  prompt_input scope "请输入影响范围 scope（可选）"
  while [ -z "$subject" ]; do
    prompt_input subject "请输入提交摘要"
    if [ -z "$subject" ]; then
      log_error "提交摘要不能为空"
    fi
  done
  prompt_input body "请输入详细说明（可选，使用 \\\\ 表示换行）"
  body="${body//\\\\/$newline}"

  if [ -n "$scope" ]; then
    commit_title="$commit_type($scope): $subject"
  else
    commit_title="$commit_type: $subject"
  fi

  ui_blank
  ui_info "提交消息:"
  printf "${C_DIM}%s${C_RESET}\n" "$commit_title" | ui_prefix_output
  if [ -n "$body" ]; then
    ui_blank
    printf "${C_DIM}%s${C_RESET}\n" "$body" | ui_prefix_output
  fi

  ui_select_lr confirm "确认提交？" "提交" "取消" "yes" "no" 0
  if [ "$confirm" != "yes" ]; then
    ui_fail_footer "操作取消"
    return 130
  fi

  ui_blank
  build_output=verbose
  if ! run_cmd git add .; then
    build_output="$previous_build_output"
    ui_fail_footer "git add 失败"
    return 1
  fi
  if [ -n "$body" ]; then
    if ! run_cmd git commit -m "$commit_title" -m "$body"; then
      build_output="$previous_build_output"
      ui_fail_footer "git commit 失败"
      return 1
    fi
  else
    if ! run_cmd git commit -m "$commit_title"; then
      build_output="$previous_build_output"
      ui_fail_footer "git commit 失败"
      return 1
    fi
  fi
  build_output="$previous_build_output"
  log_success "提交完成"
  ui_close
}

function dev_squash() {
  local confirm=""
  local previous_build_output="${build_output:-quiet}"
  local last_commit=""
  local tmp_message="rdt squash temporary commit"

  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    log_error "当前目录不在 Git 仓库中"
    exit 1
  fi

  if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
    log_error "当前仓库还没有 commit，无法 squash 到上一个 commit"
    exit 1
  fi

  if [ -z "$(git status --short)" ]; then
    log_warn "没有可合并到上一个 commit 的本地更改"
    return 0
  fi

  last_commit="$(git log -1 --pretty=%s)"

  UI_MODE=1
  ui_header "将自动创建临时提交并压缩至上一次提交，同时保留上一次提交的消息"
  ui_blank
  ui_info "上一个 commit:"
  printf "${C_DIM}%s${C_RESET}\n" "$last_commit" | ui_prefix_output
  ui_blank
  ui_info "将执行:"
  printf "${C_DIM}%s${C_RESET}\n" "  git add ." | ui_prefix_output
  printf "${C_DIM}%s${C_RESET}\n" "  git commit -m \"$tmp_message\"" | ui_prefix_output
  printf "${C_DIM}%s${C_RESET}\n" "  git reset --soft HEAD~1" | ui_prefix_output
  printf "${C_DIM}%s${C_RESET}\n\n" "  git commit --amend --no-edit" | ui_prefix_output

  ui_select_lr confirm "确认压缩？" "执行" "取消" "yes" "no" 0
  if [ "$confirm" != "yes" ]; then
    ui_fail_footer "操作取消"
    return 130
  fi

  ui_blank
  build_output=verbose
  if ! run_cmd git add .; then
    build_output="$previous_build_output"
    ui_fail_footer "git add 失败"
    return 1
  fi

  if git diff --cached --quiet; then
    build_output="$previous_build_output"
    ui_fail_footer "git add 后没有可提交的更改"
    return 1
  fi

  if ! run_cmd git commit -m "$tmp_message"; then
    build_output="$previous_build_output"
    ui_fail_footer "临时 commit 创建失败"
    return 1
  fi

  if ! run_cmd git reset --soft HEAD~1; then
    build_output="$previous_build_output"
    ui_fail_footer "git reset --soft 失败，临时 commit 仍保留在当前 HEAD"
    return 1
  fi

  if ! run_cmd git commit --amend --no-edit; then
    build_output="$previous_build_output"
    ui_fail_footer "git commit --amend 失败，更改已暂存，请手动处理"
    return 1
  fi

  build_output="$previous_build_output"
  log_success "已压缩到上一个提交"
  ui_close
}

mode=$1

case "$mode" in
  help)
    usage
    ;;
  code)
    if ! command -v code &> /dev/null; then
      echo -e "${C_RED}Visual Studio Code 未安装或 'code' 命令在 PATH 中不可用。${C_RESET}"
      exit 1
    fi
    code "$RMVL_ROOT_"
    ;;
  nvim)
    if ! command -v nvim &> /dev/null; then
      echo -e "${C_RED}Neovim 未安装或 'nvim' 命令在 PATH 中不可用。${C_RESET}"
      exit 1
    fi
    nvim "$RMVL_ROOT_"
    ;;
  dir)
    if ! command -v nautilus &> /dev/null; then
      echo -e "${C_RED}Nautilus 文件管理器未安装或 'nautilus' 命令在 PATH 中不可用。${C_RESET}"
      exit 1
    fi
    nautilus "$RMVL_ROOT_"
    ;;
  commit)
    dev_commit
    ;;
  squash)
    dev_squash
    ;;
  *)
    usage
    exit 1
    ;;
esac

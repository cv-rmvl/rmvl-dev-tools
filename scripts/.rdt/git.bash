#!/bin/bash

set -eu

TOOLS_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
source "$TOOLS_ROOT/setup/rdtui.bash"
rdtui_init

function usage() {
  echo -e "${C_BOLD}用法:${C_RESET} ${C_CYAN}rdt git${C_RESET} ${C_DIM}[help | commit | squash | reword | newbr]${C_RESET}\n"
  echo -e "${C_BOLD}命令:${C_RESET}"
  echo -e "  ${C_CYAN}help${C_RESET}     ${C_DIM}显示此帮助信息${C_RESET}"
  echo -e "  ${C_CYAN}commit${C_RESET}   ${C_DIM}执行 '${C_ITALIC}git add . && git commit${C_RESET}${C_DIM}' 提交本地的更改${C_RESET}"
  echo -e "  ${C_CYAN}squash${C_RESET}   ${C_DIM}创建临时提交并压缩至上一个提交${C_RESET}"
  echo -e "  ${C_CYAN}reword${C_RESET}   ${C_DIM}修改上一个提交的消息（不修改提交内容）${C_RESET}"
  echo -e "  ${C_CYAN}newbr${C_RESET}    ${C_DIM}创建新分支并应用提交${C_RESET}"
}

function ui_dim_output() {
  local line

  while IFS= read -r line || [ -n "$line" ]; do
    printf "%b%s%b\n" "$C_DIM" "$line" "$C_RESET"
  done | ui_prefix_output
}

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

RDT_GIT_COMMIT_TITLE=""
RDT_GIT_COMMIT_BODY=""

function ensure_git_repo() {
  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    log_error "当前目录不在 Git 仓库中"
    exit 1
  fi
}

function ensure_git_head() {
  local message="${1:-当前仓库还没有 commit，无法执行此操作}"

  if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
    log_error "$message"
    exit 1
  fi
}

function ensure_git_changes() {
  local message="${1:-没有可提交的本地更改}"

  if [ -z "$(git status --short)" ]; then
    log_warn "$message"
    return 1
  fi
}

# 收集提交消息，存储在 RDT_GIT_COMMIT_TITLE 和 RDT_GIT_COMMIT_BODY 变量中
function collect_commit_message() {
  local confirm_prompt="$1"
  local confirm_yes_label="${2:-确认}"
  local commit_type=""
  local scope=""
  local subject=""
  local body=""
  local body_item=""
  local body_index=1
  local body_line=""
  local confirm=""
  local commit_title=""

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
  while true; do
    body_item=""
    prompt_input body_item "请输入第 ${body_index} 条详细说明（可选）"
    if [ -z "$body_item" ]; then
      break
    fi

    body_line="${body_index}. $body_item"
    if [ -n "$body" ]; then
      body="${body}"$'\n'"${body_line}"
    else
      body="$body_line"
    fi
    body_index=$((body_index + 1))
  done

  if [ -n "$scope" ]; then
    commit_title="$commit_type($scope): $subject"
  else
    commit_title="$commit_type: $subject"
  fi

  ui_blank
  ui_info "提交消息:"
  printf "%s\n" "$commit_title" | ui_dim_output
  if [ -n "$body" ]; then
    ui_blank
    printf "%s\n" "$body" | ui_dim_output
  fi

  ui_select_lr confirm "$confirm_prompt" "$confirm_yes_label" "取消" "yes" "no" 0
  if [ "$confirm" != "yes" ]; then
    ui_fail_footer "操作取消"
    return 130
  fi

  RDT_GIT_COMMIT_TITLE="$commit_title"
  RDT_GIT_COMMIT_BODY="$body"
}

function execute_git_commit() {
  if ! run_cmd git add .; then
    ui_fail_footer "git add 失败"
    return 1
  fi

  if git diff --cached --quiet; then
    ui_fail_footer "git add 后没有可提交的更改"
    return 1
  fi

  if [ -n "$RDT_GIT_COMMIT_BODY" ]; then
    if ! run_cmd git commit -m "$RDT_GIT_COMMIT_TITLE" -m "$RDT_GIT_COMMIT_BODY"; then
      ui_fail_footer "git commit 失败"
      return 1
    fi
  else
    if ! run_cmd git commit -m "$RDT_GIT_COMMIT_TITLE"; then
      ui_fail_footer "git commit 失败"
      return 1
    fi
  fi
}

function git_commit() {
  local previous_build_output="${build_output:-quiet}"

  ensure_git_repo
  if ! ensure_git_changes; then
    return 0
  fi

  UI_MODE=1
  ui_header "将自动执行 'git add . && git commit' 来提交本地更改"
  ui_blank
  collect_commit_message "确认提交？" "提交"

  ui_blank
  build_output=verbose
  if ! execute_git_commit; then
    build_output="$previous_build_output"
    return 1
  fi
  build_output="$previous_build_output"
  log_success "提交完成"
  ui_close
}

function git_squash() {
  local confirm=""
  local previous_build_output="${build_output:-quiet}"
  local last_commit=""
  local tmp_message="rdt squash temporary commit"

  ensure_git_repo
  ensure_git_head "当前仓库还没有 commit，无法 squash 到上一个 commit"
  if ! ensure_git_changes "没有可合并到上一个 commit 的本地更改"; then
    return 0
  fi

  last_commit="$(git log -1 --pretty=%s)"

  UI_MODE=1
  ui_header "将自动创建临时提交并压缩至上一次提交，同时保留上一次提交的消息"
  ui_blank
  ui_info "上一个 commit:"
  printf "%s\n" "$last_commit" | ui_dim_output
  ui_blank
  ui_info "将执行:"
  printf "%s\n" "  git add ." | ui_dim_output
  printf "%s\n" "  git commit -m \"$tmp_message\"" | ui_dim_output
  printf "%s\n" "  git reset --soft HEAD~1" | ui_dim_output
  printf "%s\n\n" "  git commit --amend --no-edit" | ui_dim_output

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

function git_reword() {
  local previous_build_output="${build_output:-quiet}"
  local last_commit=""

  ensure_git_repo
  ensure_git_head

  last_commit="$(git log -1 --pretty=%s)"

  UI_MODE=1
  ui_header "将修改上一个 commit 的消息，不修改提交内容"
  ui_blank
  ui_info "当前 commit 消息:"
  printf "%s\n" "$last_commit" | ui_dim_output
  ui_blank
  collect_commit_message "确认修改 commit 消息？" "修改"

  ui_blank
  build_output=verbose
  if [ -n "$RDT_GIT_COMMIT_BODY" ]; then
    if ! run_cmd git commit --amend --only -m "$RDT_GIT_COMMIT_TITLE" -m "$RDT_GIT_COMMIT_BODY"; then
      build_output="$previous_build_output"
      ui_fail_footer "git commit --amend 失败"
      return 1
    fi
  else
    if ! run_cmd git commit --amend --only -m "$RDT_GIT_COMMIT_TITLE"; then
      build_output="$previous_build_output"
      ui_fail_footer "git commit --amend 失败"
      return 1
    fi
  fi

  build_output="$previous_build_output"
  log_success "commit 消息已修改"
  ui_close
}

function git_newbr() {
  local branch_name=""
  local push_remote=""
  local previous_build_output="${build_output:-quiet}"

  ensure_git_repo
  if ! ensure_git_changes; then
    return 0
  fi

  UI_MODE=1
  ui_header "创建新分支并提交本地更改"
  ui_blank

  while true; do
    prompt_input branch_name "请输入新分支的名称"
    if [ -z "$branch_name" ]; then
      log_error "分支名称不能为空"
      continue
    fi
    if ! git check-ref-format --branch "$branch_name" >/dev/null 2>&1; then
      log_error "分支名称不合法"
      continue
    fi
    if git show-ref --verify --quiet "refs/heads/$branch_name"; then
      log_error "本地分支已存在: $branch_name"
      continue
    fi
    break
  done

  collect_commit_message "确认使用此提交消息？"
  ui_select_lr push_remote "是否推送至远程？" "推送" "不推送" "yes" "no" 1

  ui_blank
  ui_info "将执行:"
  printf "%s\n" "  git switch -c \"$branch_name\"" | ui_dim_output
  printf "%s\n" "  git add ." | ui_dim_output
  if [ -n "$RDT_GIT_COMMIT_BODY" ]; then
    printf "%s\n" "  git commit -m \"$RDT_GIT_COMMIT_TITLE\" -m \"<body>\"" | ui_dim_output
  else
    printf "%s\n" "  git commit -m \"$RDT_GIT_COMMIT_TITLE\"" | ui_dim_output
  fi
  if [ "$push_remote" = "yes" ]; then
    printf "%s\n" "  git push -u origin \"$branch_name\"" | ui_dim_output
  fi

  ui_blank
  build_output=verbose
  if ! run_cmd git switch -c "$branch_name"; then
    build_output="$previous_build_output"
    ui_fail_footer "新分支创建失败"
    return 1
  fi

  if ! execute_git_commit; then
    build_output="$previous_build_output"
    return 1
  fi

  if [ "$push_remote" = "yes" ]; then
    if ! run_cmd git push -u origin "$branch_name"; then
      build_output="$previous_build_output"
      ui_fail_footer "git push 失败"
      return 1
    fi
  fi

  build_output="$previous_build_output"
  log_success "新分支提交完成"
  ui_close
}

mode=$1

case "$mode" in
  help)
    usage
    ;;
  commit)
    git_commit
    ;;
  squash)
    git_squash
    ;;
  reword)
    git_reword
    ;;
  newbr)
    git_newbr
    ;;
  *)
    usage
    exit 1
    ;;
esac

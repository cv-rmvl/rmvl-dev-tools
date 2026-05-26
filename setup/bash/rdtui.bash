#!/bin/bash

#############################################################################
#  基础用法:
#    source "$TOOLS_ROOT/setup/bash/rdtui.bash"
#    UI_MODE=1  # 1: 使用边框式交互界面，0: 普通文本输出
#    rdtui_init # 初始化 UI
#
#  交互函数示例:
#    - ui_header "Title"
#    - prompt_input name "请输入名称" "default"
#    - prompt_secret password "请输入密码"
#    - ui_select_one type "请选择类型" "feat: 新功能" "feat" "fix: 修复" "fix"
#    - ui_select_lr mode "构建模式" "Release" "Debug" "release" "debug" 0
#    - ui_select_multi deps "选择依赖" "OpenCV" "opencv" "Eigen 3" "eigen3"
#    - run_cmd cmake --build build
#    - ui_close
#
#  常用变量:
#    - build_output=quiet|verbose  # 控制 run_cmd/run_sudo_cmd 的输出模式
#    - password="..."              # run_sudo_cmd 使用的 sudo 密码，可留空
#
#  注意事项:
#    - 对于交互函数，一般会先调用 ui_header 输出标题，再调用交互函数获取输入，
#      最后调用 ui_close 结束界面。
#############################################################################

RDTUI_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$RDTUI_DIR/rdtcolor.bash"

rdtui_set_defaults() {
  C_RESET="${C_RESET:-}"
  C_BOLD="${C_BOLD:-}"
  C_DIM="${C_DIM:-}"
  C_CYAN="${C_CYAN:-}"
  C_GREEN="${C_GREEN:-}"
  C_YELLOW="${C_YELLOW:-}"
  C_RED="${C_RED:-}"
  C_CLEAR="${C_CLEAR:-}"
  UI_MODE="${UI_MODE:-0}"
  UI_CLOSED="${UI_CLOSED:-0}"
  FAIL_SHOWN="${FAIL_SHOWN:-0}"
  RDTUI_CURSOR_HIDDEN="${RDTUI_CURSOR_HIDDEN:-0}"
  RDTUI_INPUT_SAVED="${RDTUI_INPUT_SAVED:-0}"
  RDTUI_TTY_FD="${RDTUI_TTY_FD:-0}"
  RDTUI_PROMPT_ACTIVE="${RDTUI_PROMPT_ACTIVE:-$'\u25c6'}"
  RDTUI_PROMPT_DONE="${RDTUI_PROMPT_DONE:-$'\u25c7'}"
  RDTUI_BOX_TOP="${RDTUI_BOX_TOP:-$'\u250c'}"
  RDTUI_BOX_SIDE="${RDTUI_BOX_SIDE:-$'\u2502'}"
  RDTUI_BOX_BOTTOM="${RDTUI_BOX_BOTTOM:-$'\u2514'}"
  RDTUI_GRADIENT_START="${RDTUI_GRADIENT_START:-64,207,144}"
  RDTUI_GRADIENT_END="${RDTUI_GRADIENT_END:-164,92,255}"
}

# 初始化颜色、TTY、符号和 readline 行为；使用交互函数前必须调用。
rdtui_init() {
  rdtui_set_defaults
  RDTUI_CURSOR_HIDDEN=0
  RDTUI_INPUT_SAVED=0
  RDTUI_TTY_FD=0

  if [ ! -t 0 ] && [ -c /dev/tty ]; then
    if { exec 3</dev/tty; } 2>/dev/null; then
      RDTUI_TTY_FD=3
    fi
  fi

  rdtcolor_init
  RDTUI_BOX_PREFIX="${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  "

  IFS=',' read -r RDTUI_GRADIENT_START_R RDTUI_GRADIENT_START_G RDTUI_GRADIENT_START_B <<< "$RDTUI_GRADIENT_START"
  IFS=',' read -r RDTUI_GRADIENT_END_R RDTUI_GRADIENT_END_G RDTUI_GRADIENT_END_B <<< "$RDTUI_GRADIENT_END"

  rdtui_setup_readline
}

rdtui_set_defaults

rdtui_is_ui_tty() {
  [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]
}

# 调整 readline，避免交互输入时补全键干扰 UI 刷新。
rdtui_setup_readline() {
  if [ -t 0 ]; then
    local locale_all="${LC_ALL:-}"
    local locale_ctype="${LC_CTYPE:-}"
    local locale_lang="${LANG:-}"
    local locale_hint="${locale_all}${locale_ctype}${locale_lang}"

    if [[ "$locale_hint" != *UTF-8* && "$locale_hint" != *utf8* ]]; then
      if locale -a 2>/dev/null | grep -qi '^c\.utf-8$'; then
        export LC_CTYPE="C.UTF-8"
      fi
    fi

    bind 'set disable-completion on' 2>/dev/null || true
    bind '"\t": ""' 2>/dev/null || true
    bind '"\C-i": ""' 2>/dev/null || true
  fi
}

ui_box_prefix() {
  printf "%b" "${RDTUI_BOX_PREFIX:-${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  }"
}

ui_line() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    printf "%b%s\n" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$1"
  else
    printf "%s\n" "$1"
  fi
}

# 按 UI_MODE 自动选择普通日志或带边框日志。
log_message() {
  local color="$1"
  local message="$2"

  if [ "${UI_MODE:-0}" -eq 1 ]; then
    printf "%b%b%s%b\n" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$color" "$message" "$C_RESET"
  else
    printf "%b%s%b\n" "$color" "$message" "$C_RESET"
  fi
}

log_info() { log_message "$C_DIM" "$1"; }
log_success() { log_message "$C_GREEN" "$1"; }
log_warn() { log_message "$C_YELLOW" "$1"; }
log_error() { log_message "$C_RED" "$1"; }

# 输出顶部标题；在 TTY 中会给标题文字加渐变色。
ui_header() {
  local title="$1"

  if [ -t 1 ]; then
    local start_r="${RDTUI_GRADIENT_START_R:-64}"
    local start_g="${RDTUI_GRADIENT_START_G:-207}"
    local start_b="${RDTUI_GRADIENT_START_B:-144}"
    local end_r="${RDTUI_GRADIENT_END_R:-164}"
    local end_g="${RDTUI_GRADIENT_END_G:-92}"
    local end_b="${RDTUI_GRADIENT_END_B:-255}"
    local out=""
    local i=0
    local len=${#title}
    local steps=$((len > 1 ? len - 1 : 1))

    for ((i=0; i<len; i++)); do
      local ch="${title:i:1}"
      local r=$((start_r + (end_r - start_r) * i / steps))
      local g=$((start_g + (end_g - start_g) * i / steps))
      local b=$((start_b + (end_b - start_b) * i / steps))
      out+=$'\033[38;2;'"$r"';'"$g"';'"$b"'m'"$ch"
    done
    printf "%b\n" "${C_DIM}${RDTUI_BOX_TOP}${C_RESET}  ${out}"
  else
    printf "%s  %s\n" "$RDTUI_BOX_TOP" "$title"
  fi
}

ui_footer() {
  printf "%b \n" "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}"
}

ui_blank() {
  ui_box_prefix
  printf "\n"
}

ui_info() {
  ui_line "$1"
}

ui_input_frame_start() {
  if rdtui_is_ui_tty; then
    printf "\n%b\033[1A\r%b" "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}"
    printf "\033[s"
    RDTUI_INPUT_SAVED=1
  fi
}

ui_input_frame_end() {
  if rdtui_is_ui_tty; then
    printf "\r%b%b" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$C_CLEAR"
  fi
}

ui_input_frame_end_from_selection() {
  if rdtui_is_ui_tty; then
    printf "\033[1B"
  fi
  ui_input_frame_end
}

ui_break_line() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    printf "\n"
  fi
}

# 正常结束交互界面，负责恢复光标并补齐底部边框。
ui_close() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ "${UI_CLOSED:-0}" -eq 0 ]; then
    ui_cursor_show
    ui_footer
    UI_CLOSED=1
  fi
}

# 失败时只输出一次底部错误信息，避免 ERR/EXIT trap 重复刷屏。
ui_fail_footer() {
  local message="$1"

  if [ "${FAIL_SHOWN:-0}" -eq 1 ]; then
    return 0
  fi

  if [ "${UI_MODE:-0}" -eq 1 ]; then
    if [ "${UI_CLOSED:-0}" -eq 0 ]; then
      ui_cursor_show
      printf "%b  %b\u2718 %s%b\n" "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}" "$C_RED" "$message" "$C_RESET"
      UI_CLOSED=1
    fi
  else
    log_error "$message"
  fi

  FAIL_SHOWN=1
}

ui_prompt_done() {
  local prompt="$1"
  local lines_up="${2:-1}"

  if rdtui_is_ui_tty; then
    printf "\033[%sA\r${C_CYAN}${RDTUI_PROMPT_DONE}${C_RESET}  %s${C_CLEAR}\033[%sB\r" "$lines_up" "$prompt" "$lines_up"
  fi
}

ui_input_render_value() {
  local value="$1"

  if rdtui_is_ui_tty; then
    if [ "${RDTUI_INPUT_SAVED:-0}" -eq 1 ]; then
      printf "\033[u"
    fi
    printf "%b%s%b%b" "$C_DIM" "$value" "$C_RESET" "$C_CLEAR"
    printf "\033[1B\r%b%b" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$C_CLEAR"
  fi
}

ui_prefix_output() {
  local line

  while IFS= read -r line || [ -n "$line" ]; do
    printf "%b%s\n" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$line"
  done
}

# 输出当前等待用户处理的提示行。
ui_prompt_active() {
  local prompt="$1"
  local hint="${2:-}"

  printf "%b  %s%b\n" "${C_CYAN}${RDTUI_PROMPT_ACTIVE}${C_RESET}" "$prompt" "$hint"
}

ui_read_key() {
  local __var="$1"
  local __key=""

  IFS= read -u "$RDTUI_TTY_FD" -rsn1 __key || true
  printf -v "$__var" "%s" "$__key"
}

ui_read_escape_rest() {
  local __var="$1"
  local __rest=""

  IFS= read -u "$RDTUI_TTY_FD" -rsn2 __rest || true
  printf -v "$__var" "%s" "$__rest"
}

# 运行命令并显示完整输出；UI_MODE=1 时会给每一行加边框前缀。
ui_run_verbose() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    "$@" 2>&1 | ui_prefix_output
    local status=${PIPESTATUS[0]}
    return $status
  fi

  "$@"
}

# 运行命令并隐藏 stdout；UI_MODE=1 时仍显示 stderr，便于定位失败原因。
ui_run_quiet() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    "$@" > /dev/null 2> >(ui_prefix_output)
    local status=$?
    return $status
  fi

  "$@" > /dev/null
}

ui_cursor_hide() {
  if rdtui_is_ui_tty && [ "${RDTUI_CURSOR_HIDDEN:-0}" -eq 0 ]; then
    printf "\033[?25l"
    RDTUI_CURSOR_HIDDEN=1
  fi
}

ui_cursor_show() {
  if rdtui_is_ui_tty && [ "${RDTUI_CURSOR_HIDDEN:-0}" -eq 1 ]; then
    printf "\033[?25h"
    RDTUI_CURSOR_HIDDEN=0
  fi
}

# 读取密码类输入，输入内容不会回显。
prompt_secret() {
  local __var="$1"
  local prompt="$2"

  ui_prompt_active "$prompt"
  ui_box_prefix
  ui_input_frame_start
  IFS= read -u "$RDTUI_TTY_FD" -s -r "$__var"
  ui_input_render_value ""
  ui_prompt_done "$prompt" 2
}

# 读取单行文本，可传入默认值作为第三个参数。
prompt_input() {
  local __var="$1"
  local prompt="$2"
  local default_value="${3:-}"
  local input
  local rl_prompt=""

  ui_prompt_active "$prompt"

  if rdtui_is_ui_tty; then
    printf "\n%b\033[1A\r" "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}"
    rl_prompt=$'\001'"${C_DIM}"$'\002'"${RDTUI_BOX_SIDE}"$'\001'"${C_RESET}"$'\002'"  "$'\001'"${C_DIM}"$'\002'
  fi

  if [ -n "$default_value" ] && [ -t "$RDTUI_TTY_FD" ]; then
    IFS= read -u "$RDTUI_TTY_FD" -re -p "$rl_prompt" -i "$default_value" input
  else
    IFS= read -u "$RDTUI_TTY_FD" -re -p "$rl_prompt" input
  fi

  printf "%b" "$C_RESET"
  ui_prompt_done "$prompt" 2
  printf -v "$__var" "%s" "$input"
}

# 多选控件。参数格式为: 变量名 提示语 label value [label value...]
ui_select_multi() {
  local __var="$1"
  local prompt="$2"
  shift 2

  if [ $(( $# % 2 )) -ne 0 ]; then
    log_error "ui_select_multi 选项参数不成对"
    return 1
  fi

  local labels=()
  local values=()
  local selected=()
  local count=0
  local cursor=0
  local key=""
  local rest=""
  local i
  local last_idx

  while [ $# -gt 0 ]; do
    labels+=("$1")
    values+=("$2")
    shift 2
  done

  count=${#labels[@]}
  if [ "$count" -eq 0 ]; then
    printf -v "$__var" "%s" ""
    return 0
  fi

  for ((i=0; i<count; i++)); do
    selected[i]=0
  done

  ui_prompt_active "$prompt" " ${C_DIM}(\u2191/\u2193 切换，空格选择，a 全选，回车确认)${C_RESET}"
  ui_cursor_hide
  last_idx=$((count - 1))

  while true; do
    for ((i=0; i<count; i++)); do
      local line
      if [ "$i" -eq "$cursor" ]; then
        if [ "${selected[i]}" -eq 1 ]; then
          line="${C_CYAN}${C_GREEN}\u25fc${C_RESET}${C_RESET} ${labels[i]}"
        else
          line="${C_CYAN}\u25fb${C_RESET} ${labels[i]}"
        fi
      else
        if [ "${selected[i]}" -eq 1 ]; then
          line="${C_DIM}${C_GREEN}\u25fc${C_RESET} ${labels[i]}${C_RESET}"
        else
          line="${C_DIM}\u25fb ${labels[i]}${C_RESET}"
        fi
      fi

      printf "\r%b%b%b" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$line" "$C_CLEAR"
      if [ "$i" -lt "$last_idx" ]; then
        printf "\n"
      fi
    done
    printf "\n%b " "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}"

    ui_read_key key
    if [[ -z "$key" ]]; then
      ui_cursor_show
      ui_prompt_done "$prompt" "$((count + 1))"

      local display_text=""
      local output=()
      for ((i=0; i<count; i++)); do
        if [ "${selected[i]}" -eq 1 ]; then
          output+=("${values[i]}")
          if [ -z "$display_text" ]; then
            display_text="${values[i]}"
          else
            display_text+="${display_text:+, }${values[i]}"
          fi
        fi
      done

      if [ ${#output[@]} -eq 0 ]; then
        printf -v "$__var" "%s" ""
        display_text="none"
      else
        printf -v "$__var" "%s" "${output[*]}"
      fi

      printf "\033[%sA\r" "$count"
      printf "%b%b%s%b%b\n" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$C_DIM" "$display_text" "$C_RESET" "$C_CLEAR"
      printf "\033[J"
      return 0
    fi

    if [[ "$key" == $'\x1b' ]]; then
      ui_read_escape_rest rest
      case "$rest" in
        "[A") cursor=$((cursor - 1)) ;;
        "[B") cursor=$((cursor + 1)) ;;
      esac
    else
      case "$key" in
        " ") selected[cursor]=$((1 - selected[cursor])) ;;
        a|A)
          local all_selected=1
          for ((i=0; i<count; i++)); do
            if [ "${selected[i]}" -eq 0 ]; then
              all_selected=0
              break
            fi
          done
          for ((i=0; i<count; i++)); do
            selected[i]=$((all_selected ? 0 : 1))
          done
          ;;
        k) cursor=$((cursor - 1)) ;;
        j) cursor=$((cursor + 1)) ;;
      esac
    fi

    if [ "$cursor" -lt 0 ]; then
      cursor=$last_idx
    elif [ "$cursor" -ge "$count" ]; then
      cursor=0
    fi

    printf "\033[%sA\r" "$count"
  done
}

# 单选列表控件。参数格式为: 变量名 提示语 label value [label value...]
ui_select_one() {
  local __var="$1"
  local prompt="$2"
  shift 2

  if [ $(( $# % 2 )) -ne 0 ]; then
    log_error "ui_select_one 选项参数不成对"
    return 1
  fi

  local labels=()
  local values=()
  local count=0
  local cursor=0
  local key=""
  local rest=""
  local i
  local last_idx
  local line

  while [ $# -gt 0 ]; do
    labels+=("$1")
    values+=("$2")
    shift 2
  done

  count=${#labels[@]}
  if [ "$count" -eq 0 ]; then
    printf -v "$__var" "%s" ""
    return 0
  fi

  ui_prompt_active "$prompt" " ${C_DIM}(\u2191/\u2193 切换，回车确认)${C_RESET}"
  ui_cursor_hide
  last_idx=$((count - 1))

  while true; do
    for ((i=0; i<count; i++)); do
      if [ "$i" -eq "$cursor" ]; then
        line="${C_GREEN}\u25cf ${labels[i]}${C_RESET}"
      else
        line="${C_DIM}\u25cb ${labels[i]}${C_RESET}"
      fi

      printf "\r%b%b%b" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$line" "$C_CLEAR"
      if [ "$i" -lt "$last_idx" ]; then
        printf "\n"
      fi
    done
    printf "\n%b " "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}"

    ui_read_key key
    if [[ -z "$key" ]]; then
      ui_cursor_show
      ui_prompt_done "$prompt" "$((count + 1))"
      printf "\033[%sA\r" "$count"
      printf "%b%b%s%b%b\n" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$C_DIM" "${labels[cursor]}" "$C_RESET" "$C_CLEAR"
      printf "\033[J"
      printf -v "$__var" "%s" "${values[cursor]}"
      return 0
    fi

    if [[ "$key" == $'\x1b' ]]; then
      ui_read_escape_rest rest
      case "$rest" in
        "[A") cursor=$((cursor - 1)) ;;
        "[B") cursor=$((cursor + 1)) ;;
      esac
    else
      case "$key" in
        k) cursor=$((cursor - 1)) ;;
        j) cursor=$((cursor + 1)) ;;
      esac
    fi

    if [ "$cursor" -lt 0 ]; then
      cursor=$last_idx
    elif [ "$cursor" -ge "$count" ]; then
      cursor=0
    fi

    printf "\033[%sA\r" "$count"
  done
}

# 左右二选一控件。最后一个参数为默认选项下标，0 表示左侧。
ui_select_lr() {
  local __var="$1"
  local prompt="$2"
  local left_label="$3"
  local right_label="$4"
  local left_value="$5"
  local right_value="$6"
  local default_idx="${7:-0}"
  local idx="$default_idx"
  local key=""
  local rest=""
  local line

  ui_prompt_active "$prompt" " ${C_DIM}(\u2190 /\u2192 切换, Enter 确认)${C_RESET}"
  ui_cursor_hide
  ui_input_frame_start
  while true; do
    if [ "$idx" -eq 0 ]; then
      line="${C_GREEN}\u25cf $left_label${C_RESET}  ${C_DIM}\u25cb $right_label${C_RESET}"
    else
      line="${C_DIM}\u25cb $left_label${C_RESET}  ${C_GREEN}\u25cf $right_label${C_RESET}"
    fi

    printf "\r%b%b%b" "${RDTUI_BOX_PREFIX:-$(ui_box_prefix)}" "$line" "$C_CLEAR"
    ui_read_key key
    if [[ -z "$key" ]]; then
      ui_input_frame_end_from_selection
      ui_cursor_show
      ui_prompt_done "$prompt" 2
      ui_blank
      if [ "$idx" -eq 0 ]; then
        printf -v "$__var" "%s" "$left_value"
      else
        printf -v "$__var" "%s" "$right_value"
      fi
      return 0
    fi

    if [[ "$key" == $'\x1b' ]]; then
      ui_read_escape_rest rest
      case "$rest" in
        "[D") idx=0 ;;
        "[C") idx=1 ;;
      esac
    else
      case "$key" in
        h|a|1) idx=0 ;;
        l|d|2) idx=1 ;;
      esac
    fi
  done
}

# 根据 build_output 自动选择 quiet 或 verbose 运行模式。
ui_run_by_mode() {
  if [ "${build_output:-quiet}" = "verbose" ]; then
    ui_run_verbose "$@"
  else
    ui_run_quiet "$@"
  fi
}

run_cmd() {
  ui_run_by_mode "$@"
}

# sudo 版本的 run_cmd；password 为空时使用 sudo -n。
run_sudo_cmd() {
  if [ -n "${password:-}" ]; then
    ui_run_by_mode sudo -S -p '' "$@" <<<"$password"
  else
    ui_run_by_mode sudo -n "$@"
  fi
}

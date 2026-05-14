#!/bin/bash

RDTUI_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$RDTUI_DIR/rdtcolor.bash"

rdtui_init() {
  UI_MODE="${UI_MODE:-0}"
  UI_CLOSED=0
  FAIL_SHOWN=0
  RDTUI_CURSOR_HIDDEN=0
  RDTUI_INPUT_SAVED=0
  RDTUI_TTY_FD=0

  if [ ! -t 0 ] && [ -r /dev/tty ]; then
    exec 3</dev/tty
    RDTUI_TTY_FD=3
  fi

  RDTUI_PROMPT_ACTIVE=$'\u25c6'
  RDTUI_PROMPT_DONE=$'\u25c7'
  RDTUI_BOX_TOP=$'\u250c'
  RDTUI_BOX_SIDE=$'\u2502'
  RDTUI_BOX_BOTTOM=$'\u2514'
  RDTUI_GRADIENT_START="64,207,144"
  RDTUI_GRADIENT_END="164,92,255"

  rdtcolor_init

  IFS=',' read -r RDTUI_GRADIENT_START_R RDTUI_GRADIENT_START_G RDTUI_GRADIENT_START_B <<< "$RDTUI_GRADIENT_START"
  IFS=',' read -r RDTUI_GRADIENT_END_R RDTUI_GRADIENT_END_G RDTUI_GRADIENT_END_B <<< "$RDTUI_GRADIENT_END"

  rdtui_setup_readline
}

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

log_info() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    echo -e "${C_DIM}${RDTUI_BOX_SIDE}  $1${C_RESET}"
  else
    echo -e "${C_DIM}$1${C_RESET}"
  fi
}

log_success() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    echo -e "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  ${C_GREEN}$1${C_RESET}"
  else
    echo -e "${C_GREEN}$1${C_RESET}"
  fi
}

log_warn() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    echo -e "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  ${C_YELLOW}$1${C_RESET}"
  else
    echo -e "${C_YELLOW}$1${C_RESET}"
  fi
}

log_error() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    echo -e "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  ${C_RED}$1${C_RESET}"
  else
    echo -e "${C_RED}$1${C_RESET}"
  fi
}

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
    echo -e "${RDTUI_BOX_TOP}  $title"
  fi
}

ui_footer() {
  echo -e "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET} "
}

ui_blank() {
  echo -e "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  "
}

ui_info() {
  echo -e "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  $1"
}

ui_input_frame_start() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]; then
    printf "\n${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}\033[1A\r${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  "
    printf "\033[s"
    RDTUI_INPUT_SAVED=1
  fi
}

ui_input_frame_end() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]; then
    printf "\r${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  ${C_CLEAR}"
  fi
}

ui_input_frame_end_from_selection() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]; then
    printf "\033[1B"
  fi
  ui_input_frame_end
}

ui_break_line() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    printf "\n"
  fi
}

ui_close() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ "${UI_CLOSED:-0}" -eq 0 ]; then
    ui_cursor_show
    ui_footer
    UI_CLOSED=1
  fi
}

ui_fail_footer() {
  local message="$1"

  if [ "${FAIL_SHOWN:-0}" -eq 1 ]; then
    return 0
  fi

  if [ "${UI_MODE:-0}" -eq 1 ]; then
    if [ "${UI_CLOSED:-0}" -eq 0 ]; then
      ui_cursor_show
      echo -e "${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}  ${C_RED}\u2718 $message${C_RESET}"
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

  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]; then
    printf "\033[%sA\r${C_CYAN}${RDTUI_PROMPT_DONE}${C_RESET}  %s${C_CLEAR}\033[%sB\r" "$lines_up" "$prompt" "$lines_up"
  fi
}

ui_input_render_value() {
  local value="$1"

  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]; then
    if [ "${RDTUI_INPUT_SAVED:-0}" -eq 1 ]; then
      printf "\033[u"
    fi
    printf "${C_DIM}%s${C_RESET}${C_CLEAR}" "$value"
    printf "\033[1B\r${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  ${C_CLEAR}"
  fi
}

ui_prefix_output() {
  local prefix="${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  "
  local line

  while IFS= read -r line || [ -n "$line" ]; do
    printf "%b%s\n" "$prefix" "$line"
  done
}

ui_run_verbose() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    "$@" 2>&1 | ui_prefix_output
    local status=${PIPESTATUS[0]}
    return $status
  fi

  "$@"
}

ui_run_quiet() {
  if [ "${UI_MODE:-0}" -eq 1 ]; then
    "$@" > /dev/null 2> >(ui_prefix_output)
    local status=$?
    return $status
  fi

  "$@" > /dev/null
}

ui_cursor_hide() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ] && [ "${RDTUI_CURSOR_HIDDEN:-0}" -eq 0 ]; then
    printf "\033[?25l"
    RDTUI_CURSOR_HIDDEN=1
  fi
}

ui_cursor_show() {
  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ] && [ "${RDTUI_CURSOR_HIDDEN:-0}" -eq 1 ]; then
    printf "\033[?25h"
    RDTUI_CURSOR_HIDDEN=0
  fi
}

prompt_secret() {
  local __var="$1"
  local prompt="$2"

  echo -e "${C_CYAN}${RDTUI_PROMPT_ACTIVE}${C_RESET}  $prompt"
  printf "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  "
  ui_input_frame_start
  IFS= read -u "$RDTUI_TTY_FD" -s -r "$__var"
  ui_input_render_value ""
  ui_prompt_done "$prompt" 2
}

prompt_input() {
  local __var="$1"
  local prompt="$2"
  local default_value="${3:-}"
  local input
  local rl_prompt=""

  echo -e "${C_CYAN}${RDTUI_PROMPT_ACTIVE}${C_RESET}  $prompt"

  if [ "${UI_MODE:-0}" -eq 1 ] && [ -t 1 ]; then
    printf "\n${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET}\033[1A\r"
    rl_prompt=$'\001'"${C_DIM}"$'\002'"${RDTUI_BOX_SIDE}"$'\001'"${C_RESET}"$'\002'"  "$'\001'"${C_DIM}"$'\002'
  fi

  if [ -n "$default_value" ] && [ -t "$RDTUI_TTY_FD" ]; then
    IFS= read -u "$RDTUI_TTY_FD" -re -p "$rl_prompt" -i "$default_value" input
  else
    IFS= read -u "$RDTUI_TTY_FD" -re -p "$rl_prompt" input
  fi

  printf "${C_RESET}"
  ui_prompt_done "$prompt" 2
  printf -v "$__var" "%s" "$input"
}

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
  local key
  local rest
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

  echo -e "${C_CYAN}${RDTUI_PROMPT_ACTIVE}${C_RESET}  $prompt ${C_DIM}(\u2191/\u2193 切换，空格选择，a 全选，回车确认)${C_RESET}"
  ui_cursor_hide
  last_idx=$((count - 1))

  while true; do
    for ((i=0; i<count; i++)); do
      local box line
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

      printf "\r${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  %b${C_CLEAR}" "$line"
      if [ "$i" -lt "$last_idx" ]; then
        printf "\n"
      fi
    done
    printf "\n${C_DIM}${RDTUI_BOX_BOTTOM}${C_RESET} "

    IFS= read -u "$RDTUI_TTY_FD" -rsn1 key
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
      printf "${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  ${C_DIM}%s${C_RESET}${C_CLEAR}\n" "$display_text"
      printf "\033[J"
      return 0
    fi

    if [[ "$key" == $'\x1b' ]]; then
      IFS= read -u "$RDTUI_TTY_FD" -rsn2 rest || true
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

ui_select_lr() {
  local __var="$1"
  local prompt="$2"
  local left_label="$3"
  local right_label="$4"
  local left_value="$5"
  local right_value="$6"
  local default_idx="${7:-0}"
  local idx="$default_idx"
  local key
  local rest
  local line

  echo -e "${C_CYAN}${RDTUI_PROMPT_ACTIVE}${C_RESET}  $prompt ${C_DIM}(\u2190 /\u2192 切换, Enter 确认)${C_RESET}"
  ui_cursor_hide
  ui_input_frame_start
  while true; do
    if [ "$idx" -eq 0 ]; then
      line="${C_GREEN}\u25cf $left_label${C_RESET}  ${C_DIM}\u25cb $right_label${C_RESET}"
    else
      line="${C_DIM}\u25cb $left_label${C_RESET}  ${C_GREEN}\u25cf $right_label${C_RESET}"
    fi

    printf "\r${C_DIM}${RDTUI_BOX_SIDE}${C_RESET}  %b${C_CLEAR}" "$line"
    IFS= read -u "$RDTUI_TTY_FD" -rsn1 key
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
      IFS= read -u "$RDTUI_TTY_FD" -rsn2 rest || true
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

run_cmd() {
  if [ "$build_output" = "verbose" ]; then
    ui_run_verbose "$@"
  else
    ui_run_quiet "$@"
  fi
}

run_sudo_cmd() {
  if [ -n "$password" ]; then
    if [ "$build_output" = "verbose" ]; then
      ui_run_verbose sudo -S -p '' "$@" <<<"$password"
    else
      ui_run_quiet sudo -S -p '' "$@" <<<"$password"
    fi
  else
    if [ "$build_output" = "verbose" ]; then
      ui_run_verbose sudo -n "$@"
    else
      ui_run_quiet sudo -n "$@"
    fi
  fi
}

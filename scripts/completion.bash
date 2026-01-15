#!/bin/bash

function _rmvl_completion() {
  local cur prev commands
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"
    
  # Top level commands
  commands="help create update dev version"

  # If we are at the first argument (after rmvl)
  if [[ ${COMP_CWORD} -eq 1 ]]; then
    COMPREPLY=( $(compgen -W "${commands}" -- ${cur}) )
    return 0
  fi

  # Check the subcommand (always the second word, index 1)
  local subcommand="${COMP_WORDS[1]}"
    
  case "${subcommand}" in
    update)
      local update_opts="help tool doc code lib all"
      COMPREPLY=( $(compgen -W "${update_opts}" -- ${cur}) )
      return 0
      ;;
    create)
      local update_opts="help"
      COMPREPLY=( $(compgen -W "${update_opts}" -- ${cur}) )
      return 0
      ;;
    dev)
      local dev_opts="help code nvim dir"
      COMPREPLY=( $(compgen -W "${dev_opts}" -- ${cur}) )
      return 0
      ;;
    *)
      COMPREPLY=()
      return 0
      ;;
  esac
}

# Register the completion function for the rmvl command
complete -F _rmvl_completion rmvl
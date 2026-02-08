#!/bin/bash

function _rmvl_completion() {
  local cur prev commands
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"
    
  # Top level commands
  commands="help create update dev remove version"

  if [[ ${COMP_CWORD} -eq 1 ]]; then
    COMPREPLY=( $(compgen -W "${commands}" -- ${cur}) )
    return 0
  fi

  local subcommand="${COMP_WORDS[1]}"
    
  case "${subcommand}" in
    update)
      local update_opts="help tool doc code lib all"
      COMPREPLY=( $(compgen -W "${update_opts}" -- ${cur}) )
      return 0
      ;;
    create)
      local create_opts="help"
      COMPREPLY=( $(compgen -W "${create_opts}" -- ${cur}) )
      return 0
      ;;
    dev)
      local dev_opts="help code nvim dir"
      COMPREPLY=( $(compgen -W "${dev_opts}" -- ${cur}) )
      return 0
      ;;
    remove)
      local remove_opts="help tool lib"
      COMPREPLY=( $(compgen -W "${remove_opts}" -- ${cur}) )
      return 0
      ;;
    *)
      COMPREPLY=()
      return 0
      ;;
  esac
}

function _lpss_completion() {
  local cur prev commands
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"
    
  # Top level commands
  commands="help create node topic graph viz"

  if [[ ${COMP_CWORD} -eq 1 ]]; then
    COMPREPLY=( $(compgen -W "${commands}" -- ${cur}) )
    return 0
  fi

  local subcommand="${COMP_WORDS[1]}"
    
  case "${subcommand}" in
    create)
      COMPREPLY=()
      return 0
      ;;
    node)
      local node_opts="info list"
      COMPREPLY=( $(compgen -W "${node_opts}" -- ${cur}) )
      return 0
      ;;
    topic)
      local topic_opts="info list"
      COMPREPLY=( $(compgen -W "${topic_opts}" -- ${cur}) )
      return 0
      ;;
    *)
      COMPREPLY=()
      return 0
      ;;
  esac
}

# Register the completion function for the command
for cmd in rmvl lpss; do
  complete -F _${cmd}_completion $cmd
done
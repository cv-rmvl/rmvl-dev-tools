#!/bin/bash

rdtcolor_init() {
  if [ -t 1 ]; then
    C_RESET=$'\033[0m'
    C_BOLD=$'\033[1m'
    C_DIM=$'\033[90m'
    C_CYAN=$'\033[36m'
    C_GREEN=$'\033[32m'
    C_YELLOW=$'\033[33m'
    C_RED=$'\033[31m'
    C_CLEAR=$'\033[K'
  else
    C_RESET=""
    C_BOLD=""
    C_DIM=""
    C_CYAN=""
    C_GREEN=""
    C_YELLOW=""
    C_RED=""
    C_CLEAR=""
  fi
}

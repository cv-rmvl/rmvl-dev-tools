#!/bin/bash

set -eu

function usage() {
  echo "用法: lpss create <project_name> [options]"
  echo "   project_name: 待创建的项目名称"
  echo "可选的 options 选项:"
  echo "   --deps <list>    指定项目依赖的 RMVL 模块，逗号或空格分隔，默认为空"
  echo "   --exts <list>    指定项目使用的非 RMVL 库，逗号或空格分隔，默认为空"
  echo "   --cpp <version>  指定项目使用的 C++ 标准版本，默认为 20"
  echo "示例:"
  echo "   lpss create demo_node"
  echo "   lpss create demo_node --deps anchor hik_camera --cpp 17"
  echo "   lpss create demo_node --deps hik_camera --exts json fmt"
}

function parse_list_to_array() {
  local raw=$1
  local -n ref=$2
  local normalized=${raw//,/ }
  read -r -a ref <<< "$normalized"
}

if [ "$#" -lt 1 ]; then
  usage
  exit 1
fi

if [[ "$1" == --* ]]; then
  echo "未输入项目名"
  usage
  exit 1
fi

project_name=$1
if [[ "$project_name" == *"/"* ]]; then
  echo "项目名称不能包含路径分隔符 '/'"
  exit 1
elif [[ "$project_name" == *" "* ]]; then
  echo "项目名称不能包含空格"
  exit 1
elif [[ -z "$project_name" ]]; then
  echo "项目名称不能为空"
  exit 1
elif [[ -d "$project_name" ]]; then
  echo "项目名称不能是一个已存在的目录"
  exit 1
fi

shift

deps=()
exts=()
cpp_std="20"

while [ "$#" -gt 0 ]; do
  case "$1" in
    --deps)
      shift
      if [ "$#" -eq 0 ] || [[ "$1" == --* ]]; then
        echo "缺少参数: --deps"
        usage
        exit 1
      fi
      while [ "$#" -gt 0 ] && [[ "$1" != --* ]]; do
        list_items=()
        parse_list_to_array "$1" list_items
        deps+=("${list_items[@]}")
        shift
      done
      ;;
    --exts)
      shift
      if [ "$#" -eq 0 ] || [[ "$1" == --* ]]; then
        echo "缺少参数: --exts"
        usage
        exit 1
      fi
      while [ "$#" -gt 0 ] && [[ "$1" != --* ]]; do
        list_items=()
        parse_list_to_array "$1" list_items
        exts+=("${list_items[@]}")
        shift
      done
      ;;
    --cpp)
      if [ "$#" -lt 2 ] || [[ "$2" == --* ]]; then
        echo "缺少参数: --cpp"
        usage
        exit 1
      fi
      cpp_std=$2
      shift 2
      ;;
    *)
      echo "未知参数: $1"
      usage
      exit 1
      ;;
  esac
done

if ! [[ "$cpp_std" =~ ^(17|20|23)$ ]]; then
  echo "不支持的 C++ 标准版本: $cpp_std"
  echo "支持版本: 17, 20, 23"
  exit 1
fi

if [ -d "$project_name" ]; then
  echo "目录 '$project_name' 已存在"
  exit 1
fi

mkdir -p "$project_name/src"

cat > "$project_name/src/main.cpp" <<EOF
#include <rmvl/lpss/node.hpp>

using namespace rm;

int main() {
}
EOF

{
  echo "cmake_minimum_required(VERSION 3.16)"
  echo
  echo "project(${project_name} LANGUAGES CXX)"
  echo
  echo "set(CMAKE_CXX_STANDARD ${cpp_std})"
  echo "set(CMAKE_CXX_STANDARD_REQUIRED ON)"
  echo
  echo "find_package(RMVL REQUIRED)"
  echo
  echo "rmvl_add_exe("
  echo "  \${PROJECT_NAME}"
  echo "  SOURCES src/main.cpp"
  echo "  DEPENDS lpss ${deps[*]}"
  if [ "${#exts[@]}" -gt 0 ]; then
    echo "  EXTERNAL ${exts[*]}"
  fi
  echo ")"
} > "$project_name/CMakeLists.txt"

cat > "$project_name/README.md" <<EOF
# ${project_name}

这是一个由 lpss create 生成的项目。

## 构建

\`\`\`bash
mkdir -p build
cd build
cmake ..
cmake --build .
\`\`\`
EOF

cat > "$project_name/.gitignore" <<EOF
build/
EOF

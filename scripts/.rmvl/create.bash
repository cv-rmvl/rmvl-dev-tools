#!/bin/bash

if [ "$#" -lt 1 ]; then
  echo "用法: rmvltool create <module_name> [sub_module_1 [sub_module_2] ...]"
  exit 1
fi

module_name=$1
shift
sub_modules=("$@")

if [ -d "$module_name" ]; then
  echo -e "\033[31mError: Directory '$module_name' already exists.\033[0m"
  exit 1
fi

echo "Creating module structure for '$module_name'..."

# create main module directory
mkdir -p $module_name/src
mkdir -p $module_name/test
mkdir -p $module_name/perf
mkdir -p $module_name/param
if [ ${#sub_modules[@]} = 0 ]; then
  mkdir -p $module_name/include/rmvl/
else
  for sub_module in "${sub_modules[@]}"; do
    mkdir -p $module_name/include/rmvl/$module_name/$sub_module
    mkdir -p $module_name/src/$sub_module
  done
fi

# create main module files
touch $module_name/CMakeLists.txt
touch $module_name/include/rmvl/$module_name.hpp
touch $module_name/src/$module_name.cpp
for sub_module in "${sub_modules[@]}"; do
  touch $module_name/include/rmvl/$module_name/$sub_module.hpp
  touch $module_name/src/$sub_module/$sub_module.cpp
done
touch $module_name/perf/perf_$module_name.cpp
touch $module_name/test/test_$module_name.cpp

# initialize CMakeLists.txt
{
  echo "rmvl_add_module("
  echo "  $module_name"
  echo "  DEPENDS core"
  echo ")"

  for sub_module in "${sub_modules[@]}"; do
    echo ""
    echo "rmvl_add_module("
    echo "  $sub_module"
    echo "  DEPENDS $module_name"
    echo ")"
  done

  echo -e "\n# --------------------------------------------------------------------------"
  echo "#  Build the test program"
  echo "# --------------------------------------------------------------------------"
  echo "if(BUILD_TESTS)"
  echo "  rmvl_add_test("
  echo "    $module_name Unit"
  echo "    DEPENDS $module_name"
  echo "    EXTERNAL GTest::gtest_main"
  echo "  )"
  echo -e "endif(BUILD_TESTS)\n"

  echo "if(BUILD_PERF_TESTS)"
  echo "  rmvl_add_test("
  echo "    $module_name Performance"
  echo "    DEPENDS $module_name"
  echo "    EXTERNAL benchmark::benchmark_main"
  echo "  )"
  echo "endif(BUILD_PERF_TESTS)"
} >> $module_name/CMakeLists.txt

# initialize *.hpp files
echo -e "#pragma once\n" > $module_name/include/rmvl/$module_name.hpp
for sub_module in "${sub_modules[@]}"; do
  echo -e "#pragma once\n" > $module_name/include/rmvl/$module_name/$sub_module.hpp
done

echo -e "\033[32mCreating module structure for '$module_name' done!\033[0m"

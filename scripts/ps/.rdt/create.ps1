[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-Usage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt create${CReset} ${CDim}[help | <module_name> [sub_module_1 [sub_module_2] ...]]${CReset}"
    Write-Host ''
    Write-Host "${CBold}参数:${CReset}"
    Write-Host "  ${CCyan}help${CReset}             ${CDim}显示详细的帮助信息${CReset}"
    Write-Host "  ${CCyan}module_name${CReset}      ${CDim}要创建的主模块名称${CReset}"
    Write-Host "  ${CCyan}sub_module_<n>${CReset}   ${CDim}可选的子模块名称${CReset}"
}

if ($Arguments.Count -eq 0) {
    Show-Usage
    throw '缺少模块名称。'
}
if ($Arguments[0] -eq 'help') {
    Write-Host "${CDim}该命令会在当前目录下生成一个新的 RMVL 模块的基本目录结构和必要文件${CReset}"
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt create${CReset} ${CDim}<module_name> [sub_module_1 [sub_module_2] ...]${CReset}"
    Write-Host "  ${CCyan}module_name${CReset} ${CDim}要创建的主模块名称，在 RMVL 库中将作为一个独立的模块${CReset}"
    Write-Host "  ${CCyan}sub_module_n${CReset} ${CDim}可选的子模块名称，每个子模块也将作为一个独立的模块${CReset}"
    Write-Host "${CBold}示例:${CReset} ${CCyan}rdt create my_module sub1 sub2 sub3${CReset}"
    Write-Host "  ${CDim}该命令将在当前目录下创建名为 my_module 的主模块，并包含 sub1、sub2 和 sub3 三个子模块${CReset}"
    return
}

$moduleName = $Arguments[0]
$subModules = @($Arguments | Select-Object -Skip 1)
if ($moduleName.IndexOfAny([IO.Path]::GetInvalidFileNameChars()) -ge 0 -or $moduleName -match '[\\/]') {
    throw "模块名称不合法: $moduleName"
}
$modulePath = Join-Path (Get-Location) $moduleName
if (Test-Path -LiteralPath $modulePath) {
    throw "目录 '$moduleName' 已存在。"
}

$directories = @(
    (Join-Path $modulePath 'src'),
    (Join-Path $modulePath 'test'),
    (Join-Path $modulePath 'perf'),
    (Join-Path $modulePath 'param')
)
if ($subModules.Count -eq 0) {
    $directories += Join-Path $modulePath 'include/rmvl'
} else {
    foreach ($subModule in $subModules) {
        if ($subModule.IndexOfAny([IO.Path]::GetInvalidFileNameChars()) -ge 0 -or $subModule -match '[\\/]') {
            throw "子模块名称不合法: $subModule"
        }
        $directories += Join-Path $modulePath "include/rmvl/$moduleName/$subModule"
        $directories += Join-Path $modulePath "src/$subModule"
    }
}
New-Item -ItemType Directory -Force -Path $directories | Out-Null

$cmakeLines = @(
    'rmvl_add_module(',
    "  $moduleName",
    '  DEPENDS core',
    ')'
)
foreach ($subModule in $subModules) {
    $cmakeLines += ''
    $cmakeLines += 'rmvl_add_module('
    $cmakeLines += "  $subModule"
    $cmakeLines += "  DEPENDS $moduleName"
    $cmakeLines += ')'
}
$cmakeLines += @(
    '',
    '# --------------------------------------------------------------------------',
    '#  Build the test program',
    '# --------------------------------------------------------------------------',
    'if(BUILD_TESTS)',
    '  rmvl_add_test(',
    "    $moduleName Unit",
    "    DEPENDS $moduleName",
    '    EXTERNAL GTest::gtest_main',
    '  )',
    'endif(BUILD_TESTS)',
    '',
    'if(BUILD_PERF_TESTS)',
    '  rmvl_add_test(',
    "    $moduleName Performance",
    "    DEPENDS $moduleName",
    '    EXTERNAL benchmark::benchmark_main',
    '  )',
    'endif(BUILD_PERF_TESTS)'
)
Set-Content -LiteralPath (Join-Path $modulePath 'CMakeLists.txt') -Value $cmakeLines -Encoding ASCII
Set-Content -LiteralPath (Join-Path $modulePath "include/rmvl/$moduleName.hpp") -Value "#pragma once`r`n" -Encoding ASCII
New-Item -ItemType File -Force -Path (Join-Path $modulePath "src/$moduleName.cpp") | Out-Null
New-Item -ItemType File -Force -Path (Join-Path $modulePath "perf/perf_$moduleName.cpp") | Out-Null
New-Item -ItemType File -Force -Path (Join-Path $modulePath "test/test_$moduleName.cpp") | Out-Null
foreach ($subModule in $subModules) {
    Set-Content -LiteralPath (Join-Path $modulePath "include/rmvl/$moduleName/$subModule.hpp") -Value "#pragma once`r`n" -Encoding ASCII
    New-Item -ItemType File -Force -Path (Join-Path $modulePath "src/$subModule/$subModule.cpp") | Out-Null
}
Write-Success "Creating module structure for '$moduleName' done!"

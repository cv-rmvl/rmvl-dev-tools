[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $ProjectName,

    [Parameter(Position = 1, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-CreateUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}lpss create${CReset} ${CDim}<project_name> [options]${CReset}"
    Write-Host "${CBold}参数:${CReset}"
    Write-Host "  ${CCyan}project_name${CReset} ${CDim}待创建的项目名称${CReset}"
    Write-Host "${CBold}选项:${CReset}"
    Write-Host "  ${CCyan}--deps${CReset} ${CDim}<list>     指定项目依赖的 RMVL 模块，逗号或空格分隔，默认为空${CReset}"
    Write-Host "  ${CCyan}--exts${CReset} ${CDim}<list>     指定项目使用的非 RMVL 库，逗号或空格分隔，默认为空${CReset}"
    Write-Host "  ${CCyan}--cpp${CReset}  ${CDim}<version>  指定项目使用的 C++ 标准版本，默认为 20${CReset}"
    Write-Host "${CBold}示例:${CReset}"
    Write-Host "  ${CYellow}lpss create${CReset} demo_node"
    Write-Host "  ${CYellow}lpss create${CReset} demo_node ${CDim}--deps${CReset} anchor hik_camera ${CDim}--cpp${CReset} 17"
    Write-Host "  ${CYellow}lpss create${CReset} demo_node ${CDim}--deps${CReset} hik_camera ${CDim}--exts${CReset} json fmt"
}

if ([string]::IsNullOrWhiteSpace($ProjectName) -or $ProjectName.StartsWith('--')) {
    Show-CreateUsage
    throw '未输入项目名'
}
if ($ProjectName.IndexOfAny([IO.Path]::GetInvalidFileNameChars()) -ge 0 -or $ProjectName.Contains('/') -or $ProjectName.Contains('\')) {
    throw '项目名称不能包含路径分隔符或无效字符'
}
if ($ProjectName.Contains(' ')) {
    throw '项目名称不能包含空格'
}
if (Test-Path -LiteralPath $ProjectName) {
    throw "项目名称不能是一个已存在的路径: $ProjectName"
}

$dependencies = [Collections.Generic.List[string]]::new()
$externals = [Collections.Generic.List[string]]::new()
$cppStandard = '20'
$index = 0
while ($null -ne $Arguments -and $index -lt $Arguments.Count) {
    switch ($Arguments[$index]) {
        '--deps' {
            $index++
            if ($index -ge $Arguments.Count -or $Arguments[$index].StartsWith('--')) {
                throw '缺少参数: --deps'
            }
            while ($index -lt $Arguments.Count -and -not $Arguments[$index].StartsWith('--')) {
                foreach ($item in ($Arguments[$index] -split ',' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })) {
                    $dependencies.Add($item)
                }
                $index++
            }
        }
        '--exts' {
            $index++
            if ($index -ge $Arguments.Count -or $Arguments[$index].StartsWith('--')) {
                throw '缺少参数: --exts'
            }
            while ($index -lt $Arguments.Count -and -not $Arguments[$index].StartsWith('--')) {
                foreach ($item in ($Arguments[$index] -split ',' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })) {
                    $externals.Add($item)
                }
                $index++
            }
        }
        '--cpp' {
            if ($index + 1 -ge $Arguments.Count -or $Arguments[$index + 1].StartsWith('--')) {
                throw '缺少参数: --cpp'
            }
            $cppStandard = $Arguments[$index + 1]
            $index += 2
        }
        default {
            throw "未知参数: $($Arguments[$index])"
        }
    }
}
if ($cppStandard -notin @('17', '20', '23')) {
    throw "不支持的 C++ 标准版本: $cppStandard；支持版本: 17, 20, 23"
}

$sourceDirectory = Join-Path $ProjectName 'src'
New-Item -ItemType Directory -Path $sourceDirectory -Force | Out-Null
Set-Content -LiteralPath (Join-Path $sourceDirectory 'main.cpp') -Encoding UTF8 -Value @'
#include <rmvl/lpss/node.hpp>

using namespace rm;

int main() {
}
'@

$depends = (@('lpss') + $dependencies) -join ' '
$cmakeLines = @(
    'cmake_minimum_required(VERSION 3.16)'
    ''
    "project($ProjectName LANGUAGES CXX)"
    ''
    'find_package(RMVL REQUIRED)'
    ''
    'rmvl_add_exe('
    '  ${PROJECT_NAME}'
    '  SOURCES src/main.cpp'
    "  DEPENDS $depends"
)
if ($externals.Count -gt 0) {
    $cmakeLines += "  EXTERNAL $($externals -join ' ')"
}
$cmakeLines += ')'
Set-Content -LiteralPath (Join-Path $ProjectName 'CMakeLists.txt') -Encoding UTF8 -Value $cmakeLines
Set-Content -LiteralPath (Join-Path $ProjectName '.gitignore') -Encoding UTF8 -Value 'build/'
Set-Content -LiteralPath (Join-Path $ProjectName 'README.md') -Encoding UTF8 -Value @"
# $ProjectName

这是一个由 lpss create 生成的项目。

## 构建

``````powershell
cmake -S . -B build
cmake --build build
``````
"@

Write-Success "项目创建完成: $ProjectName"

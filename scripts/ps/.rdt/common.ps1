. (Join-Path $ToolsRoot 'setup/ps/rdtui.ps1')
Initialize-RdtUi

function Show-RdtUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt${CReset} <command> ${CDim}[args...]${CReset}"
    Write-Host ''
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}      ${CDim}显示详细帮助信息${CReset}"
    Write-Host "  ${CCyan}create${CReset}    ${CDim}创建一个新的 RMVL 模块${CReset}"
    Write-Host "  ${CCyan}update${CReset}    ${CDim}更新 RMVL 或 rdt 工具${CReset}"
    Write-Host "  ${CCyan}dev${CReset}       ${CDim}开始开发 RMVL${CReset}"
    Write-Host "  ${CCyan}git${CReset}       ${CDim}执行常用 Git 工作流${CReset}"
    Write-Host "  ${CCyan}remove${CReset}    ${CDim}移除 RMVL 组件${CReset}"
    Write-Host "  ${CCyan}version${CReset}   ${CDim}显示 rdt 工具版本${CReset}"
}

function Assert-RmvlRoot {
    if ([string]::IsNullOrWhiteSpace($env:RMVL_ROOT_)) {
        throw 'RMVL 根路径未指定，请执行 powershell -ExecutionPolicy Bypass -File .\setup\ps\install.ps1 -RootPath <rmvl-path> 安装 rdt。'
    }
    if (-not (Test-Path -LiteralPath $env:RMVL_ROOT_ -PathType Container)) {
        throw "RMVL 根路径不存在: $env:RMVL_ROOT_"
    }
}

function Invoke-External {
    param(
        [Parameter(Mandatory)]
        [string] $Executable,

        [Parameter(ValueFromRemainingArguments)]
        [string[]] $Arguments
    )

    Invoke-RdtCommand $Executable @Arguments
}

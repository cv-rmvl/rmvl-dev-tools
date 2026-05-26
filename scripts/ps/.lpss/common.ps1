. (Join-Path $ToolsRoot 'setup/ps/rdtui.ps1')
Initialize-RdtUi

function Show-LpssUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}lpss${CReset} <command> ${CDim}[args...]${CReset}"
    Write-Host ''
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help        ${CDim}显示详细帮助信息${CReset}"
    Write-Host "  ${CCyan}create      ${CDim}创建一个依赖 lpss 的新项目${CReset}"
    Write-Host "  ${CCyan}node        ${CDim}节点 CLI 工具${CReset}"
    Write-Host "  ${CCyan}topic       ${CDim}话题 CLI 工具${CReset}"
    Write-Host "  ${CCyan}interface   ${CDim}内置消息接口查看工具${CReset}"
    Write-Host "  ${CCyan}graph       ${CDim}节点图工具${CReset}"
    Write-Host "  ${CCyan}viz         ${CDim}3D 可视化工具 LViz${CReset}"
}

function Assert-LpssRmvlRoot {
    if ([string]::IsNullOrWhiteSpace($env:RMVL_ROOT_)) {
        throw 'RMVL 根路径未指定，请重新运行 install.bat 安装工具。'
    }
    if (-not (Test-Path -LiteralPath $env:RMVL_ROOT_ -PathType Container)) {
        throw "RMVL 根路径不存在: $env:RMVL_ROOT_"
    }
}

function Get-LpssBinary {
    param(
        [Parameter(Mandatory)]
        [string] $Name
    )

    $path = Join-Path $CommandRoot "_autogen_lpss_$Name.exe"
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        throw "lpss $Name 工具尚未安装，请重新运行 install.bat。"
    }
    return $path
}

function Invoke-LpssBinary {
    param(
        [Parameter(Mandatory)]
        [string] $Name,
        [Parameter(ValueFromRemainingArguments)]
        [string[]] $Arguments
    )

    $binary = Get-LpssBinary -Name $Name
    & $binary @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "'$binary' 执行失败，退出码: $LASTEXITCODE"
    }
}

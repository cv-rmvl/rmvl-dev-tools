[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-Usage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt remove${CReset} ${CDim}[help | tool | lib]${CReset}"
    Write-Host ''
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}   ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}tool${CReset}   ${CDim}移除 rmvl-dev-tools 工具${CReset}"
    Write-Host "  ${CCyan}lib${CReset}    ${CDim}移除 RMVL 安装内容${CReset}"
}

function Get-ConfiguredValue {
    param([string] $Name)

    $value = [Environment]::GetEnvironmentVariable($Name, 'Process')
    if ([string]::IsNullOrWhiteSpace($value)) {
        $value = [Environment]::GetEnvironmentVariable($Name, 'User')
    }
    return $value
}

function Remove-SafeDirectory {
    param([string] $Target, [string] $Label)

    if ([string]::IsNullOrWhiteSpace($Target)) {
        Write-RdtWarning "$Label 路径为空，已跳过"
        return
    }
    if (-not (Test-Path -LiteralPath $Target -PathType Container)) {
        Write-RdtWarning "$Label 路径不存在，已跳过: $Target"
        return
    }
    $resolved = (Resolve-Path -LiteralPath $Target).Path.TrimEnd('\', '/')
    $home = [Environment]::GetFolderPath('UserProfile').TrimEnd('\', '/')
    $root = [IO.Path]::GetPathRoot($resolved).TrimEnd('\', '/')
    if ($resolved -eq $home -or $resolved -eq $root) {
        throw "$Label 路径过于危险，已拒绝删除: $resolved"
    }
    Write-RdtInfo "正在移除 $Label`: $resolved"
    Remove-Item -LiteralPath $resolved -Recurse -Force
    Write-Success "$Label 已移除"
}

function Invoke-ToolRemoval {
    $rmvlRoot = Get-ConfiguredValue -Name 'RMVL_ROOT_'

    Initialize-RdtUi -Interactive
    Show-RdtHeader '移除 rmvl/rdt 相关工具'
    Write-RdtBlank
    $removeRmvl = Select-RdtBinary -Prompt '是否移除 rmvl 仓库' -LeftLabel '移除' -RightLabel '保留' -LeftValue 'yes' -RightValue 'no' -DefaultIndex 1
    $removeRdt = Select-RdtBinary -Prompt '是否移除 rdt 仓库' -LeftLabel '移除' -RightLabel '保留' -LeftValue 'yes' -RightValue 'no'
    Write-RdtBlank

    if ($removeRdt -eq 'yes') {
        Write-RdtInfo '正在执行 uninstall.ps1...'
        $output = & (Join-Path $ToolsRoot 'setup/ps/uninstall.ps1') 2>&1
        foreach ($line in $output) {
            Write-RdtLine "${CDim}$line${CReset}"
        }
        Write-Success 'rdt 配置已移除，重启终端后生效'
    }
    if ($removeRmvl -eq 'yes') {
        Remove-SafeDirectory -Target $rmvlRoot -Label 'rmvl 仓库'
    }
    if ($removeRdt -eq 'yes') {
        Remove-SafeDirectory -Target $ToolsRoot -Label 'rdt 工具'
    }
    if ($removeRmvl -ne 'yes' -and $removeRdt -ne 'yes') {
        Write-RdtWarning '未选择任何移除项'
    }
}

function Invoke-LibraryRemoval {
    $installPrefix = Get-ConfiguredValue -Name 'RDT_RMVL_PREFIX'
    if ([string]::IsNullOrWhiteSpace($installPrefix)) {
        throw '未记录 RMVL 安装路径，无法安全移除库文件。'
    }

    Initialize-RdtUi -Interactive
    Show-RdtHeader '移除 RMVL 安装内容'
    Write-RdtBlank
    Write-RdtInfo "安装目录: $installPrefix"
    $confirmed = Select-RdtBinary -Prompt '确认移除该目录？' -LeftLabel '移除' -RightLabel '取消' -LeftValue 'yes' -RightValue 'no' -DefaultIndex 1
    if ($confirmed -ne 'yes') { throw '操作取消' }
    Write-RdtBlank
    Remove-SafeDirectory -Target $installPrefix -Label 'RMVL 安装目录'
}

if ($Arguments.Count -eq 0 -or $Arguments[0] -eq 'help') {
    Show-Usage
    if ($Arguments.Count -eq 0) { throw 'remove 需要一个命令。' }
    return
}

try {
    switch ($Arguments[0]) {
        'tool' { Invoke-ToolRemoval }
        'lib' { Invoke-LibraryRemoval }
        default { Show-Usage; throw "未知 remove 命令: $($Arguments[0])" }
    }
    Close-RdtUi
} catch {
    Write-RdtFailureFooter $_.Exception.Message
    $_.Exception.Data['RdtUiReported'] = $true
    throw
} finally {
    Close-RdtUi
}

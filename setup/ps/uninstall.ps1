[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$ToolsRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$ScriptsPath = Join-Path $ToolsRoot 'scripts/ps'

. (Join-Path $PSScriptRoot 'rdtui.ps1')
. (Join-Path $PSScriptRoot 'profile.ps1')
Initialize-RdtUi

try {
    $userPath = [Environment]::GetEnvironmentVariable('Path', 'User')
    $newItems = @($userPath -split ';' | Where-Object {
        -not [string]::IsNullOrWhiteSpace($_) -and $_ -ne $ScriptsPath
    })
    [Environment]::SetEnvironmentVariable('Path', ($newItems -join ';'), 'User')
    [Environment]::SetEnvironmentVariable('RMVL_ROOT_', $null, 'User')
    [Environment]::SetEnvironmentVariable('RDT_RMVL_PREFIX', $null, 'User')
    Remove-Item Env:\RMVL_ROOT_ -ErrorAction SilentlyContinue
    Remove-Item Env:\RDT_RMVL_PREFIX -ErrorAction SilentlyContinue
    if (Disable-RdtProfileSetup) {
        Write-Success 'PowerShell PROFILE 中的 rdt 自动补全配置已移除。'
    }
    Write-Success 'rdt Windows 配置已移除。请打开新的终端使 PATH 更新生效。'
} catch {
    Write-ErrorMessage $_.Exception.Message
    exit 1
}

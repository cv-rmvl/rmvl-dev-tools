[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $Command,

    [Parameter(Position = 1, ValueFromRemainingArguments = $true)]
    [string[]] $CommandArguments
)

$ErrorActionPreference = 'Stop'
$ToolsRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$CommandRoot = Join-Path $PSScriptRoot '.lpss'
$Commands = @('help', 'create', 'node', 'topic', 'interface', 'graph', 'viz')

. (Join-Path $CommandRoot 'common.ps1')

try {
    if ([string]::IsNullOrWhiteSpace($Command)) {
        Show-LpssUsage
        exit 1
    }

    if ($Command -notin $Commands) {
        Show-LpssUsage
        throw "未知命令: $Command"
    }
    $scriptPath = Join-Path $CommandRoot "$Command.ps1"
    if ($null -eq $CommandArguments) {
        & $scriptPath
    } else {
        & $scriptPath @CommandArguments
    }
} catch {
    Write-ErrorMessage $_.Exception.Message
    exit 1
}

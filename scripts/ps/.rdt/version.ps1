[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

$changelog = Join-Path $ToolsRoot 'changelog.txt'
$versions = Select-String -LiteralPath $changelog -Pattern '^[0-9]+\.[0-9]+\.[0-9]+-[0-9]{6}$'
$current = if ($versions) { $versions[-1].Line } else { 'unknown' }

function Format-ChangelogMarkers([string] $Line) {
    return [regex]::Replace($Line, '\{\{\s*(.*?)\s*\}\}', {
        param($Match)
        return "${CGreen}${CBold}$($Match.Groups[1].Value)${CReset}"
    })
}

if ($Arguments.Count -gt 0 -and $Arguments[0] -eq 'log') {
    Write-Host "${CBold}当前版本:${CReset} $current`n"
    Write-Host "${CBold}详细更新日志${CReset}`n"
    foreach ($line in Get-Content -LiteralPath $changelog) {
        $line = Format-ChangelogMarkers $line
        if ($line -match '^[0-9]+\.[0-9]+\.[0-9]+-[0-9]{6}$') {
            Write-Host "${CYellow}${line}${CReset}"
        } else {
            Write-Host $line
        }
    }
} else {
    Write-Host $current
}

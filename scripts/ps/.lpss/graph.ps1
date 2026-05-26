[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

$binary = Join-Path $CommandRoot '_autogen_lpss_graph.exe'
if (Test-Path -LiteralPath $binary -PathType Leaf) {
    & $binary @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "'$binary' 执行失败，退出码: $LASTEXITCODE"
    }
} else {
    Write-Host 'lpss graph 工具尚未实现。敬请期待！'
}

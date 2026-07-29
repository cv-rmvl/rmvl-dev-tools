[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

& (Join-Path $PSScriptRoot 'lpss.ps1') graph @Arguments
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

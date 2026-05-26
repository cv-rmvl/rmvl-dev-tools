$script:RdtProfileStart = '# >>> rdt PowerShell setup >>>'
$script:RdtProfileEnd = '# <<< rdt PowerShell setup <<<'

function Get-RdtProfilePath {
    if ($PROFILE.CurrentUserAllHosts) {
        return $PROFILE.CurrentUserAllHosts
    }
    return [string] $PROFILE
}

function Remove-RdtProfileBlockText {
    param([string] $Content)

    if ([string]::IsNullOrEmpty($Content)) { return '' }
    $start = [Regex]::Escape($script:RdtProfileStart)
    $end = [Regex]::Escape($script:RdtProfileEnd)
    return [Regex]::Replace($Content, "(?ms)^$start\r?\n.*?^$end(?:\r?\n)?", '').TrimEnd("`r", "`n")
}

function Enable-RdtProfileSetup {
    param(
        [Parameter(Mandatory)]
        [string] $SetupScriptPath,
        [string] $ProfilePath = (Get-RdtProfilePath)
    )

    $existing = if (Test-Path -LiteralPath $ProfilePath -PathType Leaf) {
        Get-Content -LiteralPath $ProfilePath -Raw
    } else {
        ''
    }
    $remaining = Remove-RdtProfileBlockText -Content $existing
    $escapedPath = $SetupScriptPath.Replace("'", "''")
    $block = @(
        $script:RdtProfileStart
        ". '$escapedPath'"
        $script:RdtProfileEnd
    ) -join "`r`n"
    $prefix = if ([string]::IsNullOrWhiteSpace($remaining)) { '' } else { "$remaining`r`n`r`n" }

    $parent = Split-Path -Parent $ProfilePath
    if (-not (Test-Path -LiteralPath $parent -PathType Container)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    Set-Content -LiteralPath $ProfilePath -Value "$prefix$block`r`n" -Encoding UTF8 -NoNewline
}

function Disable-RdtProfileSetup {
    param([string] $ProfilePath = (Get-RdtProfilePath))

    if (-not (Test-Path -LiteralPath $ProfilePath -PathType Leaf)) {
        return $false
    }
    $existing = Get-Content -LiteralPath $ProfilePath -Raw
    $remaining = Remove-RdtProfileBlockText -Content $existing
    if ($remaining -eq $existing.TrimEnd("`r", "`n")) {
        return $false
    }
    if ([string]::IsNullOrWhiteSpace($remaining)) {
        Set-Content -LiteralPath $ProfilePath -Value '' -Encoding UTF8 -NoNewline
    } else {
        Set-Content -LiteralPath $ProfilePath -Value "$remaining`r`n" -Encoding UTF8 -NoNewline
    }
    return $true
}

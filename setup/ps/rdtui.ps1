. (Join-Path $PSScriptRoot 'rdtcolor.ps1')

function Initialize-RdtUi {
    param([switch] $Interactive)

    Initialize-RdtColor
    $script:RdtUiMode = [bool] $Interactive
    $script:RdtUiClosed = $false
    $script:RdtFailureShown = $false
    $script:RdtBuildOutput = 'quiet'
    try {
        $null = [Console]::CursorTop
        $script:RdtCanMoveCursor = $true
    } catch {
        $script:RdtCanMoveCursor = $false
    }
    $script:RdtBoxTop = '┌'
    $script:RdtBoxSide = '│'
    $script:RdtBoxBottom = '└'
    $script:RdtPromptActive = '◆'
    $script:RdtPromptDone = '◇'
    $script:RdtBoxPrefix = "${script:CDim}${script:RdtBoxSide}${script:CReset}  "
}

function Write-RdtLine([string] $Message = '') {
    if ($script:RdtUiMode) {
        Write-RdtRawLine "${script:RdtBoxPrefix}${Message}"
    } else {
        Write-RdtRawLine $Message
    }
}

function Write-RdtLog([string] $Message, [string] $Color) {
    Write-RdtLine "${Color}${Message}${script:CReset}"
}

function Write-RdtInfo([string] $Message) { Write-RdtLog $Message $script:CDim }
function Write-Success([string] $Message) { Write-RdtLog $Message $script:CGreen }
function Write-RdtWarning([string] $Message) { Write-RdtLog $Message $script:CYellow }
function Write-ErrorMessage([string] $Message) { Write-RdtLog $Message $script:CRed }

function Set-RdtBuildOutput {
    param([ValidateSet('quiet', 'verbose')][string] $Value)

    $script:RdtBuildOutput = $Value
}

function Show-RdtHeader([string] $Title) {
    $out = ''
    $start = @(64, 207, 144)
    $end = @(164, 92, 255)
    $steps = [Math]::Max($Title.Length - 1, 1)
    for ($i = 0; $i -lt $Title.Length; $i++) {
        $r = [int] ($start[0] + ($end[0] - $start[0]) * $i / $steps)
        $g = [int] ($start[1] + ($end[1] - $start[1]) * $i / $steps)
        $b = [int] ($start[2] + ($end[2] - $start[2]) * $i / $steps)
        if ($script:RdtUseColor) { $out += "${script:RdtEscape}[38;2;${r};${g};${b}m" }
        $out += $Title[$i]
    }
    Write-RdtRawLine "${script:CDim}${script:RdtBoxTop}${script:CReset}  ${out}${script:CReset}"
}

function Write-RdtBlank {
    Write-RdtLine
}

function Close-RdtUi {
    if ($script:RdtUiMode -and -not $script:RdtUiClosed) {
        Write-RdtRawLine "${script:CDim}${script:RdtBoxBottom}${script:CReset} "
        $script:RdtUiClosed = $true
    }
}

function Write-RdtFailureFooter([string] $Message) {
    if ($script:RdtFailureShown) { return }
    if ($script:RdtUiMode -and -not $script:RdtUiClosed) {
        Write-RdtRawLine "${script:CDim}${script:RdtBoxBottom}${script:CReset}  ${script:CRed}✘ ${Message}${script:CReset}"
        $script:RdtUiClosed = $true
    } else {
        Write-ErrorMessage $Message
    }
    $script:RdtFailureShown = $true
}

function Write-RdtPrompt([string] $Prompt, [string] $Hint = '') {
    Write-RdtRawLine "${script:CCyan}${script:RdtPromptActive}${script:CReset}  ${Prompt}${Hint}"
}

function Set-RdtCursorVisible([bool] $Visible) {
    if (-not $script:RdtCanMoveCursor) { return }
    try { [Console]::CursorVisible = $Visible } catch { }
}

function Get-RdtCursorTop {
    if (-not $script:RdtCanMoveCursor) { return 0 }
    try { return [Console]::CursorTop } catch { return 0 }
}

function Set-RdtCursorPosition([int] $Left, [int] $Top) {
    if (-not $script:RdtCanMoveCursor) { return }
    try { [Console]::SetCursorPosition($Left, $Top) } catch { }
}

function Move-RdtCursorUp([int] $Lines) {
    if ($script:RdtUiMode -and $script:RdtUseColor -and $Lines -gt 0) {
        Write-RdtRaw "${script:RdtEscape}[${Lines}A`r"
        return $true
    }
    return $false
}

function Complete-RdtPrompt([string] $Prompt, [int] $Row, [int] $LinesUp = 0) {
    if ($LinesUp -gt 0 -and (Move-RdtCursorUp -Lines $LinesUp)) {
        Write-RdtRaw "${script:CCyan}${script:RdtPromptDone}${script:CReset}  ${Prompt}${script:CClear}"
        Write-RdtRaw "${script:RdtEscape}[${LinesUp}B`r"
        return
    }
    Set-RdtCursorPosition 0 $Row
    Write-RdtRawLine "${script:CCyan}${script:RdtPromptDone}${script:CReset}  ${Prompt}${script:CClear}"
}

function Start-RdtInputFrame([string] $InitialText = '') {
    $inputRow = Get-RdtCursorTop
    if ($script:RdtUiMode -and $script:RdtUseColor) {
        Write-RdtRawLine ''
        Write-RdtFrameBottom
        $null = Move-RdtCursorUp -Lines 1
    }
    Write-RdtRaw "${script:RdtBoxPrefix}${script:CDim}${InitialText}"
    return $inputRow
}

function Write-RdtFrameBottom {
    Write-RdtRaw "${script:CDim}${script:RdtBoxBottom}${script:CReset} ${script:CClear}"
}

function Clear-RdtFrameTail([int] $Row, [int] $LineCount) {
    if ($script:RdtUiMode -and $script:RdtUseColor) {
        Write-RdtRaw "${script:RdtEscape}[J"
        return
    }
    if (-not $script:RdtCanMoveCursor) { return }
    Set-RdtCursorPosition 0 $Row
    for ($i = 0; $i -lt $LineCount; $i++) {
        Write-RdtRawLine $script:CClear
    }
    Set-RdtCursorPosition 0 $Row
}

function Read-RdtInput {
    param(
        [Parameter(Mandatory)]
        [string] $Prompt,
        [string] $DefaultValue
    )

    $promptRow = Get-RdtCursorTop
    Write-RdtPrompt $Prompt
    $suffix = if ([string]::IsNullOrWhiteSpace($DefaultValue)) { '' } else { " [$DefaultValue]" }
    if ($script:RdtUiMode) {
        $valueRow = Start-RdtInputFrame -InitialText $suffix
        $value = [Console]::ReadLine()
        Write-RdtRaw $script:CReset
    } else {
        $value = Read-Host "${script:RdtBoxPrefix}${script:CDim}${suffix}${script:CReset}"
        $valueRow = Get-RdtCursorTop
    }
    Complete-RdtPrompt $Prompt $promptRow -LinesUp $(if ($script:RdtUiMode -and $script:RdtUseColor) { 2 } else { 0 })
    if (-not (Move-RdtCursorUp -Lines 1)) {
        Set-RdtCursorPosition 0 $valueRow
    }
    Write-RdtLine "${script:CDim}$($value.Trim())${script:CReset}"
    if ($script:RdtUiMode) {
        Write-RdtBlank
    }
    if ([string]::IsNullOrWhiteSpace($value)) { return $DefaultValue }
    return $value
}

function Read-RdtSecret([string] $Prompt) {
    $promptRow = Get-RdtCursorTop
    Write-RdtPrompt $Prompt
    if ($script:RdtUiMode) {
        $secure = [Security.SecureString]::new()
        $valueRow = Start-RdtInputFrame
        :readSecret while ($true) {
            $key = [Console]::ReadKey($true)
            switch ($key.Key) {
                'Enter' {
                    Write-RdtRawLine
                    break readSecret
                }
                'Backspace' {
                    if ($secure.Length -gt 0) {
                        $secure.RemoveAt($secure.Length - 1)
                        Write-RdtRaw "`b `b"
                    }
                }
                default {
                    if (-not [char]::IsControl($key.KeyChar)) {
                        $secure.AppendChar($key.KeyChar)
                        Write-RdtRaw '*'
                    }
                }
            }
        }
        Complete-RdtPrompt $Prompt $promptRow -LinesUp 2
        if (-not (Move-RdtCursorUp -Lines 1)) {
            Set-RdtCursorPosition 0 $valueRow
        }
    } else {
        $secure = Read-Host "${script:RdtBoxPrefix}" -AsSecureString
    }
    Write-RdtLine "${script:CDim}********${script:CReset}"
    if ($script:RdtUiMode) {
        Write-RdtBlank
    }
    return [Net.NetworkCredential]::new('', $secure).Password
}

function Read-RdtKey {
    return [Console]::ReadKey($true)
}

function Select-RdtBinary {
    param(
        [Parameter(Mandatory)]
        [string] $Prompt,
        [Parameter(Mandatory)]
        [string] $LeftLabel,
        [Parameter(Mandatory)]
        [string] $RightLabel,
        [Parameter(Mandatory)]
        [string] $LeftValue,
        [Parameter(Mandatory)]
        [string] $RightValue,
        [int] $DefaultIndex = 0
    )

    $index = $DefaultIndex
    $promptRow = Get-RdtCursorTop
    Write-RdtPrompt $Prompt " ${script:CDim}(←/→ 切换, Enter 确认)${script:CReset}"
    $top = Get-RdtCursorTop
    $rendered = $false
    Set-RdtCursorVisible $false
    while ($true) {
        if ($rendered) {
            if (-not (Move-RdtCursorUp -Lines 1)) {
                Set-RdtCursorPosition 0 $top
            }
        }
        $left = if ($index -eq 0) { "${script:CGreen}● ${LeftLabel}${script:CReset}" } else { "${script:CDim}○ ${LeftLabel}${script:CReset}" }
        $right = if ($index -eq 1) { "${script:CGreen}● ${RightLabel}${script:CReset}" } else { "${script:CDim}○ ${RightLabel}${script:CReset}" }
        Write-RdtLine "${left}  ${right}${script:CClear}"
        Write-RdtFrameBottom
        $rendered = $true
        $key = Read-RdtKey
        switch ($key.Key) {
            'LeftArrow' { $index = 0 }
            'RightArrow' { $index = 1 }
            'H' { $index = 0 }
            'L' { $index = 1 }
            'Enter' {
                Set-RdtCursorVisible $true
                Complete-RdtPrompt $Prompt $promptRow -LinesUp 2
                if (-not (Move-RdtCursorUp -Lines 1)) {
                    Set-RdtCursorPosition 0 $top
                }
                $choice = if ($index -eq 0) { $LeftLabel } else { $RightLabel }
                Write-RdtLine "${script:CDim}${choice}${script:CReset}${script:CClear}"
                Write-RdtBlank
                return $(if ($index -eq 0) { $LeftValue } else { $RightValue })
            }
        }
    }
}

function Select-RdtSingle {
    param(
        [Parameter(Mandatory)]
        [string] $Prompt,
        [Parameter(Mandatory)]
        [hashtable[]] $Options,
        [int] $DefaultIndex = 0
    )

    $cursor = $DefaultIndex
    $promptRow = Get-RdtCursorTop
    Write-RdtPrompt $Prompt " ${script:CDim}(↑/↓ 切换，回车确认)${script:CReset}"
    $top = Get-RdtCursorTop
    $rendered = $false
    Set-RdtCursorVisible $false
    while ($true) {
        if ($rendered) {
            if (-not (Move-RdtCursorUp -Lines $Options.Count)) {
                Set-RdtCursorPosition 0 $top
            }
        }
        for ($i = 0; $i -lt $Options.Count; $i++) {
            $mark = if ($i -eq $cursor) { '●' } else { '○' }
            $color = if ($i -eq $cursor) { $script:CGreen } else { $script:CDim }
            Write-RdtLine "${color}${mark} $($Options[$i].Label)${script:CReset}${script:CClear}"
        }
        Write-RdtFrameBottom
        $rendered = $true
        $key = Read-RdtKey
        switch ($key.Key) {
            'UpArrow' { $cursor = ($cursor + $Options.Count - 1) % $Options.Count }
            'DownArrow' { $cursor = ($cursor + 1) % $Options.Count }
            'K' { $cursor = ($cursor + $Options.Count - 1) % $Options.Count }
            'J' { $cursor = ($cursor + 1) % $Options.Count }
            'Enter' {
                Set-RdtCursorVisible $true
                Complete-RdtPrompt $Prompt $promptRow -LinesUp ($Options.Count + 1)
                if (-not (Move-RdtCursorUp -Lines $Options.Count)) {
                    Set-RdtCursorPosition 0 $top
                }
                Write-RdtLine "${script:CDim}$($Options[$cursor].Label)${script:CReset}${script:CClear}"
                Clear-RdtFrameTail -Row ($top + 1) -LineCount $Options.Count
                return $Options[$cursor].Value
            }
        }
    }
}

function Select-RdtMultiple {
    param(
        [Parameter(Mandatory)]
        [string] $Prompt,
        [Parameter(Mandatory)]
        [hashtable[]] $Options
    )

    $cursor = 0
    $selected = [bool[]]::new($Options.Count)
    $promptRow = Get-RdtCursorTop
    Write-RdtPrompt $Prompt " ${script:CDim}(↑/↓ 切换，空格选择，a 全选，回车确认)${script:CReset}"
    $top = Get-RdtCursorTop
    $rendered = $false
    Set-RdtCursorVisible $false
    while ($true) {
        if ($rendered) {
            if (-not (Move-RdtCursorUp -Lines $Options.Count)) {
                Set-RdtCursorPosition 0 $top
            }
        }
        for ($i = 0; $i -lt $Options.Count; $i++) {
            $mark = if ($selected[$i]) { '■' } else { '□' }
            $markColor = if ($selected[$i]) { $script:CGreen } elseif ($i -eq $cursor) { $script:CCyan } else { $script:CDim }
            $labelColor = if ($i -eq $cursor) { '' } else { $script:CDim }
            Write-RdtLine "${markColor}${mark}${script:CReset} ${labelColor}$($Options[$i].Label)${script:CReset}${script:CClear}"
        }
        Write-RdtFrameBottom
        $rendered = $true
        $key = Read-RdtKey
        switch ($key.Key) {
            'UpArrow' { $cursor = ($cursor + $Options.Count - 1) % $Options.Count }
            'DownArrow' { $cursor = ($cursor + 1) % $Options.Count }
            'Spacebar' { $selected[$cursor] = -not $selected[$cursor] }
            'A' {
                $choose = $selected -contains $false
                for ($i = 0; $i -lt $selected.Count; $i++) { $selected[$i] = $choose }
            }
            'Enter' {
                $values = for ($i = 0; $i -lt $Options.Count; $i++) {
                    if ($selected[$i]) { $Options[$i].Value }
                }
                $display = if ($values.Count -eq 0) { 'none' } else { $values -join ', ' }
                Set-RdtCursorVisible $true
                Complete-RdtPrompt $Prompt $promptRow -LinesUp ($Options.Count + 1)
                if (-not (Move-RdtCursorUp -Lines $Options.Count)) {
                    Set-RdtCursorPosition 0 $top
                }
                Write-RdtLine "${script:CDim}${display}${script:CReset}${script:CClear}"
                Clear-RdtFrameTail -Row ($top + 1) -LineCount $Options.Count
                return @($values)
            }
        }
    }
}

function Invoke-RdtCommand {
    param(
        [Parameter(Mandatory)]
        [string] $Executable,
        [Parameter(ValueFromRemainingArguments)]
        [string[]] $Arguments
    )

    $previousErrorActionPreference = $ErrorActionPreference
    $hasNativeErrorPreference = Test-Path Variable:\PSNativeCommandUseErrorActionPreference
    if ($hasNativeErrorPreference) {
        $previousNativeErrorPreference = $PSNativeCommandUseErrorActionPreference
        $PSNativeCommandUseErrorActionPreference = $false
    }

    try {
        # Native tools commonly emit warnings on stderr while still succeeding.
        # Decide success from their exit code, matching the Bash implementation.
        $ErrorActionPreference = 'Continue'
        $output = & $Executable @Arguments 2>&1
        $exitCode = $LASTEXITCODE
    } finally {
        $ErrorActionPreference = $previousErrorActionPreference
        if ($hasNativeErrorPreference) {
            $PSNativeCommandUseErrorActionPreference = $previousNativeErrorPreference
        }
    }

    if ($script:RdtBuildOutput -eq 'verbose' -or $exitCode -ne 0) {
        $output | ForEach-Object {
            $line = if ($_ -is [Management.Automation.ErrorRecord]) { $_.Exception.Message } else { "$_" }
            Write-RdtLine "${script:CDim}${line}${script:CReset}"
        }
    }
    if ($exitCode -ne 0) {
        throw "'$Executable' 执行失败，退出码: $exitCode"
    }
}

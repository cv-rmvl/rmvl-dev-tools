function Initialize-RdtColor {
    $script:RdtUseColor = -not [Console]::IsOutputRedirected
    $script:RdtEscape = [char] 27
    if ($script:RdtUseColor) {
        $script:CReset = "${script:RdtEscape}[0m"
        $script:CBold = "${script:RdtEscape}[1m"
        $script:CItalic = "${script:RdtEscape}[3m"
        $script:CDim = "${script:RdtEscape}[90m"
        $script:CCyan = "${script:RdtEscape}[36m"
        $script:CGreen = "${script:RdtEscape}[32m"
        $script:CYellow = "${script:RdtEscape}[33m"
        $script:CRed = "${script:RdtEscape}[31m"
        $script:CClear = "${script:RdtEscape}[K"
    } else {
        $script:CReset = ''
        $script:CBold = ''
        $script:CItalic = ''
        $script:CDim = ''
        $script:CCyan = ''
        $script:CGreen = ''
        $script:CYellow = ''
        $script:CRed = ''
        $script:CClear = ''
    }
}

function Write-RdtRaw([string] $Value) {
    if ($script:RdtUiMode) {
        [Console]::Write($Value)
    } else {
        Write-Output -NoEnumerate $Value
    }
}

function Write-RdtRawLine([string] $Value = '') {
    if ($script:RdtUiMode) {
        [Console]::WriteLine($Value)
    } else {
        Write-Output -NoEnumerate $Value
    }
}

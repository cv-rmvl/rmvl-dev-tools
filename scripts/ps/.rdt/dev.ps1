[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-Usage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt dev${CReset} ${CDim}[help | code | nvim | dir]${CReset}"
    Write-Host ''
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}   ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}code${CReset}   ${CDim}在 Visual Studio Code 中打开本地 RMVL${CReset}"
    Write-Host "  ${CCyan}nvim${CReset}   ${CDim}在 Neovim 中打开本地 RMVL${CReset}"
    Write-Host "  ${CCyan}dir${CReset}    ${CDim}在文件资源管理器中打开本地 RMVL${CReset}"
}

if ($Arguments.Count -ne 1 -or $Arguments[0] -eq 'help') {
    Show-Usage
    if ($Arguments.Count -ne 1) { throw 'dev 需要一个命令。' }
    return
}
Assert-RmvlRoot
switch ($Arguments[0]) {
    'code' { Invoke-External 'code' $env:RMVL_ROOT_ }
    'nvim' { Invoke-External 'nvim' $env:RMVL_ROOT_ }
    'dir' { Start-Process explorer.exe -ArgumentList $env:RMVL_ROOT_ }
    default { Show-Usage; throw "未知 dev 命令: $($Arguments[0])" }
}

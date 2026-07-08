[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $Command,

    [Parameter(Position = 1, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-NodeUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}lpss node${CReset} ${CDim}[help | info | list]${CReset}"
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}   ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}info${CReset}   ${CDim}显示节点信息${CReset}"
    Write-Host "  ${CCyan}list${CReset}   ${CDim}列出所有节点，-c 仅显示数量${CReset}"
}

switch ($Command) {
    'help' { Show-NodeUsage }
    'list' { Invoke-LpssBinary -Name tool -Arguments (@('nl') + $Arguments) }
    'info' {
        if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0])) {
            Write-Host "${CBold}用法:${CReset} ${CCyan}lpss node info${CReset} ${CDim}<node_name>${CReset}"
            throw '缺少节点名称'
        }
        Invoke-LpssBinary -Name tool -Arguments @('ni', $Arguments[0])
    }
    default {
        Show-NodeUsage
        throw '请指定有效的 node 子命令'
    }
}

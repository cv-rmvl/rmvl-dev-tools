[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $Command,

    [Parameter(Position = 1, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-ServiceUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}lpss service${CReset} ${CDim}[help | info | list | type | find | call]${CReset}"
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}   ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}info${CReset}   ${CDim}显示服务信息${CReset}"
    Write-Host "  ${CCyan}list${CReset}   ${CDim}列出所有服务，-c 仅显示数量${CReset}"
    Write-Host "  ${CCyan}type${CReset}   ${CDim}显示服务类型${CReset}"
    Write-Host "  ${CCyan}find${CReset}   ${CDim}按服务类型查找服务，-c 仅显示数量${CReset}"
    Write-Host "  ${CCyan}call${CReset}   ${CDim}使用 JSON 请求调用内置服务${CReset}"
}

function Invoke-ServiceWithName {
    param([string] $NativeCommand, [string] $Label, [string] $ArgumentName = 'service_name', [string] $ArgumentDescription = '服务名称')

    if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0])) {
        Write-Host "${CBold}用法:${CReset} ${CCyan}lpss service $Label${CReset} ${CDim}<$ArgumentName>${CReset}"
        Write-Host "  ${CCyan}$ArgumentName${CReset}   ${CDim}$ArgumentDescription${CReset}"
        throw "缺少$ArgumentDescription"
    }
    Invoke-LpssBinary -Name tool -Arguments (@($NativeCommand) + $Arguments)
}

switch ($Command) {
    'help' { Show-ServiceUsage }
    'list' { Invoke-LpssBinary -Name tool -Arguments (@('sl') + $Arguments) }
    'info' { Invoke-ServiceWithName -NativeCommand 'si' -Label 'info' }
    'type' { Invoke-ServiceWithName -NativeCommand 'st' -Label 'type' }
    'find' { Invoke-ServiceWithName -NativeCommand 'sf' -Label 'find' -ArgumentName 'service_type' -ArgumentDescription '服务类型' }
    'call' {
        if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0])) {
            Write-Host "${CBold}用法:${CReset} ${CCyan}lpss service call${CReset} ${CDim}<service_name> [json_request]${CReset}"
            Write-Host "  ${CCyan}service_name${CReset}   ${CDim}服务名称${CReset}"
            throw '缺少服务名称'
        }
        Invoke-LpssBinary -Name tool -Arguments (@('sc') + $Arguments)
    }
    default {
        Show-ServiceUsage
        throw '请指定有效的 service 子命令'
    }
}

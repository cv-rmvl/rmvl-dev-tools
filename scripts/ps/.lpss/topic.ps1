[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $Command,

    [Parameter(Position = 1, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-TopicUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}lpss topic${CReset} ${CDim}[help | info | list | find | echo | pub | type | hz | bw]${CReset}"
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}   ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}info${CReset}   ${CDim}显示话题信息${CReset}"
    Write-Host "  ${CCyan}list${CReset}   ${CDim}列出所有话题，-c 仅显示数量${CReset}"
    Write-Host "  ${CCyan}find${CReset}   ${CDim}按消息类型查找话题，-c 仅显示数量${CReset}"
    Write-Host "  ${CCyan}echo${CReset}   ${CDim}显示话题内容${CReset}"
    Write-Host "  ${CCyan}pub${CReset}    ${CDim}发布话题${CReset}"
    Write-Host "  ${CCyan}type${CReset}   ${CDim}显示话题类型${CReset}"
    Write-Host "  ${CCyan}hz${CReset}     ${CDim}测量话题发布频率，单位为 Hz${CReset}"
    Write-Host "  ${CCyan}bw${CReset}     ${CDim}测量话题带宽，单位为 MB/s、kB/s 或 B/s${CReset}"
}

function Invoke-TopicWithName {
    param([string] $NativeCommand, [string] $Label)

    if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0])) {
        Write-Host "${CBold}用法:${CReset} ${CCyan}lpss topic $Label${CReset} ${CDim}<topic_name>${CReset}"
        Write-Host "  ${CCyan}topic_name${CReset}   ${CDim}话题名称${CReset}"
        throw '缺少话题名称'
    }
    Invoke-LpssBinary -Name tool -Arguments @($NativeCommand, $Arguments[0])
}

switch ($Command) {
    'help' { Show-TopicUsage }
    'list' { Invoke-LpssBinary -Name tool -Arguments (@('tl') + $Arguments) }
    'info' { Invoke-TopicWithName -NativeCommand 'ti' -Label 'info' }
    'find' {
        if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0])) {
            Write-Host "${CBold}用法:${CReset} ${CCyan}lpss topic find${CReset} ${CDim}<msg_type> [-c]${CReset}"
            Write-Host "  ${CCyan}msg_type${CReset}   ${CDim}消息类型${CReset}"
            throw '缺少消息类型'
        }
        Invoke-LpssBinary -Name tool -Arguments (@('tf') + $Arguments)
    }
    'echo' { Invoke-TopicWithName -NativeCommand 'te' -Label 'echo' }
    'type' { Invoke-TopicWithName -NativeCommand 'tt' -Label 'type' }
    'hz' { Invoke-TopicWithName -NativeCommand 'thz' -Label 'hz' }
    'bw' { Invoke-TopicWithName -NativeCommand 'tbw' -Label 'bw' }
    'pub' { Write-Host '' }
    default {
        Show-TopicUsage
        throw '请指定有效的 topic 子命令'
    }
}

[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string] $Command,

    [Parameter(Position = 1, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-InterfaceUsage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}lpss interface${CReset} ${CDim}[help | list | group | groups | show]${CReset}"
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}     ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}list${CReset}     ${CDim}列出所有的内置消息接口${CReset}"
    Write-Host "  ${CCyan}group${CReset}    ${CDim}显示指定的消息分组包含的接口${CReset}"
    Write-Host "  ${CCyan}groups${CReset}   ${CDim}列出所有消息分组${CReset}"
    Write-Host "  ${CCyan}show${CReset}     ${CDim}显示接口详细信息${CReset}"
}

if ([string]::IsNullOrWhiteSpace($Command) -or $Command -eq 'help') {
    Show-InterfaceUsage
    if ([string]::IsNullOrWhiteSpace($Command)) { throw '请指定有效的 interface 子命令' }
    return
}

if ($Command -notin @('list', 'group', 'groups', 'show')) {
    Show-InterfaceUsage
    throw '请指定有效的 interface 子命令'
}

Assert-LpssRmvlRoot
$messageDirectory = Join-Path $env:RMVL_ROOT_ 'modules/lpss/msg'
if (-not (Test-Path -LiteralPath $messageDirectory -PathType Container)) {
    throw "消息接口目录不存在: $messageDirectory"
}
$builtinTypes = @('bool', 'int8', 'uint8', 'int16', 'uint16', 'int32', 'uint32', 'int64', 'uint64', 'float32', 'float64', 'string', 'time')

function Get-MessageGroups {
    return @(Get-ChildItem -LiteralPath $messageDirectory -Directory | Sort-Object Name)
}

function Resolve-MessageFile {
    param([string] $TypeName, [string] $CurrentGroup)

    if ($TypeName.Contains('/')) {
        $parts = $TypeName -split '/', 2
        $path = Join-Path (Join-Path $messageDirectory $parts[0]) "$($parts[1]).msg"
        if (Test-Path -LiteralPath $path -PathType Leaf) { return Get-Item -LiteralPath $path }
        return $null
    }

    $localPath = Join-Path (Join-Path $messageDirectory $CurrentGroup) "$TypeName.msg"
    if (Test-Path -LiteralPath $localPath -PathType Leaf) { return Get-Item -LiteralPath $localPath }

    foreach ($group in Get-MessageGroups) {
        $path = Join-Path $group.FullName "$TypeName.msg"
        if (Test-Path -LiteralPath $path -PathType Leaf) { return Get-Item -LiteralPath $path }
    }
    return $null
}

function Show-MessageRecursive {
    param(
        [Parameter(Mandatory)]
        [IO.FileInfo] $File,
        [string] $Indent = '',
        [Parameter(Mandatory)]
        [string] $CurrentGroup,
        [int] $Depth = 0
    )

    if ($Depth -gt 10) { return }
    foreach ($line in Get-Content -LiteralPath $File.FullName) {
        $trimmed = $line.Trim()
        if ([string]::IsNullOrWhiteSpace($trimmed) -or $trimmed.StartsWith('#') -or $trimmed.Contains('=')) {
            continue
        }
        Write-Output "$Indent$line"
        $typeName = ($trimmed -split '\s+')[0] -replace '\[\]$', ''
        if ($typeName -in $builtinTypes) { continue }
        $nested = Resolve-MessageFile -TypeName $typeName -CurrentGroup $CurrentGroup
        if ($null -ne $nested) {
            Show-MessageRecursive -File $nested -Indent "$Indent    " -CurrentGroup $nested.Directory.Name -Depth ($Depth + 1)
        }
    }
}

switch ($Command) {
    'groups' { Get-MessageGroups | ForEach-Object { Write-Output $_.Name } }
    'list' {
        foreach ($group in Get-MessageGroups) {
            Get-ChildItem -LiteralPath $group.FullName -Filter '*.msg' -File |
                Sort-Object Name |
                ForEach-Object { Write-Output "$($group.Name)/$($_.BaseName)" }
        }
    }
    'group' {
        if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0])) {
            Write-Host "${CBold}用法:${CReset} ${CCyan}lpss interface group${CReset} ${CDim}<name>${CReset}"
            Write-Host "  ${CCyan}name${CReset}   ${CDim}消息分组名称${CReset}"
            throw '缺少消息分组名称'
        }
        $groupDirectory = Join-Path $messageDirectory $Arguments[0]
        if (-not (Test-Path -LiteralPath $groupDirectory -PathType Container)) {
            throw "消息分组不存在: $($Arguments[0])"
        }
        Get-ChildItem -LiteralPath $groupDirectory -Filter '*.msg' -File |
            Sort-Object Name |
            ForEach-Object { Write-Output $_.BaseName }
    }
    'show' {
        if ($null -eq $Arguments -or [string]::IsNullOrWhiteSpace($Arguments[0]) -or -not $Arguments[0].Contains('/')) {
            Write-Host "${CBold}用法:${CReset} ${CCyan}lpss interface show${CReset} ${CDim}<interface>${CReset}"
            Write-Host "  ${CCyan}interface${CReset}   ${CDim}消息接口名称，格式为 <group>/<interface>${CReset}"
            throw '缺少有效的消息接口名称'
        }
        $parts = $Arguments[0] -split '/', 2
        $path = Join-Path (Join-Path $messageDirectory $parts[0]) "$($parts[1]).msg"
        if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
            throw "接口 $($Arguments[0]) 不存在"
        }
        Show-MessageRecursive -File (Get-Item -LiteralPath $path) -CurrentGroup $parts[0]
    }
}

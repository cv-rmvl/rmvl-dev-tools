[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-Usage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt update${CReset} ${CDim}[help | tool | code | lib | all]${CReset}"
    Write-Host ''
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}   ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}tool${CReset}   ${CDim}更新 rdt 工具到最新版本，并重新运行 Windows 安装${CReset}"
    Write-Host "  ${CCyan}code${CReset}   ${CDim}更新 RMVL 仓库至 origin/2.x（将 stash 本地更改）${CReset}"
    Write-Host "  ${CCyan}lib${CReset}    ${CDim}编译安装 RMVL；参数为 release 或 debug${CReset}"
    Write-Host "  ${CCyan}all${CReset}    ${CDim}依次执行 code 与 release lib${CReset}"
}

function Update-Code {
    Assert-RmvlRoot
    Push-Location $env:RMVL_ROOT_
    try {
        Invoke-External git stash push -m 'rmvl-dev-tools auto stash'
        Invoke-External git fetch origin
        Invoke-External git checkout '2.x'
        Invoke-External git reset --hard 'origin/2.x'
        Write-Success '更新代码完成'
    } finally {
        Pop-Location
    }
}

function Update-Library([string] $Mode) {
    Assert-RmvlRoot
    if ($Mode -notin @('release', 'debug')) {
        throw '请指定构建模式: release 或 debug。'
    }
    $buildType = (Get-Culture).TextInfo.ToTitleCase($Mode)
    $buildPath = Join-Path ([IO.Path]::GetTempPath()) "rdt-rmvl-build-$Mode"
    $installPrefix = if ($env:RDT_RMVL_PREFIX) { $env:RDT_RMVL_PREFIX } else { Join-Path $env:LOCALAPPDATA 'RMVL' }
    $configureArguments = @('-S', $env:RMVL_ROOT_, '-B', $buildPath, '-DBUILD_EXTRA=ON', "-DCMAKE_INSTALL_PREFIX=$installPrefix")
    $buildArguments = @('--build', $buildPath, '--config', $buildType, '--parallel')
    $installArguments = @('--install', $buildPath, '--config', $buildType)
    Invoke-External cmake @configureArguments
    Invoke-External cmake @buildArguments
    Invoke-External cmake @installArguments
    Write-Success 'RMVL 完成部署'
}

if ($Arguments.Count -eq 0 -or $Arguments[0] -eq 'help') {
    Show-Usage
    if ($Arguments.Count -eq 0) { throw 'update 需要一个命令。' }
    return
}
switch ($Arguments[0]) {
    'code' { Update-Code }
    'lib' { Update-Library ($Arguments | Select-Object -Skip 1 -First 1) }
    'all' { Update-Code; Update-Library 'release' }
    'tool' {
        Assert-RmvlRoot
        Push-Location $ToolsRoot
        try {
            Invoke-External git checkout master
            Invoke-External git pull origin master
            & (Join-Path $ToolsRoot 'setup/ps/install.ps1') -RootPath $env:RMVL_ROOT_ -InstallPrefix $env:RDT_RMVL_PREFIX
        } finally {
            Pop-Location
        }
    }
    'doc' { throw 'rdt update doc 目前仅支持 Bash/Linux 环境。' }
    default { Show-Usage; throw "未知 update 命令: $($Arguments[0])" }
}

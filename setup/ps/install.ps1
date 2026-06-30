[CmdletBinding()]
param(
    [Parameter()]
    [string] $RootPath,

    [Parameter()]
    [switch] $Clone,

    [Parameter()]
    [switch] $SkipBuild,

    [Parameter()]
    [string] $InstallPrefix = (Join-Path $env:LOCALAPPDATA 'RMVL'),

    [Parameter()]
    [ValidateSet('auto', 'local')]
    [string] $Acquisition,

    [Parameter()]
    [ValidateSet('quiet', 'verbose')]
    [string] $BuildOutput = 'quiet',

    [Parameter()]
    [string[]] $OptionalDeps = @()
)

$ErrorActionPreference = 'Stop'
$ToolsRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$ScriptsPath = Join-Path $ToolsRoot 'scripts/ps'
$HeaderTitle = 'RDT - the Installation Wizard for RMVL Development Tools'
$TempDirs = [Collections.Generic.List[string]]::new()
$interactive = -not (
    $PSBoundParameters.ContainsKey('RootPath') -or
    $PSBoundParameters.ContainsKey('Clone') -or
    $PSBoundParameters.ContainsKey('Acquisition')
)
$configurationModified = $false
$oldUserPath = [Environment]::GetEnvironmentVariable('Path', 'User')
$oldRootPath = [Environment]::GetEnvironmentVariable('RMVL_ROOT_', 'User')
$oldInstallPrefix = [Environment]::GetEnvironmentVariable('RDT_RMVL_PREFIX', 'User')
$profileModified = $false

. (Join-Path $PSScriptRoot 'rdtui.ps1')
. (Join-Path $PSScriptRoot 'profile.ps1')
Initialize-RdtUi -Interactive:$interactive
$profilePath = Get-RdtProfilePath
$oldProfileExists = Test-Path -LiteralPath $profilePath -PathType Leaf
$oldProfileContent = if ($oldProfileExists) { Get-Content -LiteralPath $profilePath -Raw } else { '' }

function Find-RmvlConfigDirectory {
    param(
        [Parameter(Mandatory)]
        [string] $BuildDirectory,
        [Parameter(Mandatory)]
        [string] $Prefix
    )

    $manifestPath = Join-Path $BuildDirectory 'install_manifest.txt'
    if (Test-Path -LiteralPath $manifestPath -PathType Leaf) {
        $configPath = Get-Content -LiteralPath $manifestPath |
            Where-Object { [IO.Path]::GetFileName($_) -eq 'RMVLConfig.cmake' } |
            Select-Object -First 1
        if ($configPath -and (Test-Path -LiteralPath $configPath -PathType Leaf)) {
            return Split-Path -Parent $configPath
        }
    }

    $configFile = Get-ChildItem -LiteralPath $Prefix -Filter 'RMVLConfig.cmake' -File -Recurse -ErrorAction SilentlyContinue |
        Sort-Object LastWriteTime -Descending |
        Select-Object -First 1
    if ($configFile) {
        return $configFile.DirectoryName
    }

    throw "安装目录中未找到 RMVLConfig.cmake: $Prefix"
}

function Get-RmvlCxxStandard {
    param(
        [Parameter(Mandatory)]
        [string] $BuildDirectory
    )

    $versionFile = Get-ChildItem -LiteralPath $BuildDirectory -Filter 'version_string.inc' -File -Recurse -ErrorAction SilentlyContinue |
        Select-Object -First 1
    if (-not $versionFile) {
        throw "无法从 RMVL 构建目录读取 C++ 标准: 未找到 version_string.inc"
    }

    $standardLine = Select-String -LiteralPath $versionFile.FullName -Pattern 'C\+\+\s+standard:\s*(\d+)' |
        Select-Object -First 1
    if (-not $standardLine) {
        throw "无法从 RMVL 构建信息中解析 C++ 标准: $($versionFile.FullName)"
    }

    return $standardLine.Matches[0].Groups[1].Value
}

try {
    if ($interactive) {
        Show-RdtHeader $HeaderTitle
        Write-RdtBlank
        Write-RdtInfo 'Windows 将安装到用户目录，不需要管理员密码。'
        Write-RdtBlank

        $Acquisition = Select-RdtBinary -Prompt 'rmvl 获取方式' `
            -LeftLabel '自动下载' -RightLabel '本地路径' `
            -LeftValue 'auto' -RightValue 'local'

        if ($Acquisition -eq 'local') {
            while ([string]::IsNullOrWhiteSpace($RootPath)) {
                $RootPath = Read-RdtInput -Prompt '请输入 rmvl 的路径' -DefaultValue $env:RMVL_ROOT_
                if ([string]::IsNullOrWhiteSpace($RootPath)) {
                    Write-ErrorMessage 'rmvl 路径不能为空'
                }
            }
        } else {
            $RootPath = Join-Path (Split-Path -Parent $ToolsRoot) 'rmvl'
            $OptionalDeps = Select-RdtMultiple -Prompt '请选择可选的依赖项' -Options @(
                @{ Label = 'Eigen 3'; Value = 'eigen3' },
                @{ Label = 'open62541'; Value = 'open62541' }
            )
        }

        Write-RdtBlank
        $BuildOutput = Select-RdtBinary -Prompt '构建信息显示' `
            -LeftLabel '简洁' -RightLabel '详细' `
            -LeftValue 'quiet' -RightValue 'verbose'
    } else {
        if ($Clone) { $Acquisition = 'auto' }
        if ([string]::IsNullOrWhiteSpace($Acquisition)) { $Acquisition = 'local' }
        if ($Acquisition -eq 'auto' -and [string]::IsNullOrWhiteSpace($RootPath)) {
            $RootPath = Join-Path (Split-Path -Parent $ToolsRoot) 'rmvl'
        }
    }

    $script:RdtBuildOutput = $BuildOutput
    if ([string]::IsNullOrWhiteSpace($RootPath)) {
        throw 'rmvl 路径为空，无法继续安装'
    }
    if ([string]::IsNullOrWhiteSpace($InstallPrefix)) {
        $InstallPrefix = Join-Path $env:LOCALAPPDATA 'RMVL'
    }
    $RootPath = [IO.Path]::GetFullPath($RootPath)

    if ($Acquisition -eq 'auto') {
        if (Test-Path -LiteralPath $RootPath -PathType Container) {
            Write-RdtWarning '检测到 rmvl 已存在，跳过克隆'
        } else {
            Write-RdtInfo "正在克隆 rmvl 项目到 $RootPath..."
            $cloneArguments = @('clone', 'https://github.com/cv-rmvl/rmvl.git', $RootPath)
            try {
                Invoke-RdtCommand git @cloneArguments
            } catch {
                Write-RdtWarning 'GitHub 克隆失败，正在切换至 GitCode 源...'
                if (Test-Path -LiteralPath $RootPath -PathType Container) {
                    Remove-Item -LiteralPath $RootPath -Recurse -Force
                }
                $cloneArguments = @('clone', 'https://gitcode.com/m0_51586788/rmvl.git', $RootPath)
                Invoke-RdtCommand git @cloneArguments
            }
        }
    } elseif (-not (Test-Path -LiteralPath $RootPath -PathType Container)) {
        throw "rmvl 路径不存在: $RootPath"
    }

    $userPathItems = @($oldUserPath -split ';' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
    if ($userPathItems -notcontains $ScriptsPath) {
        [Environment]::SetEnvironmentVariable('Path', (($userPathItems + $ScriptsPath) -join ';'), 'User')
    }
    [Environment]::SetEnvironmentVariable('RMVL_ROOT_', $RootPath, 'User')
    [Environment]::SetEnvironmentVariable('RDT_RMVL_PREFIX', $InstallPrefix, 'User')
    $configurationModified = $true

    $extraArguments = @()
    if ($OptionalDeps -contains 'eigen3') {
        $extraArguments += '-DBUILD_EIGEN3=ON'
    }
    if ($OptionalDeps -contains 'open62541') {
        $extraArguments += '-DBUILD_OPEN62541=ON'
    }

    if (-not $SkipBuild) {
        $rmvlBuild = Join-Path ([IO.Path]::GetTempPath()) 'rdt-rmvl-build-release'
        $TempDirs.Add($rmvlBuild)
        Write-RdtInfo '正在自动构建 rmvl...'
        $configureArguments = @(
            '-S', $RootPath, '-B', $rmvlBuild,
            '-DBUILD_EXTRA=ON',
            "-DCMAKE_INSTALL_PREFIX=$InstallPrefix"
        ) + $extraArguments
        Invoke-RdtCommand cmake @configureArguments
        $buildArguments = @('--build', $rmvlBuild, '--config', 'Release', '--parallel')
        $installArguments = @('--install', $rmvlBuild, '--config', 'Release')
        Invoke-RdtCommand cmake @buildArguments
        Invoke-RdtCommand cmake @installArguments
        Write-Success 'rmvl 构建完成'
        $rmvlConfigDirectory = Find-RmvlConfigDirectory -BuildDirectory $rmvlBuild -Prefix $InstallPrefix
        $rmvlCxxStandard = Get-RmvlCxxStandard -BuildDirectory $rmvlBuild
        Write-RdtInfo "检测到 RMVL C++ 标准: C++$rmvlCxxStandard"

        $rdtBuild = Join-Path $ToolsRoot 'build_tmp_windows'
        $TempDirs.Add($rdtBuild)
        Write-RdtInfo '正在构建 rdt...'
        $rdtConfigureArguments = @(
            '-S', (Join-Path $ToolsRoot 'src'), '-B', $rdtBuild,
            "-DRMVL_DIR=$rmvlConfigDirectory",
            "-DCMAKE_CXX_STANDARD=$rmvlCxxStandard"
        )
        $rdtBuildArguments = @('--build', $rdtBuild, '--config', 'Release', '--parallel')
        Invoke-RdtCommand cmake @rdtConfigureArguments
        Invoke-RdtCommand cmake @rdtBuildArguments
        Write-Success 'rdt 构建完成'

        $lpssCommandDirectory = Join-Path $ScriptsPath '.lpss'
        New-Item -ItemType Directory -Path $lpssCommandDirectory -Force | Out-Null
        Copy-Item -LiteralPath (Join-Path $rdtBuild 'Release/lpss_tool.exe') `
            -Destination (Join-Path $lpssCommandDirectory '_autogen_lpss_tool.exe') -Force
        Copy-Item -LiteralPath (Join-Path $rdtBuild 'Release/lpss_viz.exe') `
            -Destination (Join-Path $lpssCommandDirectory '_autogen_lpss_viz.exe') -Force
        Write-Success 'lpss 与 lviz 工具安装完成'
    }

    Enable-RdtProfileSetup -SetupScriptPath (Join-Path $PSScriptRoot 'setup.ps1') -ProfilePath $profilePath
    $profileModified = $true
    Write-Success 'PowerShell 自动补全已加入用户 PROFILE'
    Write-Success '✔ 安装完成，重启终端后生效'
    Close-RdtUi
} catch {
    if ($configurationModified) {
        [Environment]::SetEnvironmentVariable('Path', $oldUserPath, 'User')
        [Environment]::SetEnvironmentVariable('RMVL_ROOT_', $oldRootPath, 'User')
        [Environment]::SetEnvironmentVariable('RDT_RMVL_PREFIX', $oldInstallPrefix, 'User')
    }
    if ($profileModified) {
        if ($oldProfileExists) {
            Set-Content -LiteralPath $profilePath -Value $oldProfileContent -Encoding UTF8 -NoNewline
        } elseif (Test-Path -LiteralPath $profilePath -PathType Leaf) {
            Remove-Item -LiteralPath $profilePath -Force -ErrorAction SilentlyContinue
        }
    }
    Write-RdtFailureFooter $_.Exception.Message
    exit 1
} finally {
    foreach ($directory in $TempDirs) {
        if (Test-Path -LiteralPath $directory -PathType Container) {
            Remove-Item -LiteralPath $directory -Recurse -Force -ErrorAction SilentlyContinue
        }
    }
    Close-RdtUi
}

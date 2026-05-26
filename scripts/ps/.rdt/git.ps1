[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
)

function Show-Usage {
    Write-Host "${CBold}用法:${CReset} ${CCyan}rdt git${CReset} ${CDim}[help | commit | squash | reword | newbr]${CReset}"
    Write-Host ''
    Write-Host "${CBold}命令:${CReset}"
    Write-Host "  ${CCyan}help${CReset}     ${CDim}显示此帮助信息${CReset}"
    Write-Host "  ${CCyan}commit${CReset}   ${CDim}执行 '${CItalic}git add . && git commit${CReset}${CDim}' 提交本地的更改${CReset}"
    Write-Host "  ${CCyan}squash${CReset}   ${CDim}创建临时提交并压缩至上一个提交${CReset}"
    Write-Host "  ${CCyan}reword${CReset}   ${CDim}修改上一个提交的消息（不修改提交内容）${CReset}"
    Write-Host "  ${CCyan}newbr${CReset}    ${CDim}创建新分支并应用提交${CReset}"
}

function Test-GitCommand {
    param([string[]] $GitArguments)

    $previousErrorActionPreference = $ErrorActionPreference
    $hasNativeErrorPreference = Test-Path Variable:\PSNativeCommandUseErrorActionPreference
    if ($hasNativeErrorPreference) {
        $previousNativeErrorPreference = $PSNativeCommandUseErrorActionPreference
        $PSNativeCommandUseErrorActionPreference = $false
    }
    try {
        $ErrorActionPreference = 'Continue'
        & git @GitArguments *> $null
        $exitCode = $LASTEXITCODE
    } finally {
        $ErrorActionPreference = $previousErrorActionPreference
        if ($hasNativeErrorPreference) {
            $PSNativeCommandUseErrorActionPreference = $previousNativeErrorPreference
        }
    }
    return ($exitCode -eq 0)
}

function Assert-GitRepository {
    if (-not (Test-GitCommand -GitArguments @('rev-parse', '--is-inside-work-tree'))) {
        throw '当前目录不在 Git 仓库中'
    }
}

function Assert-GitHead {
    param([string] $Message = '当前仓库还没有 commit，无法执行此操作')

    if (-not (Test-GitCommand -GitArguments @('rev-parse', '--verify', 'HEAD'))) {
        throw $Message
    }
}

function Test-GitChanges {
    param([string] $Message = '没有可提交的本地更改')

    $changes = & git status --short 2>$null
    if ([string]::IsNullOrWhiteSpace(($changes -join ''))) {
        Write-RdtWarning $Message
        return $false
    }
    return $true
}

function Write-DimOutput {
    param([string[]] $Lines)

    foreach ($line in $Lines) {
        Write-RdtLine "${CDim}$line${CReset}"
    }
}

function Read-CommitMessage {
    param([string] $ConfirmationPrompt, [string] $ConfirmLabel = '确认')

    $type = Select-RdtSingle -Prompt '请选择更改类型' -Options @(
        @{ Label = 'feat:     新功能'; Value = 'feat' },
        @{ Label = 'fix:      修复 Bug'; Value = 'fix' },
        @{ Label = 'docs:     文档更新'; Value = 'docs' },
        @{ Label = 'refactor: 代码重构'; Value = 'refactor' },
        @{ Label = 'ci:       CI/CD 配置'; Value = 'ci' },
        @{ Label = 'chore:    其他更改'; Value = 'chore' }
    )
    $scope = Read-RdtInput -Prompt '请输入影响范围 scope（可选）'
    do {
        $subject = Read-RdtInput -Prompt '请输入提交摘要'
        if ([string]::IsNullOrWhiteSpace($subject)) {
            Write-ErrorMessage '提交摘要不能为空'
        }
    } while ([string]::IsNullOrWhiteSpace($subject))

    $body = [Collections.Generic.List[string]]::new()
    while ($true) {
        $item = Read-RdtInput -Prompt "请输入第 $($body.Count + 1) 条详细说明（可选）"
        if ([string]::IsNullOrWhiteSpace($item)) { break }
        $body.Add("$($body.Count + 1). $item")
    }
    $title = if ([string]::IsNullOrWhiteSpace($scope)) { "${type}: $subject" } else { "${type}(${scope}): $subject" }

    Write-RdtBlank
    Write-RdtInfo '提交消息:'
    Write-DimOutput @($title)
    if ($body.Count -gt 0) {
        Write-RdtBlank
        Write-DimOutput $body.ToArray()
    }
    $confirmed = Select-RdtBinary -Prompt $ConfirmationPrompt -LeftLabel $ConfirmLabel -RightLabel '取消' -LeftValue 'yes' -RightValue 'no'
    if ($confirmed -ne 'yes') {
        throw '操作取消'
    }
    return @{ Title = $title; Body = ($body -join "`n") }
}

function Invoke-GitCommit {
    param([hashtable] $Message, [switch] $AmendOnly)

    if (-not $AmendOnly) {
        Invoke-External git add .
        if (Test-GitCommand -GitArguments @('diff', '--cached', '--quiet')) {
            throw 'git add 后没有可提交的更改'
        }
    }
    $gitArguments = if ($AmendOnly) {
        @('commit', '--amend', '--only', '-m', $Message.Title)
    } else {
        @('commit', '-m', $Message.Title)
    }
    if (-not [string]::IsNullOrWhiteSpace($Message.Body)) {
        $gitArguments += @('-m', $Message.Body)
    }
    Invoke-External git @gitArguments
}

function Invoke-CommitWorkflow {
    Assert-GitRepository
    if (-not (Test-GitChanges)) { return }

    Initialize-RdtUi -Interactive
    Show-RdtHeader "将自动执行 'git add . && git commit' 来提交本地更改"
    Write-RdtBlank
    $message = Read-CommitMessage -ConfirmationPrompt '确认提交？' -ConfirmLabel '提交'
    Write-RdtBlank
    Set-RdtBuildOutput -Value 'verbose'
    Invoke-GitCommit -Message $message
    Write-Success '提交完成'
}

function Invoke-SquashWorkflow {
    Assert-GitRepository
    Assert-GitHead -Message '当前仓库还没有 commit，无法 squash 到上一个 commit'
    if (-not (Test-GitChanges -Message '没有可合并到上一个 commit 的本地更改')) { return }
    $lastCommit = (& git log -1 --pretty=%s 2>$null) -join ''
    $temporaryMessage = 'rdt squash temporary commit'

    Initialize-RdtUi -Interactive
    Show-RdtHeader '将自动创建临时提交并压缩至上一次提交，同时保留上一次提交的消息'
    Write-RdtBlank
    Write-RdtInfo '上一个 commit:'
    Write-DimOutput @($lastCommit)
    Write-RdtBlank
    Write-RdtInfo '将执行:'
    Write-DimOutput @('  git add .', "  git commit -m `"$temporaryMessage`"", '  git reset --soft HEAD~1', '  git commit --amend --no-edit')
    $confirmed = Select-RdtBinary -Prompt '确认压缩？' -LeftLabel '执行' -RightLabel '取消' -LeftValue 'yes' -RightValue 'no'
    if ($confirmed -ne 'yes') { throw '操作取消' }

    Write-RdtBlank
    Set-RdtBuildOutput -Value 'verbose'
    Invoke-External git add .
    if (Test-GitCommand -GitArguments @('diff', '--cached', '--quiet')) {
        throw 'git add 后没有可提交的更改'
    }
    Invoke-External git commit -m $temporaryMessage
    Invoke-External git reset --soft 'HEAD~1'
    Invoke-External git commit --amend --no-edit
    Write-Success '已压缩到上一个提交'
}

function Invoke-RewordWorkflow {
    Assert-GitRepository
    Assert-GitHead
    $lastCommit = (& git log -1 --pretty=%s 2>$null) -join ''

    Initialize-RdtUi -Interactive
    Show-RdtHeader '将修改上一个 commit 的消息，不修改提交内容'
    Write-RdtBlank
    Write-RdtInfo '当前 commit 消息:'
    Write-DimOutput @($lastCommit)
    Write-RdtBlank
    $message = Read-CommitMessage -ConfirmationPrompt '确认修改 commit 消息？' -ConfirmLabel '修改'
    Write-RdtBlank
    Set-RdtBuildOutput -Value 'verbose'
    Invoke-GitCommit -Message $message -AmendOnly
    Write-Success 'commit 消息已修改'
}

function Invoke-NewBranchWorkflow {
    Assert-GitRepository
    if (-not (Test-GitChanges)) { return }

    Initialize-RdtUi -Interactive
    Show-RdtHeader '创建新分支并提交本地更改'
    Write-RdtBlank
    while ($true) {
        $branchName = Read-RdtInput -Prompt '请输入新分支的名称'
        if ([string]::IsNullOrWhiteSpace($branchName)) {
            Write-ErrorMessage '分支名称不能为空'
            continue
        }
        if (-not (Test-GitCommand -GitArguments @('check-ref-format', '--branch', $branchName))) {
            Write-ErrorMessage '分支名称不合法'
            continue
        }
        if (Test-GitCommand -GitArguments @('show-ref', '--verify', '--quiet', "refs/heads/$branchName")) {
            Write-ErrorMessage "本地分支已存在: $branchName"
            continue
        }
        break
    }
    $message = Read-CommitMessage -ConfirmationPrompt '确认使用此提交消息？'
    $pushRemote = Select-RdtBinary -Prompt '是否推送至远程？' -LeftLabel '推送' -RightLabel '不推送' -LeftValue 'yes' -RightValue 'no' -DefaultIndex 1

    Write-RdtBlank
    Write-RdtInfo '将执行:'
    $commands = @("  git switch -c `"$branchName`"", '  git add .')
    $commands += if ([string]::IsNullOrWhiteSpace($message.Body)) {
        "  git commit -m `"$($message.Title)`""
    } else {
        "  git commit -m `"$($message.Title)`" -m `"<body>`""
    }
    if ($pushRemote -eq 'yes') { $commands += "  git push -u origin `"$branchName`"" }
    Write-DimOutput $commands

    Write-RdtBlank
    Set-RdtBuildOutput -Value 'verbose'
    Invoke-External git switch -c $branchName
    Invoke-GitCommit -Message $message
    if ($pushRemote -eq 'yes') {
        Invoke-External git push -u origin $branchName
    }
    Write-Success '新分支提交完成'
}

if ($Arguments.Count -eq 0 -or $Arguments[0] -eq 'help') {
    Show-Usage
    if ($Arguments.Count -eq 0) { throw 'git 需要一个命令。' }
    return
}

try {
    switch ($Arguments[0]) {
        'commit' { Invoke-CommitWorkflow }
        'squash' { Invoke-SquashWorkflow }
        'reword' { Invoke-RewordWorkflow }
        'newbr' { Invoke-NewBranchWorkflow }
        default { Show-Usage; throw "未知 git 命令: $($Arguments[0])" }
    }
    Close-RdtUi
} catch {
    Write-RdtFailureFooter $_.Exception.Message
    $_.Exception.Data['RdtUiReported'] = $true
    throw
} finally {
    Close-RdtUi
}

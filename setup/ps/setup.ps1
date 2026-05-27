$toolsDirectory = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$scriptsDirectory = Join-Path $toolsDirectory 'scripts/ps'

if (($env:Path -split ';') -notcontains $scriptsDirectory) {
    $env:Path = "$scriptsDirectory;$env:Path"
}

Register-ArgumentCompleter -Native -CommandName rdt -ScriptBlock {
    param($wordToComplete, $commandAst, $cursorPosition)

    $elements = @($commandAst.CommandElements | ForEach-Object { $_.Value })
    $choices = switch ($elements.Count) {
        2 { @('help', 'create', 'update', 'dev', 'git', 'remove', 'version') }
        3 {
            switch ($elements[1]) {
                'update' { @('help', 'tool', 'code', 'lib', 'all') }
                'dev' { @('help', 'code', 'nvim', 'dir') }
                'git' { @('help', 'commit', 'squash', 'reword', 'newbr', 'update') }
                'remove' { @('help', 'tool', 'lib') }
                'version' { @('log') }
                default { @() }
            }
        }
        default { @() }
    }

    $choices | Where-Object { $_ -like "$wordToComplete*" } | ForEach-Object {
        [Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)
    }
}

Register-ArgumentCompleter -Native -CommandName lpss -ScriptBlock {
    param($wordToComplete, $commandAst, $cursorPosition)

    $elements = @($commandAst.CommandElements | ForEach-Object { $_.Value })
    $lpssCommand = Join-Path $scriptsDirectory 'lpss.ps1'
    $toolBinary = Join-Path $scriptsDirectory '.lpss/_autogen_lpss_tool.exe'
    $choices = switch ($elements.Count) {
        2 { @('help', 'create', 'node', 'topic', 'interface', 'graph', 'viz') }
        3 {
            switch ($elements[1]) {
                'create' { @('--deps', '--exts', '--cpp') }
                'node' { @('help', 'info', 'list') }
                'topic' { @('help', 'info', 'list', 'echo', 'pub', 'type', 'hz', 'bw') }
                'interface' { @('help', 'list', 'group', 'groups', 'show') }
                default { @() }
            }
        }
        default {
            switch ($elements[1]) {
                'create' {
                    if ($elements[$elements.Count - 2] -eq '--cpp') { @('17', '20', '23') }
                    else { @('--deps', '--exts', '--cpp') }
                }
                'node' {
                    if ($elements[2] -eq 'info' -and (Test-Path -LiteralPath $toolBinary -PathType Leaf)) {
                        @(& $lpssCommand node list 2>$null)
                    } else { @() }
                }
                'topic' {
                    if ($elements[2] -in @('info', 'echo', 'type', 'hz', 'bw') -and (Test-Path -LiteralPath $toolBinary -PathType Leaf)) {
                        @(& $lpssCommand topic list 2>$null)
                    } else { @() }
                }
                'interface' {
                    if ($elements[2] -eq 'group') { @(& $lpssCommand interface groups 2>$null) }
                    elseif ($elements[2] -eq 'show') { @(& $lpssCommand interface list 2>$null) }
                    else { @() }
                }
                default { @() }
            }
        }
    }

    $choices | Where-Object { $_ -like "$wordToComplete*" } | ForEach-Object {
        [Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)
    }
}

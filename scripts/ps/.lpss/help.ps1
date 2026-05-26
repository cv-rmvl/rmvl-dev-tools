[CmdletBinding()]
param()

$border = "${CYellow}${CBold}"
Write-Host "      ${border}╭──────────────────────────────────────────────────────────────────────────╮${CReset}"
Write-Host "      ${border}│${CReset} LPSS 是一个轻量级的发布订阅通信框架，采用去中心化设计，提供 NDP、EDP 两  ${border}│${CReset}"
Write-Host "      ${border}│${CReset} 层服务发现机制，以及 MTP 话题消息传输协议，提供类似 ROS2 的 *.msg 消息接 ${border}│${CReset}"
Write-Host "      ${border}│${CReset} 口，由 RMVL 提供支持。本工具提供了 LPSS 相关的命令行工具，使用方法如下。 ${border}│${CReset}"
Write-Host "      ${border}╰──────────────────────────────────────────────────────────────────────────╯${CReset}"
Show-LpssUsage
Write-Host ''
Write-Host '更多信息请参考官方手册:'
Write-Host "  使用教程: ${CGreen}https://cv-rmvl.github.io/docs/2.x/d3/d8e/tutorial_modules_lpss.html${CReset}"
Write-Host "  API 文档: ${CGreen}https://cv-rmvl.github.io/docs/2.x/d7/de3/group__lpss.html${CReset}"

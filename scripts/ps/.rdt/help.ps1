[CmdletBinding()]
param()

$border = "${CYellow}${CBold}"
Write-Host "      ${border}╭──────────────────────────────────────────────────────────────────────────╮${CReset}"
Write-Host "      ${border}│${CReset} RMVL 最初是面向 RoboMaster 赛事的视觉库，现在此之上逐步完善有关基础算法、${border}│${CReset}"
Write-Host "      ${border}│${CReset} 机器视觉、通信的功能，旨在打造适用范围广、使用简洁、架构统一、功能强大的 ${border}│${CReset}"
Write-Host "      ${border}│${CReset} 视觉控制一体库。本工具提供了 RMVL 相关的命令行工具，具体使用方法如下。   ${border}│${CReset}"
Write-Host "      ${border}╰──────────────────────────────────────────────────────────────────────────╯${CReset}"
Show-RdtUsage
Write-Host ''
Write-Host "此工具支持的根命令有: ${CYellow}rdt${CReset}、${CYellow}lpss${CReset} 和 ${CYellow}lviz${CReset}，更多信息请参考官方手册:"
Write-Host "  用户手册: ${CGreen}https://cv-rmvl.github.io/${CReset}"
Write-Host "  Doxygen:  ${CGreen}https://cv-rmvl.github.io/docs/2.x/${CReset}"
Write-Host "  GitHub:   ${CGreen}https://github.com/cv-rmvl/rmvl${CReset}"

@echo off
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup\ps\uninstall.ps1" %*
set "RDT_UNINSTALL_EXIT_CODE=%ERRORLEVEL%"

echo.
echo 卸载程序将在 10 秒后自动关闭，可按任意键立即退出。
timeout /t 10

exit /b %RDT_UNINSTALL_EXIT_CODE%

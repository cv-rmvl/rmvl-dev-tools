@echo off
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup\ps\uninstall.ps1" %*
exit /b %ERRORLEVEL%

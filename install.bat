@echo off
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0setup\ps\install.ps1" %*
exit /b %ERRORLEVEL%

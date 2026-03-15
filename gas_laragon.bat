@echo off
set LARAGON_PATH=C:\laragon
set PROJECT_PATH=C:\laragon\www\portfolio-nextjs

:: Membuka ConEmu langsung di folder project kamu
start "" "%LARAGON_PATH%\bin\cmder\vendor\conemu-maximus5\ConEmu64.exe" /Dir "%PROJECT_PATH%" /cmd autopush.bat
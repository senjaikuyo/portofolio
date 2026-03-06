@echo off
:: Tambahkan path Git dari Laragon ke sistem sementara
set PATH=%PATH%;C:\laragon\bin\git\bin

:loop
  git add .
  git commit -m "Auto-update: %date% %time%"
  git push origin main
  timeout /t 300
goto loop
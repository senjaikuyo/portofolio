@echo off
cd /d "C:\laragon\www\portfolio-nextjs"
set PATH=%PATH%;C:\laragon\bin\git\bin

:loop
  cls
  echo [SYSTEM] Auto-Push Aktif - Portfolio Next.js
  echo ------------------------------------------
  git add .
  git commit -m "Auto-update: %date% %time%"
  git push origin main
  echo ------------------------------------------
  echo Selesai. Standby 5 menit...
  timeout /t 300
goto loop
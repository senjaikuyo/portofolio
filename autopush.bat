@echo off
:: Pindah ke folder project agar Git mendeteksi folder .git
cd /d "C:\laragon\www\portfolio-nextjs"

:: Tambahkan path Git dari Laragon ke sistem sementara
set PATH=%PATH%;C:\laragon\bin\git\bin

:loop
  cls
  echo [INFO] Menjalankan Auto-Push untuk Portfolio Next.js...
  echo Lokasi: %cd%
  echo ----------------------------------------------------

  :: Cek apakah folder .git ada di sini
  if not exist .git (
      echo [ERROR] Waduh, folder .git tidak ditemukan di sini!
      echo Pastikan kamu sudah "git init" di folder portfolio-nextjs.
      pause
      exit
  )

  git add .
  git commit -m "Auto-update: %date% %time%"
  git push origin main
  
  echo ----------------------------------------------------
  echo [SUCCESS] Push selesai pukul %time%. 
  echo Menunggu 5 menit (300 detik) untuk push berikutnya...
  
  timeout /t 300
goto loop
@echo off
setlocal
cd /d "%~dp0"

set "PYTHON=C:\msys64\mingw64\bin\python.exe"

if not exist "%PYTHON%" (
    echo Python was not found at:
    echo %PYTHON%
    pause
    exit /b 1
)

echo Starting portfolio at http://127.0.0.1:5000
"%PYTHON%" app.py

endlocal

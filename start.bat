@echo off

REM Navigate to the directory where the script is located
cd /d "%~dp0"

echo Running tests...
npx playwright test

echo All tests completed.
pause

@echo off
cd /d "%~dp0public"
echo Starting preview server at http://localhost:5000
npx serve -p 5000

@echo off
setlocal
set "ROOT=%~dp0"
set "NODE=%ROOT%.tools\node-v24.17.0-win-x64\node.exe"
set "SERVER=%ROOT%.tools\audit-server.mjs"
set "SITE=%ROOT%stitch_rachel_garcia_author_website\site"

if not exist "%NODE%" (
  echo Node.js was not found at:
  echo %NODE%
  pause
  exit /b 1
)

start "Rachel Website Preview" /min "%NODE%" "%SERVER%" "%SITE%" 4173
timeout /t 2 /nobreak >nul
start "" "http://localhost:4173/"

echo Rachel Garcia website preview started at http://localhost:4173/
echo Close the minimized "Rachel Website Preview" window to stop the server.
timeout /t 5 /nobreak >nul

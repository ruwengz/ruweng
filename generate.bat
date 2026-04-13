@echo off
cd /d "%~dp0"
node node_modules\hexo\bin\hexo generate %*

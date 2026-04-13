@echo off
cd /d "%~dp0"
echo Building TechBlog...
node node_modules\hexo\bin\hexo.js generate %*

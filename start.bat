@echo off
cd /d "%~dp0"
echo Starting TechBlog Server...
node node_modules\hexo\bin\hexo.js server %*

@echo off
chcp 65001 >nul
echo ========================================
echo   Hexo 博客一键部署到 GitHub Pages
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] 清理缓存...
call npx hexo clean

echo.
echo [2/4] 生成静态文件...
call npx hexo generate

echo.
echo [3/4] 部署到 GitHub...
call npx hexo deploy

echo.
echo ========================================
echo   部署完成！
echo   访问: https://yourname.github.io
echo ========================================
pause

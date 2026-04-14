@echo off
chcp 65001 >nul
echo ========================================
echo   Hexo 博客一键部署到 GitHub Pages
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] 修复评论配置...
call node fix-comment.js

echo.
echo [2/4] 部署到 GitHub...
xcopy /s /y public\* ..\ruweng\ 2>nul

echo.
echo ========================================
echo   部署完成！
echo ========================================
pause

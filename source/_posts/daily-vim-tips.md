---
title: 日常 | 我的 Vim 配置与常用技巧
date: 2024-03-12 20:00:00
categories: [日常]
tags: [Vim, 编辑器, 工具]
thumbnail: https://picsum.photos/800/400?random=4
description: 分享我的 Vim 配置和一些实用的使用技巧
---

使用 Vim 已经两年多了，越来越觉得这是一个"一旦习惯就回不去"的编辑器。今天分享一下我的配置和常用技巧。

## 我的 .vimrc 配置

```vim
" 基础设置
set number
set relativenumber
set cursorline
set wildmenu
set showcmd

" 缩进
set tabstop=2
set shiftwidth=2
set expandtab
set smartindent

" 搜索
set incsearch
set hlsearch
set ignorecase
set smartcase

" 外观
syntax enable
colorscheme gruvbox
set background=dark

" 插件管理 (使用 vim-plug)
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'plasticboy/vim-markdown'
call plug#end()
```

## 常用快捷键

| 快捷键 | 功能 |
|--------|------|
| `jj` | 退出插入模式（映射） |
| `Ctrl + p` | 文件搜索 |
| `Ctrl + n` | 补全下一个 |
| `Ctrl + d` | 缩进当前行 |
| `gcc` | 注释/取消注释 |
| `SPC + f` | 文件浏览器 |

## 实用技巧

### 1. 批量替换

```vim
:%s/old/new/g
```

### 2. 多行编辑

```
Ctrl + v    " 进入可视块模式
j/k         " 选择多行
I           " 进入插入模式
Esc         " 退出，所有行同时插入
```

### 3. 分屏操作

```vim
:sp filename    " 水平分屏
:vsp filename    " 垂直分屏
Ctrl + w + w     " 切换窗口
```

## 写在最后

Vim 的学习曲线确实很陡，但一旦掌握，效率提升是质的飞跃。共勉！ 💪

**相关阅读:**
- [更快的终端操作 - tmux 配置]
- [打造完美的开发环境]

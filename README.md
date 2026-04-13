# TechShare - 科技分享博客

一个基于 Hexo 的现代科技风博客主题，采用深色主题设计，专注于前端开发、人工智能等技术领域的分享。

## ✨ 特性

- 🎨 **科技风深色主题** - 霓虹渐变、玻璃态效果
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **轻量快速** - 静态生成，访问流畅
- 🏷️ **标签系统** - 方便内容分类和检索
- 💬 **留言功能** - 访客互动交流
- 🌙 **深色/浅色模式** - 一键切换（可选）

## 📦 安装

### 1. 克隆项目

```bash
git clone https://github.com/yourname/tech-blog.git
cd tech-blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动本地服务器

```bash
npm run dev
```

博客将在 `http://localhost:4000` 运行。

### 4. 生成静态文件

```bash
npm run build
```

### 5. 部署到 GitHub Pages

```bash
npm run deploy
```

## 📁 目录结构

```
blog/
├── _config.yml          # Hexo 配置文件
├── package.json         # npm 依赖
├── themes/
│   └── nebula/          # Nebula 主题
│       ├── _config.yml  # 主题配置
│       ├── layout/      # EJS 模板
│       └── source/      # 静态资源
└── source/
    ├── _posts/          # 文章目录
    ├── about/           # 关于页面
    ├── guestbook/       # 留言页面
    ├── moments/          # 片刻页面
    └── topics/          # 专题页面
```

## ✏️ 写作指南

### 创建新文章

```bash
hexo new "文章标题"
```

或在 `source/_posts/` 目录直接创建 `.md` 文件：

```markdown
---
title: 我的第一篇文章
date: 2024-03-15 10:00:00
categories: [技术, 前端]
tags: [React, JavaScript]
thumbnail: /images/thumbnail.jpg
description: 文章简介
---

文章内容...
```

### 文章分类

- `技术` - 技术相关文章
- `日常` - 日常分享、工具使用
- `人工智能` - AI 相关内容

### 常用标签

- 前端框架：React, Vue, Angular, Svelte
- 编程语言：JavaScript, TypeScript, Python, Go
- 工具类：Git, Docker, Vim, VSCode
- 概念类：性能优化, 架构设计, 设计模式

## 🎨 自定义配置

### 站点信息

编辑 `_config.yml`：

```yaml
# Site
title: 你的博客名称
subtitle: 副标题
description: 博客描述
author: 作者名
language: zh-CN
```

### 主题配置

编辑 `themes/nebula/_config.yml`：

```yaml
# 站点信息
site_name: TechShare
site_author: 开发者小明

# 导航菜单
menu:
  首页: /
  日常: /categories/daily/
  专题: /topics/
  留言: /guestbook/
  片刻: /moments/
  关于: /about/

# 社交链接
social:
  GitHub: https://github.com/yourname
  Twitter: https://twitter.com/yourname
  Email: mailto:hello@example.com
```

### 站点统计

```yaml
stats:
  articles: 28      # 文章数量
  categories: 8      # 分类数量
  tags: 45          # 标签数量
  days: 365         # 运行天数
```

## 🚀 部署

### GitHub Pages

1. 在 GitHub 创建仓库
2. 修改 `_config.yml` 中的 `deploy` 配置
3. 运行 `npm run deploy`

### 其他部署方式

Hexo 支持多种部署方式，编辑 `_config.yml`：

```yaml
deploy:
  type: git
  repo: your-repo-url
  branch: gh-pages
```

## 🛠️ 主题开发

### CSS 样式

样式文件位于 `themes/nebula/source/css/main.styl`，使用 Stylus 预处理器。

主要颜色变量：

```stylus
$bg-primary = #0d1117      // 主背景
$accent-primary = #58a6ff // 主色调（蓝）
$accent-secondary = #a855f7 // 强调色（紫）
$accent-tertiary = #00ff88 // 成功色（绿）
```

### 模板结构

```
layout/
├── index.ejs          # 首页
├── post.ejs           # 文章页
├── page.ejs           # 页面模板
└── partials/
    ├── header.ejs     # 页头
    ├── footer.ejs     # 页脚
    ├── sidebar-left.ejs   # 左侧栏
    └── sidebar-right.ejs  # 右侧栏
```

## 📝 更新日志

### v1.0.0 (2024-03-15)
- ✨ 初始版本发布
- 🎨 科技风深色主题
- 📱 响应式布局
- 🏠 首页、日常、专题、留言、片刻、关于页面

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

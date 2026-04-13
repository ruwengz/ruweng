'use strict';

// 修复 Hexo 插件加载问题
const Hexo = require('./node_modules/hexo');
const originalInit = Hexo.prototype.init;

// 修补 init 方法
Hexo.prototype.init = function() {
  this.env.init = true;
  return originalInit.apply(this, arguments);
};

module.exports = Hexo;

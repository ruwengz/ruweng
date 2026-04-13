'use strict';

// Setup global hexo for plugins (Hexo 6.x requirement)
const Hexo = require('hexo');
const path = require('path');

// Create hexo instance
const hexo = new Hexo(path.join(__dirname), {});

// Set global hexo so plugins can register themselves
global.hexo = hexo;

// Now load plugins - require them after setting global.hexo
require('hexo-renderer-ejs');
require('hexo-renderer-marked');
require('hexo-renderer-stylus');
require('hexo-generator-sitemap');
require('hexo-generator-feed');
require('hexo-server');
require('hexo-generator-index');
require('hexo-generator-archive');
require('hexo-generator-category');
require('hexo-generator-tag');

// Start server
hexo.init().then(() => {
  return hexo.call('server', { _: [] });
}).catch(err => {
  if (err) {
    hexo.log.fatal(err);
    process.exit(1);
  }
});

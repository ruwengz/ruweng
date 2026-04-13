'use strict';

// Hexo Generate with proper plugin loading
const Hexo = require('hexo');

// Patch init flag
const originalInit = Hexo.prototype.init;
Hexo.prototype.init = function() {
  this.env.init = true;
  return originalInit.apply(this, arguments);
};

const hexo = new Hexo('.', { _: ['generate'], debug: false });

hexo.init().then(() => {
  return hexo.load();
}).then(() => {
  return hexo.call('generate', { _: [] });
}).then(() => {
  hexo.log.info('Blog generated successfully!');
  process.exit(0);
}).catch(err => {
  if (err) {
    hexo.log.fatal(err);
    process.exit(1);
  }
});

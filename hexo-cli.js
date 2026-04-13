'use strict';

// Hexo CLI wrapper with plugin loading fix
const Hexo = require('./hexo-fixed');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2), { string: ['_'] });
const cmd = args._[0] || 'help';
const hexoArgs = { ...args, _: args._.slice(1) };

const hexo = new Hexo('.', hexoArgs);

hexo.init().then(() => {
  return hexo.call(cmd, hexoArgs);
}).catch(err => {
  if (err) {
    hexo.log.fatal(err);
    process.exit(1);
  }
});

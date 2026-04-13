'use strict';

const hexo = require('./node_modules/hexo-cli/lib/hexo');

hexo(process.cwd(), { _: ['server'] });

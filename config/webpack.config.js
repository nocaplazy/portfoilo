const development = require('./webpack/webpack.dev.js');
const production = require('./webpack/webpack.prod.js');
const common = require('./webpack/webpack.common.js');

const { merge } = require('webpack-merge');

module.exports = (_env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const config = isDevelopment ? development : production;
  return merge(common, config);
};

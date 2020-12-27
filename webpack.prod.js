const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: ['web', 'es2017'],
  mode: 'production',
  devtool: 'source-map',
  output: {
    module: true,
  },
  experiments: {
    outputModule: true,
  },
});

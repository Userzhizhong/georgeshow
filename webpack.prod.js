const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const TerserPlugins = require('terser-webpack-plugin');

module.exports = merge(common,{
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugins()],
  }
})
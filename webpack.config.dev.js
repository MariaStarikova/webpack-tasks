const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3003,
    hot: true,
    open: true
  },
  plugins: [
    new ESLintPlugin({
      eslintPath: require.resolve('eslint')
    })
  ]
});

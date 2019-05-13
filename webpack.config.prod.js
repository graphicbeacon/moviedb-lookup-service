const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');

module.exports = {
  ...webpackBaseConfig,
  mode: 'production'
};

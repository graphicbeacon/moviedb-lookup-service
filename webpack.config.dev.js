const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO: Move common logic into webpack.config.shared.js

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO: Move common logic into webpack.config.shared.js

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.min.js'),
    path.join(__dirname, 'src/index.js')
  ],
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
      components: path.resolve(__dirname, 'src/components/'),
      node_modules: path.resolve(__dirname, 'node_modules/')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public/assets'),
    publicPath: '/assets',                          // New
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" }
    ]
  },
  //devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, './public'),  // New
    disableHostCheck: true,
  },
};
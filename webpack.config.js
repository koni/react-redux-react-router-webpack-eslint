const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      __dirname + '/src/index.jsx'
    ]
  },
  output: {
    path: __dirname + '/public/build/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  devtool: 'source-map',
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        exclude: /(node_modules)|(src)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)|(js_before)/,
      }
    ]
  },
};

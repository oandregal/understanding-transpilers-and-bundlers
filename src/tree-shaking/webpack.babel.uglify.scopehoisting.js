const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/tree-shaking/input.js',
  output: {
    filename: './src/tree-shaking/output.webpack.babel.uglify.scopehoisting.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};

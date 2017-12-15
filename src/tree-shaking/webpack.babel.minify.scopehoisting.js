const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/tree-shaking/input.js',
  output: {
    filename: './src/tree-shaking/output.webpack.babel.minify.scopehoisting.js',
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
    new MinifyPlugin({}, { comments: false, sourceMap: false }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/tree-shaking/input.js',
  output: {
    filename: './src/tree-shaking/output.webpack.babel.scopehoisting.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/tree-shaking/input.js',
  output: {
    filename: './src/tree-shaking/output.webpack.babel.minify.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new MinifyPlugin({}, { comments: false, sourceMap: false })],
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};

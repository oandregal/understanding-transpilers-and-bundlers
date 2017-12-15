const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/tree-shaking/source.js',
  output: {
    filename: './src/tree-shaking/source.webpack.uglify.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new UglifyJsPlugin()],
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};

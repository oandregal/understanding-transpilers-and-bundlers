const path = require('path');

module.exports = {
  entry: './src/tree-shaking/input.js',
  output: {
    filename: './src/tree-shaking/output.webpack.babel.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};

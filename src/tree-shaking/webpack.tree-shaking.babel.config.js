const path = require('path');

module.exports = {
  entry: './src/tree-shaking/source.js',
  output: {
    filename: './src/tree-shaking/source.webpack.js',
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

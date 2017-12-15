const path = require('path');

module.exports = {
  entry: './src/import/input.js',
  output: {
    filename: './src/import/output.webpack.babel.js',
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

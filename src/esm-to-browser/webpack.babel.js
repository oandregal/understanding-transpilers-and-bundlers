const path = require('path');

module.exports = {
  entry: './src/esm-to-browser/input.js',
  output: {
    filename: './src/esm-to-browser/output.webpack.babel.js',
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

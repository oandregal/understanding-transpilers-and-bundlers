const path = require('path');

module.exports = {
  entry: './src/imports/both.input.js',
  output: {
    filename: './src/imports/both.output.webpack.babel.js',
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

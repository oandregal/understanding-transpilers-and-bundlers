const path = require('path');

module.exports = {
  entry: './src/to-iffe/esm.input.js',
  output: {
    filename: './src/to-iffe/esm.output.webpack.babel.js',
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

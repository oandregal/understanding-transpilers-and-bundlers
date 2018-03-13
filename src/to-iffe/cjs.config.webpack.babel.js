const path = require('path');

module.exports = {
  entry: './src/to-iffe/cjs.input.js',
  output: {
    filename: './src/to-iffe/cjs.output.webpack.babel.js',
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

const path = require('path');

module.exports = {
  entry: './src/import/source.js',
  output: {
    filename: './src/import/source.bundled.import.webpack.js',
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

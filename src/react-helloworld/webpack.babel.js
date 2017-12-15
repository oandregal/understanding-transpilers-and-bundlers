const path = require('path');

module.exports = {
  entry: './src/react-helloworld/input.jsx',
  output: {
    filename: './src/react-helloworld/output.webpack.babel.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, '..', '..', 'node_modules'),
    ],
  },
};

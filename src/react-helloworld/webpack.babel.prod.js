const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/react-helloworld/input.jsx',
  output: {
    filename: './src/react-helloworld/output.webpack.babel.prod.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, '..', '..', 'node_modules'),
    ],
  },
};

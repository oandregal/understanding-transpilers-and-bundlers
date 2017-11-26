const path = require("path");

module.exports = {
  entry: "./src/tree-shaking.js",
  output: {
    filename: "./dst/webpack/tree-shaking.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    modules: [path.resolve(__dirname)]
  }
};

const path = require("path");

module.exports = {
  entry: "./src/import-default-and-named.js",
  output: {
    filename: "./dst/webpack/import-default-and-named.js"
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

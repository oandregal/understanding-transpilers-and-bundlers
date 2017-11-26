const path = require("path");

module.exports = {
  entry: "./src/import.js",
  output: {
    filename: "./examples/import.webpack.js"
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

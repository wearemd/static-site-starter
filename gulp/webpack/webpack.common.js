const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./js/scripts.js"],
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "../../site/js")
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle-webpack.js"
  },
  devtool: false,
  mode: "development",
  optimization: {
    sideEffects: true
  }
}

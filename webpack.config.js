module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle-webpack.js"
  },
  mode: "development",
  optimization: {
    sideEffects: true
  }
}

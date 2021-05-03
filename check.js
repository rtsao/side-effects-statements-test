const fs = require("fs");
const path = require("path");

const bundles = {
  esbuild: fs.readFileSync(__dirname + "/dist/bundle-esbuild.js"),
  webpack: fs.readFileSync(__dirname + "/dist/bundle-webpack.js")
};

for (let [bundler, bundle] of Object.entries(bundles)) {
  console.log(bundler);
  for (let item of ["A", "B", "C"]) {
    if (bundle.includes(`__${item}__`)) {
      console.log(`✅ ${item} bundled`);
    } else {
      console.log(`❌ ${item} skipped`);
    }
  }
}

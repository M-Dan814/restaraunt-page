const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    name: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
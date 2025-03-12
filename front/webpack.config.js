const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { node } = require("webpack");

module.exports = {
  node: "development",
  entry: "./src/index.tsx",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve:{
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: process.env.Vitrine_fe_Port || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
};
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  devServer: {
    // CORS
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },

  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false
  },

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:8090/"
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: require.resolve("babel-loader"),
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "micro_frontend_common",
      library: { type: "var", name: "micro_frontend_common" },
      filename: "remoteEntry.js",
      exposes: {
        './constants': "./src/constants",
        './utils': "./src/utils",
      }
    }),
  ],
};

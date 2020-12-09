const HtmlWebpackPlugin = require("html-webpack-plugin");
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

  output: {
    publicPath: "http://localhost:8085/"
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js?$/,
        loader: require.resolve("babel-loader"),
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "micro_frontend_app_3",
      library: { type: "var", name: "micro_frontend_app_3" },
      filename: "remoteEntry.js",
      exposes: {
        './app': './src/app',
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};

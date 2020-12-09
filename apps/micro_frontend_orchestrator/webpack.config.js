const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  devServer: {
    historyApiFallback: true
  },

  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  optimization: {
    minimize: false
  },

  output: {
    publicPath: "http://localhost:8081/"
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
      // These are unnecessary since orchestrator is not consumed anywhere
      // name: "micro_frontend_orchestrator",
      // library: { type: "var", name: "micro_frontend_orchestrator" },
      // filename: "remoteEntry.js",

      // Defines the entry points for remote modules
      remotes: {
        micro_frontend_common: "micro_frontend_common@http://localhost:8090/remoteEntry.js",
        micro_frontend_header: "micro_frontend_header@http://localhost:8082/remoteEntry.js",
        micro_frontend_app_1: "micro_frontend_app_1@http://localhost:8083/remoteEntry.js",
        micro_frontend_app_2: "micro_frontend_app_2@http://localhost:8084/remoteEntry.js",
        micro_frontend_app_3: "micro_frontend_app_3@http://localhost:8085/remoteEntry.js",
      },
      // Orchestrator does not expose anything
      // exposes: {},

      // TODO: test this out
      // shared: ["react", "react-dom", "vue", "@vue/web-component-wrapper"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};

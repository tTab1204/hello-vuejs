const WebpackRTLPlugin = require("webpack-rtl-plugin");

module.exports = {
  // initialize scss variables for the whole project
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`,
      },
    },
    extract: {
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css",
    },
  },

  configureWebpack: {
    plugins: [new WebpackRTLPlugin()],
  },

  // Generating source map js
  productionSourceMap: true,

  // stoping ESlint
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};

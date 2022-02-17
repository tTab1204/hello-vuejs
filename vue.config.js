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
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    },
  },
  // webpack css 속성의 extract 속성 추가 조사 필요

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

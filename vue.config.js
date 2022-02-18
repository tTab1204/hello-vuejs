const WebpackRTLPlugin = require("webpack-rtl-plugin");

module.exports = {
  // initialize scss variables for the whole project
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`,
      },
    },
    // webpack css 속성의 extract 속성 추가 조사 필요
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

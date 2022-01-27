const path = require("path");

module.exports = {
  // initialize scss variables for the whole project
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`,
      },
    },
  },

  // Generating source map js
  productionSourceMap: true,

  // stoping ESlint
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};

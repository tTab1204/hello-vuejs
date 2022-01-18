const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@/": path.join(__dirname, "src/"),
      },
    },
  },
  // 에러 발생 지점 -> 왜 안되는지?
  // initialize scss variables for the whole project
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/[file_nam].scss"`,
  //     },
  //   },
  // },

  // Generating source map js
  productionSourceMap: true,

  // stoping ESlint
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};

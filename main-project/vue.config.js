const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 4200,
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        dts: "./src/auto-import.d.ts",
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true,
        },
        resolvers: [ElementPlusResolver()],
      }),
      Components.default({
        resolvers: [ElementPlusResolver()],
      }),
      new webpack.DefinePlugin({
        __SUBAPP_VUE2DEMO__: JSON.stringify("subApp_Vue2Demo"),
        __SUBAPP_VUE3DEMO__: JSON.stringify("subApp_Vue3Demo"),
      }),
    ],
  },
});

const { defineConfig } = require('@vue/cli-service')
const AutoImport = require("unplugin-auto-import/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4202,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
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
      }),
    ],
  },
})

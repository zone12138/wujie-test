const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4200,
    proxy: {
      "/vue2-project": {
        target: "http://localhost:4201",
        ws: true,
        changeOrigin: true,
      },
      "/vue3-project": {
        target: "http://localhost:4202",
        ws: true,
        changeOrigin: true
      }
    },
  },
});

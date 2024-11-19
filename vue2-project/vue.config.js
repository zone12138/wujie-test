const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: '/vue2-project',
  transpileDependencies: true,
  devServer:{
    port: 4201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
  }
})

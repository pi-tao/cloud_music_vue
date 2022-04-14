const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://cloud-music.pl-fe.cn/", //获取数据的服务器的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api": "" }, //如果路径中没有api路径的话就可以打开这个选项
      },
    },
  },
  publicPath: "./",
});

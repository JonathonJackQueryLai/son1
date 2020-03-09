// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {

  publicPath: "./",
  outputDir: 'dist',
  pwa: {
    name: 'Hymson1',
    themeColor: '#EF7143'
  },
  devServer: {
    port: 8086,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   target:'http://123.207.32.32:8000/',
    //   changeOrigin: true,
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': '@/content',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }

  // baseUrl: "./",
}
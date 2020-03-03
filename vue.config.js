
module.exports = {
  
  publicPath:  "./",
  outputDir:'dist',
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
  
  
  // baseUrl: "./",
}
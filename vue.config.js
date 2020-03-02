module.exports = {
  
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
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
  },
  // baseUrl: "./",
}
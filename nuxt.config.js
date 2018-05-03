module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '快保',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'this is the first testing to build a nuxt program' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router: {
    middleware: 'init'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    vendor: ['axios','~/plugins/vue-notifications'],  //  无论引用多少次，都只打包一次，公共模块
    loaders: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ],
    analyze: true,                  //打包结果分析模式
    // babel: {
    //   presets: ['es2015', 'stage-0']      //es6,es7 转码
    // },
    filenames: {                            //自定义打包文件名
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    }, 
  },

  plugins: ['~/plugins/vue-notifications'],
  // modules: [
  //   // 请求代理配置，解决跨域
  //   '@gauseen/nuxt-proxy',
  // ],
  // http://10.79.8.136:83/marketing/may/newUserIndex
  // proxyTable: {
  //   '/marketing': {
  //       target: 'http://10.79.8.136:83/marketing/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //           '^/marketing': ''
  //       }
  //   },
  // },
}

// const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [ { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'java,ptyon,avalon'
      }

    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
    }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/element-ui.js'
    },
    {
      src: '~/plugins/api.js',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    vendor: ['axios'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  axios: {
    proxy: true
  },
  server: {
    port: 8080,
    host: '127.0.0.1'
  },
  proxy: [
    ['/api', {
      target: 'http://127.0.0.1:8099',
      changeOrigin: false,
      pathRewrite: {
        '^/api': '' //路径重写
      }
    }]
  ]
}

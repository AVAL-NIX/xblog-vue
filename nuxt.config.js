
// const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
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
    }
    // , {
    //   rel: 'stylesheet',
    //   href: 'https://cdn.bootcss.com/element-ui/2.12.0/theme-chalk/index.css'
    // }

],
    script: [{
      src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
    }
    // , {
    //   src: 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js'
    // }, {
    //   src: 'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js'
    // }, {
    //   src: 'https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js'
    // }, {
    //   src: 'https://cdn.bootcss.com/axios/0.19.0/axios.min.js'
    // }, {
    //   src: 'https://cdn.bootcss.com/element-ui/2.12.0/index.js'
    // }, {
    //   src: 'https://cdn.bootcss.com/marked/0.7.0/marked.min.js'
    // }

],
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
      src: '~/plugins/api.js'
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
    '@nuxtjs/proxy'
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
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
      pathRewrite: {
        '^/api': '' //路径重写
      }
    }]
  ]
}

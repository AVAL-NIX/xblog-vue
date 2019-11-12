import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

import store from './store'
import {
    get,
    post,
    upload,
    del,
    down,
    put,
    check
  } from '@/utils/api'

import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)

Vue.use(ElementUI)

Vue.config.productionTip = false

//API
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$delete = del
Vue.prototype.$put = put
Vue.prototype.$upload = upload
Vue.prototype.$down = down
Vue.prototype.$check = check


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  template: '<App/>'
})

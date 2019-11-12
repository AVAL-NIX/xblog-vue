import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      name: 'Index',
      path: '/',
      component: (Index) => require(['@/components/front/Index'], Index)
    },
    {
      name: 'ArticleIndex',
      path: '/article/:id',
      component: (ArticleIndex) => require(['@/components/front/article/ArticleIndex'], ArticleIndex)
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})

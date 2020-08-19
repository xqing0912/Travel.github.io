import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({

  // router就是路由網址的設定
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }
  ]
})

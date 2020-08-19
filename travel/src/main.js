// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 引入fastClick庫,解決移動端點擊時延遲300ms的問題 */
import fastClick from 'fastclick'
/* 引入reset.css,網頁初始化 */
import './assets/styles/reset.css'
/* 引入border.css,解決移動端1px邊框的問題 */
import './assets/styles/border.css'

Vue.config.productionTip = false
/* fastClick的方法綁定在文件的body上 */
fastClick.attach(document.body)

/* eslint-disable no-new */
/* 路由就是根據網址的不同，返回不同的内容給用戶 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

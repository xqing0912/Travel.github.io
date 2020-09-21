import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state指公用數據
  state: {
    city: '台北'
  },
  // 一般用不到actions
  // actions: {
  //   // changeCity是傳遞來的action名稱，接收兩個參數，ctx：上下文，city：指傳遞過來的city
  //   changeCity (ctx, city) {
  //   // 透過commit的方法去執行changeCity_1這個mutations，傳過去的内容是city
  //     ctx.commit('changeCity_1', city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      // 新傳遞進來的city去覆蓋先前公用數據的city
      state.city = city
    }
  }
})

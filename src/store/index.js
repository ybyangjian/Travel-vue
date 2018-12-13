import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
// 使用Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  // 下面这是不同的写法
  state: state,
  // actions: {
  //   // 这个方法是在子组件city list中传过来的，ctx是上下文对象，city是接收的
  //   changeCity (ctx, city) {
  //     // 调用下面的方法进行修改
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  // 需要对state里的数据算出一些数据的时候就写在getters
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

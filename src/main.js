// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 初始化的css，这里目录styles是在build/webpack.base.conf.js中添加的别名
import 'styles/reset.css'
// 解决1像素边框的css
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 解决点击事件延迟300毫秒的问题
fastClick.attach(document.body)

/* eslint-disable no-new  项目的根文件,这是一个根实例 */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户

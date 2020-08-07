// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@style/reset.css'
// 1像素边框 针对手机
import '@style/border.css'
// click 300ms延迟解决方案
import fastClick from 'fastclick'
import '@style/iconfont.css'

Vue.config.productionTip = false
fastClick.attach()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

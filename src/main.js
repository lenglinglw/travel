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
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastClick.attach()
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

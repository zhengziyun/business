// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入default样式
import('../node_modules/bootstrap/dist/css/bootstrap.min.css')
import('../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css')
//引入公共css
import('./css/counterPublic.css')

// 引入所有的js框架
import $ from 'jquery'
import('../node_modules/bootstrap/dist/js/bootstrap.min.js')
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引入vue自定义public组件
import starEval from './components/public/starEval/starEval.js'
Vue.use(starEval)
import iconTitle from './components/public/iconTitle/iconTitle.js'
Vue.use(iconTitle)
import iconTitle2 from './components/public/iconTitle2/iconTitle2.js'
Vue.use(iconTitle2)

// 引入vue自定义private组件
import commonHeader from './components/private/commonHeader/commonHeader.js'
Vue.use(commonHeader)
import leftMenu from './components/private/leftMenu/leftMenu.js'
Vue.use(leftMenu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})





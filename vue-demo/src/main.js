// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import createHistory from 'history/createBrowserHistory'
import axios from 'axios'

// 加载样式
import './assets/less/common.less'
import './assets/less/base.less'
import './assets/less/index.less'
import './assets/less/home.less'
import './assets/less/assembly.less'
import 'wc-swiper/style.css'

Vue.config.productionTip = false
Vue.prototype.browserHistory = createHistory()
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

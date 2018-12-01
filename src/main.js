// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载点
  router, // 注入路由
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import About from '@/components/about'
import Document from '@/components/document'

Vue.use(Router) // 安装vue-router插件

export default new Router({
  mode: 'history',
  // linkActiveClass: 'is-active', // 全局设置激活的router-link的样式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    }
  ]
})

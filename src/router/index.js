import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import About from '@/components/about'
import Document from '@/components/document'
// import Error404 from '@/components/404'
import AboutStudy from '@/components/views/about-study'
import AboutWork from '@/components/views/about-work'
import AboutHobby from '@/components/views/about-hobby'

Vue.use(Router) // 安装vue-router插件

export default new Router({
  mode: 'history',
  // linkActiveClass: 'is-active', // 全局设置激活的router-link的样式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/index' // 路由的别名，别名的路由在router-link里不是激活的状态，因为router-link里设置的是'/'
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: '', // path的值为空，则表示默认的子路由
          component: AboutStudy,
          name: 'Study'
        },
        {
          path: 'work',
          component: AboutWork,
          name: 'Work'
        },
        {
          path: 'hobby',
          component: AboutHobby,
          name: 'Hobby'
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path: '*',
      // component: Error404,
      // 重定向
      // redirect: '/'
      // redirect: {path: '/'}
      // redirect: {name: 'Home'},
      redirect: (to) => { // 动态设置目标路由
        // to：目标路由信息对象
        console.log(to)
        if (to.path === '/abc') {
          return '/about'
        } else if (to.path === '/123') {
          return {path: '/document'}
        } else {
          return {name: 'Home'}
        }
        // return '/'
      }
    }
  ]
})

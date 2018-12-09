import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import About from '@/components/about'
import Document from '@/components/document'
import User from '@/components/user'
// import Error404 from '@/components/404'
import AboutStudy from '@/components/views/about-study'
import AboutWork from '@/components/views/about-work'
import AboutHobby from '@/components/views/about-hobby'

import Slider from '@/components/views/slider'

Vue.use(Router) // 安装vue-router插件

let router = new Router({
  mode: 'history',
  // linkActiveClass: 'is-active', // 全局设置激活的router-link的样式
  scrollBehavior (to, from, savePosition) { // 点击浏览器的前进后退或者切换导航的时候触发
    // to：要进入的目标路由对象
    // from：离开的目标路由对象
    // savePosition：记录滚动条的坐标，点击前进后退的时候记录值

    // 利用savePosition记录的滚动条的位置，在前进或者后退的时候直接定位到该位置
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }

    // 利用目标对象的hash值定位页面中的某个元素
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      },
      // 钩子函数
      beforeEnter (to, from, next) {
        console.log('beforeEnter', to)
        next()
      },
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
          meta: {
            title: 'AboutStudy'
          },
          name: 'Study'
        },
        {
          path: 'work', // 相对于父级路由的子路由 /about/work
          component: AboutWork,
          meta: {
            title: 'AboutWork'
          },
          name: 'AboutWork'
        },
        {
          path: 'hobby',
          component: AboutHobby,
          meta: {
            title: 'AboutHobby'
          },
          name: 'AboutHobby'
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      meta: {
        isLogin: true,
        title: 'Document'
      },
      // Document组件中渲染两个组件，其中slider是命名视图。
      components: {
        default: Document,
        slider: Slider
      }
    },
    {
      path: '/user/:id?', // ？正则表达式的匹配规则，表示匹配0个或1个  /user  /user/1  /user/2
      name: 'User',
      meta: {
        title: 'User'
      },
      component: User
    },
    {
      path: '*'
      // component: Error404,
      // 重定向
      // redirect: '/'
      // redirect: {path: '/'}
      // redirect: {name: 'Home'},
      // redirect: (to) => { // 动态设置目标路由
      //   // to：目标路由信息对象
      //   if (to.path === '/abc') {
      //     return '/about'
      //   } else if (to.path === '/123') {
      //     return {path: '/document'}
      //   } else {
      //     return {name: 'Home'}
      //   }
      //   // return '/'
      // }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('导航钩子函数beforeEach', to.meta)
  if (to.meta.isLogin) {
    next('/login')
  } else {
    next()
  }
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    // window.document.title = 'wuyapingzi'
  }
})
export default router

<template>
  <div>
    {{msg}}
    <p>
      测试数据：{{test}}
    </p>
    <hr/>
    <ul class='nav'>
      <!-- <router-link to='/about' tag='li' exact active-class="activeClass" >study</router-link>
      <router-link to='/about/work' tag='li' exact active-class="activeClass" >work</router-link>
      <router-link to='/about/hobby' tag='li' exact active-class="activeClass" >hobby</router-link> -->
      <!-- 当导航到此指定路由(:to="{name: 'About'")时，将不呈现默认的子路由。从该路径中删除名称，并对命名链接使用默认子路径的名称。 -->
      <!-- <router-link :to='{name: "About"}' tag='li' exact active-class="activeClass" >study</router-link> -->
      <router-link to='/about' tag='li' exact active-class="activeClass" >study</router-link>
      <router-link :to='{name: "AboutWork"}' tag='li' exact active-class="activeClass" >work</router-link>
      <router-link :to='{name: "AboutHobby"}' tag='li' exact active-class="activeClass" >hobby</router-link>
    </ul>
    <hr/>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '关于我们',
      test: '改变前'
    }
  },
  // 生命周期函数后执行，导航钩子函数后执行
  beforeCreate () {
    console.log('beforeCreate')
  },
  // 钩子函数执行的时候组件还没有被创建
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter:', to, this)
    // 因为导航钩子函数在执行的时候还没有创建组件，不能访问到this，可以通过next的回调函数实现
    // 回调函数接受一个参数vm，该参数就是组件实例
    next((vm) => {
      console.log('回调函数执行了')
      vm.test = '测试数据改变了'
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate==')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('boforeRouteLeave--------------------')
    next()
  }
}
</script>

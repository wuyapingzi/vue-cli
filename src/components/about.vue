<template>
  <div>
    {{msg}}
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
      msg: '关于我们'
    }
  }
}
</script>

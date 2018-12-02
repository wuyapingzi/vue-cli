<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 路由匹配到的路径加载的视图 -->
    <div class="nav-box">
      <ul class='nav'>
        <router-link to='/' tag='li' exact event='mouseover'>
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <router-link :to='{path: "/document"}' tag='li' active-class="activeClass" >
          <i></i>
          <span>document</span>
        </router-link>
        <router-link to='/about' tag='li' event='mouseover'>
          <i></i>
          <span>about</span>
        </router-link>
      </ul>
    </div>
    <!-- 给router-view添加class 就是给所有的视图顶级的div添加样式 -->
    <router-view class="center"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

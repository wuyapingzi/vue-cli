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
        <router-link to='/user' tag='li'>
          <i></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>
    <!-- mode="out-in" 先出后进模式   mode="in-out" 先进后出模式-->
    <!-- <transition mode="out-in">
      <router-view class="center"/>
    </transition> -->

    <!-- name="left" name的值可以代替v -->
    <transition name="left">
      <!-- 命名视图 -->
      <!-- <router-view name='slider'/> -->
      <!-- 给router-view添加class 就是给所有的视图顶级的div添加样式 -->
      <router-view class="center"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* .v-enter {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-enter-active {
    transition: 1s
  }
  .v-leave {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
  .v-leave-active {
    transition: 2s
  } */
  .left-enter {
    transform: translateX(100%)
  }
  .left-enter-to {
    transform: translateX(0)
  }
  .left-enter-active, .left-leave-active {
    transition: 1s
  }
  .left-leave {
    transform: translateX(0)
  }
  .left-leave-to {
    transform: translateX(-100%)
  }

</style>

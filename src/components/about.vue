<template>
  <div>
    {{msg}}
    <hr/>
    <ul class='nav'>
      <router-link to='/about' tag='li' exact active-class="activeClass" >study</router-link>
      <router-link to='/about/work' tag='li' exact active-class="activeClass" >work</router-link>
      <router-link to='/about/hobby' tag='li' exact active-class="activeClass" >hobby</router-link>
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

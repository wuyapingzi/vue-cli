<template>
  <div>
    我是user
    <div class="user-list">
      <router-link :to="'/user/'+ item.id + '?info=follow'" :key="item.id" active-class="is-active" v-for="item in userList">
        {{item.name}}
      </router-link>
    </div>
    <hr/>
    <div v-if="userInfo.name">
      <p>
        姓名：{{userInfo.name}}
      </p>
      <p>
        年龄：{{userInfo.age}}
      </p>
    </div>
    <hr/>
    <div>
      <router-link v-if="userInfo.name" style="font-size: 14px" exact to="?info=follow" active-class="activeClass">
        他的关注
      </router-link>
      <router-link v-if="userInfo.name" style="font-size: 14px" exact :to="{path: '', query: {info: 'share'}}" active-class="activeClass">
        他的分享
      </router-link>
      <div>
        {{$route.query}}
      </div>
    </div>
  </div>
</template>

<script>
let data = [
  {
    id: 1,
    name: 'wuyapingzi1',
    age: 12
  },
  {
    id: 2,
    name: 'wuyapingzi2',
    age: 43
  },
  {
    id: 3,
    name: 'wuyapingzi3',
    age: 23
  }
]
export default {
  data () {
    return {
      userList: data,
      userInfo: {}
    }
  },
  watch: {
    // 路径发生变化，$route会重新赋值，监控这个属性，会执行这个函数。
    $route () {
      this.getUserInfo()
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      let userId = this.$route.params.id - 0
      if (userId) {
        this.userInfo = this.userList.filter((item) => {
          return item.id === userId
        })[0]
      } else {
        this.userInfo = {}
      }
    }
  }
}
</script>

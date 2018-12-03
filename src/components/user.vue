<template>
  <div>
    我是user
    <div class="user-list">
      <router-link :to="'/user/'+ item.id" :key="item.id" active-class="is-active" v-for="item in userList">
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
  created () {
    let userId = this.$route.params.id
    console.log(this.userList)
    if (userId) {
      this.userInfo = this.userList.filter((item) => {
        console.log(item.id)
        return item.id === userId
      })[0]
      console.log(this.userInfo)
    } else {
      this.userInfo = {}
    }
  }
}
</script>

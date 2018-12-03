<template>
  <div>
    {{msg}}

    <p id="abc">
      定位到这个元素
    </p>
  </div>
</template>

<script>
export default {
  name: 'document',
  data () {
    return {
      msg: '我是文档'
    }
  }
}
</script>

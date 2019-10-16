<template>
  <div id="m-right">
    <el-button style="width:100%;" type="warning" plain>发布帖子</el-button>
    <item-list :title="'所有板块'" :items=boards></item-list>
    <item-list :title="'推荐阅读'" :items=recommends></item-list>
  </div>
</template>

<script>
import itemList from '../common/ItemList'
export default {
  data () {
    return {
      boards: [
        { title: 'Python', value: 200 },
        { title: 'Node.js', value: 100 },
        { title: 'Vue.js', value: 88 }
      ],
      recommends: [
        { title: 'Apache中开启gzip压缩', value: 85 },
        { title: 'Bootstrap图片自适应问题', value: 36 },
        { title: 'Bilibili在线笔试', value: 77 }
      ],
    }
  },
  components: {
    itemList
  }
};
</script>

<style lang="scss">
#m-right {
  
}
</style>
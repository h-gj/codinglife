<template>
  <div id="m-main">
    <el-row>
      <el-col :span="16" :offset="1">
        <div class="left-container">
          <index-left />
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right-container">
          <index-right />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import indexLeft from '../index/Left'
import indexRight from '../index/Right'
export default {
  components: {
    indexLeft,
    indexRight
  }
};
</script>

<style lang="scss">
#m-main {
  margin-top: 25px;
  .left-container {
    background-color: lightpink;
  }
  .right-container {
    // background-color: lightseagreen;
  }
}
</style>
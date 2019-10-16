<template>
  <div id="m-header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
    >
      <el-menu-item index="1">
        <img src="http://www.hugaojian.com/static/common/nav_logo.png" alt />
      </el-menu-item>
      <el-menu-item index="2">
        <a href>首页</a>
      </el-menu-item>
      <el-menu-item index="3">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </el-menu-item>
      <!-- user logged in -->
      <template v-if="isAuthed">
        <el-submenu style="float:right" index="4">
          <template slot="title">
            <span class="username">胡高</span>
          </template>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
          <el-menu-item>选项3</el-menu-item>
        </el-submenu>
        <el-menu-item  index="5" style="float:right">
          <a href>发帖</a>
        </el-menu-item>
        
      </template>
      <!-- user not logged in -->
      <template v-else>
        <el-menu-item  index="4" style="float:right">
          <a href="/signup">注册</a>
        </el-menu-item>
        <el-menu-item  index="5" style="float:right">
          <a href>登录</a>
        </el-menu-item>
      </template>
      <!-- user not logged in -->
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isAuthed: false
    };
  }
};
</script>

<style lang="scss">
#m-header {
  img {
    width: 98px;
    height: 39px;
  }
}
</style>
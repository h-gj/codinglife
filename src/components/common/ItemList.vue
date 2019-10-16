<template>
  <div id="m-item-list">
    <ul id="borad-list">
      <li>
        <a href>{{ title }}</a>
      </li>
      <li v-for="item in items" :key="item">
        <a href>
          <el-row type="flex" justify="space-between">
            <el-col :span="20">{{ item.title }}</el-col>
            <el-col :span="4">
              <el-badge :value="item.value"></el-badge>
            </el-col>
          </el-row>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'items']
};
</script>

<style lang="scss">
#borad-list {
  border: 1px solid #eee;
  box-shadow: -1px 1px 2px #ccc;
  padding: 10px 10px 3px 10px;
  background-color: #fff;
  list-style: none;
  li {
    border-radius: 10px;
    padding: 7px;
    a {
      font-size: 15px;
      text-decoration: none;
      border: none;
      color: #555;
    }
  }
  li .el-col {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  li:first-child > a {
    font-size: 18px;
    display: block;
    color: #f0ad4e;
    border-bottom: 2px solid #f0ad4e;
    padding: 0 0 5px 0;
  }
  li:not(:first-child):hover {
    background-color: #f7f7f7;
    a {
      color: #ffba5a;
      font-size: 16px;
    }
  }
}
</style>
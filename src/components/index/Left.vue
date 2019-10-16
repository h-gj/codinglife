<template>
  <div id="m-left">
    <el-col :span="21" :offset="2">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in items" :key="item.id">
          <img :src="item.img" alt />
        </el-carousel-item>
      </el-carousel>

      <!-- thread group list -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新帖子" name="first">
          <!-- thread list -->
          <ul id="item-list-group">
            <li v-for="item in 5" :key="item">
              <el-row>
                <el-col :span="2">
                  <div class="info-left">
                    <img
                      style="width:60px;height:60px;border-radius:50%"
                      src="http://hugaojian.com/e9i7a.jpg"
                      alt
                    />
                  </div>
                </el-col>

                <el-col :span="21">
                  <div class="info-right">
                    <a href="/detail">帖子标题</a>
                    <p>
                      <span>
                        <i class="el-icon-user"></i>&nbsp;高件
                      </span>&nbsp;&nbsp;
                      <span>
                        <i class="el-icon-time"></i>&nbsp;2018-08-08
                      </span>&nbsp;&nbsp;
                      <span>
                        <i class="el-icon-s-flag"></i>&nbsp;Python
                      </span>
                    </p>
                  </div>
                </el-col>
              </el-row>
              <hr />
            </li>
          </ul>
          <!-- thread list -->
        </el-tab-pane>
        <el-tab-pane label="精华帖子" name="second">精华帖子</el-tab-pane>
        <el-tab-pane label="点赞最多" name="third">点赞最多</el-tab-pane>
        <el-tab-pane label="评论最多" name="fourth">评论最多</el-tab-pane>
      </el-tabs>
      <!-- thread item list -->
    </el-col>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img:
            "https://static-fancube.xfz.cn/1565778088340/%E6%8A%A5%E5%90%8D%E8%A1%A8.png-website.active.list"
        },
        {
          id: 2,
          img: "https://static-image.xfz.cn/1554346383_8.png"
        },
        {
          id: 3,
          img: "https://static-image.xfz.cn/1568873578_1000.jpg"
        }
      ],
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(event)
    // }
  }
};
</script>

<style lang="scss">
#m-left {
  .el-tabs__header, .is-top {
    margin: 0;
  }
  .el-tabs__item:hover {
    color: #f0ad4e;
  }
  .el-tabs__item.is-active {
      color: #f0ad4e;
  }
  hr {
    margin-top: 0;
  }
  #item-list-group {
    background-color: #fff;
    padding-left: 0;
  }
  #item-list-group li {
    padding: 5px;
    list-style: none;
  }
  #item-list-group li a {
    text-decoration: none;
    font-size: 18px;
    color: #222;
    margin: 0;
  }
  #item-list-group li a:hover {
    color: #f0ad4e;
  }
  .el-tabs__header{
    margin-bottom: 0;
  }
  .el-carousel__item img {
    width: 100%;
  }
}
</style>
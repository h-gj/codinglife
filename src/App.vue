<template>
  <div id="app">
    <section class="el-container is-vertical">
      <header class="el-header" style="height: 60px;">
        <my-header />
      </header>
      <main class="el-main">
        <router-view></router-view>
      </main>
      <footer class="el-footer" style="height: 60px;">
        <my-footer />
      </footer>
    </section>
  </div>
</template>

<script>
import myHeader from "./components/common/Header";
import myFooter from "./components/common/Footer";
export default {
  name: "app",
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background-color: #eeeeee;
  #app {
    header,
    main,
    footer {
      padding: 0;
    }
  }
}
</style>

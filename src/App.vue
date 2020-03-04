<template>
  <div id="app">
    <!-- <router-link to="/home">home</router-link>| -->
    <!-- <router-link to="/vuexdemo">vuexdemo</router-link>|
    <router-link to="/vuexdemo1">vuexdemo1</router-link> |-->
    <!-- <router-link to="/newf">find</router-link>| -->
    <headertab />
    <router-view></router-view>
  </div>
</template>

<script>
import headertab from "@/common/headertab";
export default {
  name: "app",
  components: {
    headertab
  }
};
</script>

<style>
.ul1 {
  display: block;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

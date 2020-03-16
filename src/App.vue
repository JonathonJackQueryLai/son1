<template>
  <div id="app">
    <!-- <router-link to="/home">home</router-link>| -->
    <!-- <router-link to="/vuexdemo">vuexdemo</router-link>|
    <router-link to="/vuexdemo1">vuexdemo1</router-link> |-->
    <!-- <router-link to="/newf">find</router-link>| -->

    <headertab />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template> 

<script>
import headertab from "@/common/headertab";
import Home from "@/views/Home";

import statistics from '@/views/statistics';

export default {
  name: "app",
  components: {
    "v-home": Home,
    "v-news": statistics,
    headertab
  }
};
</script>

<style>
@import "./assets/css/base.css";
.title {
  font: 50px;
}
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



<template>
  <div id="home">
    <!-- <HelloWorld :value="value"></HelloWorld> -->

    <a href="/machineToolStatus" class="item1">机床状态</a>
    <a href="/" class="item2">加工统计</a>
    <a href="/" class="item3">订单分析</a>
    <a href="/" class="item4">人机效率</a>
    <a href="/" class="item5">机床oee</a>
    <a href="/" class="item6">维护保养</a>
    <a href="" class="item7">商城</a>
    <a href="/team" class="item8" tag="Button">团队</a>
    <a href="/newf" class="item9">发现</a>
  </div>
</template>

<script>
import Vue from "vue";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      value: "123"
    };
  },
  components: {
    // HelloWorld
  }
};
</script>
<style  scoped>
a {
  text-align: center;
  font: 20px sans-serif;
  display: grid;
  bottom: 1px;
}
</style>

<template>
  <div id="home">
    <!-- <HelloWorld :value="value"></HelloWorld> -->

    <newheader>
      <h2 class="title" slot="center">首页</h2>
    </newheader>

    <a href="/machineToolStatus" class="item1">机床状态</a>
    <a href="/" class="item2">加工统计</a>
    <a href="/" class="item3">订单分析</a>
    <a href="/" class="item4">人机效率</a>
    <a href="/machineoee" class="item5">机床oee</a>
    <a href="/maintain" class="item6">维护保养</a>
    <a href="https://www.baidu.com/" class="item7">商城</a>
    <a href="/team" class="item8" tag="Button">团队</a>
    <a href="/newf" class="item9">发现</a>
  </div>
</template>

<script>
import Vue from "vue";
import newheader from "@/common/newheader";
// @ is an alias to /src

export default {
  data() {
    return {
      value: "123"
    };
  },
  components: {
    // HelloWorld
    newheader
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

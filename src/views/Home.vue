<template>
  <div class="home">
    <!-- <HelloWorld :value="value"></HelloWorld> -->

    <newheader>
      <h2 class="title1" slot="left"></h2>
      <h2 class="title" slot="center">首页</h2>
      <h2 class="title2" slot="right"></h2>
    </newheader>
    <div class="layout">


      <div>
        <button>
          <a href="/machineToolStatus" class="item1">机床状态</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/statistics" class="item2">加工统计</a>
        </button>
      </div>
      <div>+
        <button>
          <a href="/order" class="item3">订单分析</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/eff" class="item4">人机效率</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/machineoee" class="item5">机床oee</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/maintain" class="item6">维护保养</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/shop" class="item7">商城</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/team" class="item8" tag="Button">团队</a>
        </button>
      </div>
      <div>
        <button>
          <a href="/newf" class="item9">发现</a>
        </button>
      </div>
    </div>

    <!-- li.item$*10{你好$}*10+a[href=baidu.com] -->
    
    <ul class="content1 ">
      <button class="item1">你好1</button>
      <button class="item2">你好2</button>
      <button class="item3">你好3</button>
      <button class="item4">你好4</button>
      <button class="item5">你好5</button>
      <button class="item6">你好6</button>
      <button class="item7">你好7</button>
      <button class="item8">你好8</button>
      <button class="item9">你好9</button>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import newheader from "@/common/newheader";
// @ is an alias to /src
// import BScroll from "@better-scroll/core";

export default {
  created() {
    let wrapper = document.querySelector(".content1");
    let scroll = new BScroll(wrapper);
  },
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
button {
  color: rgb(17, 39, 32);
}
div {
  width: 100%;

  margin: 50px 0;
}
#layout {
  color: rgb(0, 0, 0);
  bottom: 10px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;*/
}


</style>

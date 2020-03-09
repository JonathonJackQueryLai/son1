<template>
  <div class="newf">
    <div class="num">
      <span>
        <label for="isuser">新闻Id:</label>
        <input type="text" v-model="message" placeholder="输入新闻id" />
        <p>Message is: {{ message }}</p>
      </span>
    </div>
    <h2>{{string2}}</h2>

    <Button @click="getMultiData1(message)">get</Button>
    <Button @click="bnpost">post</Button>
    <Button @click="clean">清零</Button>

    <!-- <div v-for="(item, index) in string1" :key="index">
      <span>{{index}}:{{}}</span>
      <h2>{{item.toString()}}</h2>
    </div>-->
    <!-- 内容用{} .box>ul>li{这是第$行数据}*10 -->
    <br />

    <!-- <div class="father" v-for="(item, key) of string1" :key="key">
      <div class="item-list" v-for="innerItem of item" :key="innerItem">{{innerItem}}</div>
    </div>-->
  </div>
</template>

<script scope>
// import HelloVuex from "@/components/HelloVuex";
import { getNewMultidata } from "@/http/new";
import { getNewData } from "@/http/new";

export default {
  name: "newf",
  data() {
    return {
      string1: [],
      string2: [],
      message: ""
    };
  },
  components: {},
  created() {
    console.log("创建id新闻");
    // 1.请求多个数据
    // this.getNewData1();
  },

  mounted() {console.log("创建name新闻");},
  updated() {},
  methods: {
    bnget() {
      
    },
    bnpost() {console.log(this.message);},
    clean() {
      this.message = null;
      this.string2 = null;
    },

    getMultiData1(num) {
      getNewMultidata(num).then(res => {
        this.string2 = res;
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
      });
    },
    getNewData1() {
      getNewData().then(res => {
        // console.log(res);
        this.string1 = res.result.items;

        // const goodsList = res.data.list;
        // this.goodsList[type].list.push(...goodsList);
        // this.goodsList[type].page += 1;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>


<template id="vuexdemo">
  <div id="vuexdemo">
    <h2>肥彤 早晨</h2>

    <vuexdemo1 :counter1="counter" :msg1="msg"></vuexdemo1>
    <newf />
    <!-- //:{{$store.getters.morethan20}} -->

    <!-- <h2>{{$store.getters.getmorethage(8)}}</h2> -->
    <!-- <h2>数量：{{$store.getters.getLeght}}</h2> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import vuexdemo1 from "@/components/vuexdemo1";
import newf from "@/components/newf";

export default {
  data() {
    return {
      msg: "我是demo组件",
      counter: "0"
    };
  },

  components: {
    vuexdemo1,
    newf
  },
  created() {},
  mounted() {},
  methods: {
    fatherclick(item) {
      console.log("fatherclick", item);
    },
    modify() {
      // this.$store.commit("updateInfo")
     // 异步
      this.$store.dispatch("aupdateinfo", "我已经完成");
    },
    deleteINFO() {
      this.$store.commit("deleteInfo");
    },
    deleteNum() {
      // 使用commit提交一个方法 
      this.$store.commit("deleteNum");
    },
    add() {
      this.$store.commit("increase");
    },
    disadd() {
      this.$store.commit("reduce");
    },
    // moutation 加参数的形式
    addnum(num) {
      this.$store.commit("increasenum", num);
    },
    addstudent() {
      const stu = {
        id: 1
      };
      this.$store.commit("addstudent", stu);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>


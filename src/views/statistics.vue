<template>
  <div class="Statistics">
    <button @click="emitNews()">给News组件广播数据</button>
  </div>
</template>

<script scope>
import VueEvent from "@/event/vuevent.js";
export default {
  name: "Statistics",
  data() {
    return {
      msg: "我是一个home组件"
    };
  },
  components: {},
  created() {},
  mounted() {
    VueEvent.$on("to-home", function(data) {
      console.log("111111111" + data);
    });
  },
  methods: {
    emitNews() {
      VueEvent.$emit("to-news", this.msg);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

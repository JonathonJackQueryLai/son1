<template>
  <div class="Shop">
    <newheader>
      <button slot="left" @click="skip">返回</button>
    </newheader>
    <iframe class="Fcontnent" src="https://www.baidu.com/" scrolling="yes"></iframe>
    <iframe class="Fcontnent1" src="https://www.tianmao.com/"></iframe>
  </div>
</template>

<script scope>
import newheader from "@/common/newheader";
export default {
  name: "Shop",
  data() {
    return {};
  },
  components: { newheader },
  created() {},
  mounted() {},
  methods: {
    skip() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang='scss' scoped>
.Fcontnent {
  height: auto;
  width: 100%;
}
</style>

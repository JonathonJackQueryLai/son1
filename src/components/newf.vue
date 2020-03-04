<template>
  <div class="newf">
    <Button @click="bnget">get</Button>
    <Button @click="bnpost">post</Button>
    <!-- <h2>{{string1}}</h2> -->
  </div>
</template>

<script scope>
import axios from "axios";
import Button from "vant/lib/button";
import "vant/lib/button/style";
export default {
  name: "newf",
  data() {
    return {
      string1: null
    };
  },
  components: {},
  created() {},

  mounted() {},
  methods: { bnget() {}, bnpost() {} }
};
</script>
<style lang='scss' scoped>
</style>

<template>
  <div class="team">
    <div class="secondhead">
      <newheader>
        <button slot="left" @click="btnback">返回</button>
        <h2 slot="center">team</h2>
        <h2 slot="right">通知</h2>
      </newheader>
    </div>

    <h2>
      <button @click="bnc">dianji</button>
    </h2>
    <ul class="foreach">
      <li
        v-for="(item, index) in array"
        :key="index"
      >{{item.userName}} - {{item.rank}} - {{item.userId}}</li>
    </ul>
  </div>
</template>

<script scope>
import { getTeamData } from "@/http/machineInfo";
import newheader from "@/common/newheader";
export default {
  name: "team",
  data() {
    return {
      array: []
    };
  },
  components: {
    newheader
  },
  created() {
    this.getTeamData;
  },
  mounted() {
    this.getTeamData;
  },
  methods: {
    bnc() {
      getTeamData().then(res1 => {
        console.log(res1.result.items);
        this.array = res1.result.items;
      });
    },
    btnback() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

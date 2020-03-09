<template>
  <div class="team">
    <h2>
      <button @click="bnc">dianji</button>
    </h2>
    <ul class="foreach"></ul>
    <li v-for="(item, index) in array" :key="index">{{item.userName}} - {{item.rank}}</li>
  </div>
</template>

<script scope>
import { getTeamData } from "@/http/machineInfo";
export default {
  name: "team",
  data() {
    return {
      array: []
    };
  },
  components: {},
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
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

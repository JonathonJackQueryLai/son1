<template>
  <div class="maintain">
    <ul class="head">
      <li v-for="(item, index) in this.resli" :key="index">{{index}}: {{item}}</li>
    </ul>
    <!-- <ul class="head1">
      <h2 v-for="(item, index) in this.resli1" :key="index">{{index}}: {{item}}</h2>
      {{item.tenantId}}:{{item.teantcyName}}
    </ul>-->
    <li v-for="(item, index) in this.resli1" :key="index">{{index}} :{{item}}</li>
  </div>
</template>

<script scope>
import { getMaintenance, getMaintenance1 } from "@/http/machineInfo";
export default {
  name: "",
  data() {
    return {
      resli: [],
      resli1: []
    };
  },
  components: {},
  created() {},
  mounted() {
    getMaintenance1()
      .then(res => {
        console.log(res);
        this.resli1 = res.result;
      })
      .catch(err => {
        console.log(err);
      });
    getMaintenance()
      .then(res => {
        console.log(res);
        this.resli = res.result.items;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>

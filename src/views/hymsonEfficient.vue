<template>
  <div class="Efficient">
    <h2>{{this.dataLi}}</h2>
    <button @click="deleteINFO">123</button>
  </div>
</template>

<script scope>
import newheader from "@/common/newheader";
import { getStatisticPersonEfficiencyRate } from "@/http/machineInfo";
export default {
  name: "Efficient",
  data() {
    return {
      dataLi: []    
    };
  },
  components: {},
  created() {
       getStatisticPersonEfficiencyRate()
      .then(res => {
        console.log(typeof(res));
        console.log(typeof(res.result));
        console.log(typeof(res.result.categories));
         this.dataLi = res.result.categories
        // console.log(typeof(this.dataLi))
      })
      .catch(err => {
        console.log(res);
      });
  },
  mounted() {
   
  },
  methods: {
    showdata() {},
    deleteINFO() {
      this.$store.commit("reduce");
    },
    show() {
      this.$store.commit("effRes");
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

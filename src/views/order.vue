<template>
  <div class="Order">
      <h2>{{this.datali1}}</h2>
  </div>
</template>

<script scope>
import { getOrderData } from "@/http/machineInfo";
export default {
  name: "Order",
  data() {
    return {
        datali1:[]
    };
  },
  components: {},
  created() {
    getOrderData()
      .then(res => {
        console.log(res);
        this.datali1.push(res)
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
      
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>

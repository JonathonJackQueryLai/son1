<template>
  <div class="machineoee">
    <newheader>
      <button slot="left" @click="skip">返回</button>
      <h2 slot="center">Oee</h2>
      <button slot="right" @click="notify">通知至</button>
    </newheader>
  </div>
</template>

<script scope>
import { getMachineToolOee } from "@/http/machineInfo";
import newheader from "@/common/newheader";
export default {
  name: "machineoee",
  data() {
    return {};
  },
  components: { newheader },
  created() {
    getMachineToolOee()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    skip() {
      this.$router.push("/home");
    },
    notify() {
      this.$router.push("/notify");
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

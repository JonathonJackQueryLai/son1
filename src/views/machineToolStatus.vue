<template>
  <div class="MachineToolStatus">
    <h2>/turn/api/services/app/HymSonDevice/GetHymSonDeviceForView?deviceSn</h2>
    <h2>机器状态</h2>
  </div>
</template>

<script scope>
import { getMachineState } from "@/http/machineInfo";
export default {
  name: "machinetoolStatus",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    getMachineState().then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>

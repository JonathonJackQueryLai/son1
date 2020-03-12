<template>
  <div class="mook">
    <newheader>
     <slot><slot>
    </newheader>
  </div>
</template>

<script scope>
import newheader from "@/common/newheader";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    newheader
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>

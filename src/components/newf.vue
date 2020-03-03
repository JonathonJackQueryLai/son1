<template>
  <div class="newf">
    <!-- <button @click="bnget">get</button>
    <button @click="bnpost">post</button> -->
    <h2>{{this.string1}}</h2>
  </div>
</template>

<script scope>
import axios from "axios";
export default {
  name: "newf",
  data() {
    return {
      string1: " "
    };
  },
  components: {},
  created() {
    axios.post("http://47.106.71.73:5000/api/TokenAuth/Authenticate", {
        userNameOrEmailAddress: "admin",
        password: "123qwe"
      })
      .then(function(response) {
        console.log("Brearer " + response.data.result.accessToken);
        this.string1 = "Brearer " + response.data.result.accessToken;
        return this.string1
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>

<template>
  <div class="Me">
    <div class="nameio">
      <span>
        <label for="isuser">用户：</label>
        <input type="text" placeholder="输入名字" v-model="userinput" />
      </span>
    </div>

    <div>
      <div class="pwsio">
        <span>
          <label for="isuser">密码：</label>
          <input type="text" placeholder="输入密码" v-model="pwsinput" />
        </span>
      </div>
      <div class="btnlogin" @click="btnlogin">
        <button @click="btnlogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script scope>
import getTokenData from "@/http/login";
export default {
  name: "Me",
  data() {
    return {
      userinput: "",
      pwsinput: "",
      username: "admin",
      psw: "123qwe"
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    btnlogin() {
      if (this.userinput === "" || this.pwsinput === "") {
        alert("用户或者密码不能为空!");
      } else if (
        this.userinput !== this.username &&
        this.pwsinput !== this.psw
      ) {
        alert("密码不正确或者用户不存在！");
      } else {
        // console.log(this.userinput + "," + this.pwsinput);
        getTokenData(this.userinput, this.pwsinput);
        this.$router.push("/newf");
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

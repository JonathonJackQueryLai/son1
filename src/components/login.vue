<template>
  <div id="user-info">
     <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="assets/logo.png">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login">账号登陆</span><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>

  </div>
</template>

<script>
	export default {
    name: "UserInfo",
    methods:{
      login(){
         
        if (!this.userName) {
          alert('请输入用户名');
          return;
        }
        if (!this.password) {
          alert('请输入密码');
          return;
        }
      
    },
    data(){
      return {
        userName: '',
        password: '',
        isBtnLoading: false

      }
    }
	}}
</script>

<style scoped>

  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
</style>


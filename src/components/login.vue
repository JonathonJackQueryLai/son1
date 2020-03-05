
      
<!-- // //      
// // <template>
// //   <div id="user-info">
    
// //     <div class="outer_label">

 <img class="inner_label login_logo" src="assets/img/logo.png">
// //     </div>
// //     <div class="login_form">
// //       <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
// //       <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
// //       <button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</button>

// //     </div>

// //   </div>
// // </template>

// // <script> -->
// 	export default {
//     name: "UserInfo",
//     methods:{
//       login(){
         
//         if (!this.userName) {
//           alert('请输入用户名');
//           return;
//         }
//         if (!this.password) {
//           alert('请输入密码');
//           return;
//         }
      
//     },
//     data(){
//       return {
//         tname:'admin',
//         psw:'123qwe',
//         userName: '',
//         password: '',

//       }
//     }
// 	}}
// </script>
<>



  
<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default" />
        </svg>
      </slot>
      <div class="img1">
        <img src="@/assets/img/logo.png" alt />
      </div>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be fill="#fff" class="icon-mobile">
              <use data-v-735ff1be xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile" />
            </svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be fill="#fff" class="arrow-svg right">
        <use data-v-735ff1be xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style scoped>
.img1 {
  width: 100%;
  height: 20%;
}

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

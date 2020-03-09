<template>
  <!-- ul>li.item${item number:$}*3 -->
  <div class="hair">
    <div class="item1">
      <div class="center">
        <slot name="left">
          <button @click="btnexit" style="color:green">返回</button>
        </slot>
        <slot name="center">
          <button @click="demopro1" style="color:green">promise</button>
          <button @click="demopro2" style="color:green">骊歌十一重山</button>
        </slot>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    a() {},
    demopro2() {
      return new Promise((resolve, reject) => {
        setTimeout(res => {
          resolve("C");
        }, 10);
      })
        .then(res => {
          console.log(res, "1st");
          // return Promise.resolve(res +'1')
          return Promise.reject("shibai");
        })
        .then(res => {
          console.log(res, "2nd");
          return Promise.resolve(res + "2");
        })
        .then(res => {
          console.log(res, "3rd");
          return Promise.resolve(res + "3");
        })
        .catch(err => {
          console.log(err);
        });
    },
    demopro1() {
      // 多重请求
      // axios.get({});
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("b");
        }, 1000);
      })
        .then(res => {
          console.log(res, "1st");
          return res + "1st";
        })
        .then(res => {
          console.log(res, "2nd");
          // return new Promise(resolve =>{
          //     resolve(res + '2')
          // })
          return res + "2";
        })
        .then(res => {
          console.log(res, "end");
        });
    },
    demopro() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("a");
        }, 1000);
      })
        .then(res => {
          console.log(res, "第一次处理");

          return new Promise(resolve => {
            resolve(res + "1");
          });
        })
        .then(res => {
          console.log(res, "第二次处理");

          return new Promise(resolve => {
            resolve(res + "2");
          });
        })
        .then(res => {
          console.log(res, "第三次处理");

          return new Promise(resolve => {
            resolve(res + "3");
          });
        })
        .then(res => {
          console.log(res, "第四次处理");
          return new Promise(resolve => {
            resolve(res + "4");
          });
        })
        .then(res => {
          console.log(res, "第五次");
          return new Promise(resolve => {
            resolve(res + "5");
          });
        })
        .then(res => {
          console.log(res, "第六次结束");
          // return Promise(resolve => {
          //   resolve(res + "6");
          // });
        });
    },

    btnexit() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss">
div {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 50px;
  border: 2px solid #ccc;
  background-color: brown;
  margin-top: auto;
}
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>


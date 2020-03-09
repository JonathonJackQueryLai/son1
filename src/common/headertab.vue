<template>
  <div class="head">
    <van-goods-action id="fw">
      <van-goods-action-icon icon="chat-o" text="home" to="/home" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="find" to="/newf" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="login" to="/login" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="tool" to="/tool" color="#07c160" />
    </van-goods-action>
  </div>
</template>

<script scope>
import Vue from "vue";
import { Toast } from "vant";

import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
Vue.use(Toast);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // onClickIcon() {
    //   Toast("点击图标");
    // }
  }
};
</script>
<style lang='scss' scoped>
.head {
  text-align: center;
}
#data-v-55de609d {
  // text-align: center;
  display: flex 1;
}
</style>

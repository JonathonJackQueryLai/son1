<template>
  <div class="newf">
    <Button @click="bnget">get</Button>
    <Button @click="bnpost">post</Button>
    <!-- <h2>{{string1}}</h2> -->
    <h2>
      
    </h2>
  </div>
</template>

<script scope>
import Vue from "vue";
import { Button } from "vant";
import "vant/lib/index.css";
import { Grid } from "vant";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";
import { Image } from "vant";
import { PasswordInput, NumberKeyboard } from "vant";
import { Toast } from "vant";
import { Row, Col } from "vant";
Vue.use(Button);
Vue.use(Row).use(Col);
Vue.use(Toast);
Vue.use(PasswordInput).use(NumberKeyboard);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Cell).use(CellGroup);
Vue.use(Grid);
Vue.use(Field);

export default {
  name: "newf",
  data() {
    return {
      string1: null
    };
  },
  components: {},
  created() {},

  mounted() {},
  methods: { bnget() {}, bnpost() {} }
};
</script>
<style lang='scss' scoped>
</style>

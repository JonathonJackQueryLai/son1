<template id="vuexdemo1">
  <div class="vuexdemo11">
    <H2 :v-text="counter1"></H2>
    <!-- <button class='item-bn' v-for="(item, index) in array1" :key="index" @click="bnclick(item)">{{item}}</button>   -->
  </div>
</template>

<script >
export default {  
  data() {
    return {
      array1: [1, 2, 3],
      msgt: 2,
      

    };
  },
  computed: {},
  props: ["counter1", "msg1"],
  // props: {
  //   counter1: {
  //     type: String,
  //     required: false
  //   },
  //   msg1: {
  //     type: String,
  //     required: false
  //   }
  // },

  components: {},
  created() {},
  mounted() {},
  methods: {
    bnclick(item) {
      this.$emit("itemclick", item);
    },
    myMethod() {
      console.log("我是属于子组件的方法");
    },
    give() {
      this.$emit("receive", { changeMessage: "照顾好自己" });
    }
  }
};
</script>
<style lang='scss' scoped>
.item-bn {
  display: flex 1;
  text-align: center;
}
</style>

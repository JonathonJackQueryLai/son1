<template>
  <div id="hello2">
    <h2>我是hello2</h2>
    <h2>{{msg}}</h2>
    <button v-for="(item, index) in lists" :key="index">{{item.name}}</button>

    
    

  </div>
</template>

<script scope>

export default {
  name: "hello2",
  props: {
    msg: {
      type: String,
      msg: ""
    }
  },
  data() {
    return {
      lists: [
        { name: "bule", age: 18 },
        { name: "bai", age: 19 },
        { name: "hei", age: 18 },
        { name: "zi", age: 18 }
      ]
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      bnclick(item){
          this.$emit('发送')
      }
  }
};
</script>
<style lang='scss' scoped>
</style>

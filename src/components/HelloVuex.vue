<template>
  <div id="HelloVuex">
    <H2>------HelloVuex内容如下：------</H2>

  </div>
</template>

<script scope>
export default {
  
  name: "HelloVuex",
  props:{

    lastname1:String,

    numbers1:Array
  },
  data() {
    return {

    };
  },
  components: {},


  mounted() {},
  methods: {
    
    clickD(){
      console.log('123');
      
      console.log(lastname1);
      console.log(numbers1);
    
  },
  }
};
</script>
<style lang='scss' scoped>
</style>

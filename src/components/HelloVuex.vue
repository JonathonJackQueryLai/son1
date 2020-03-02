<template>
  <div id="HelloVuex">

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

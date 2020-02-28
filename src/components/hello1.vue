<template>
  <div id='hello1'>
      
        <hello2 :msg='msg'></hello2>
        <!-- 具名插槽 -->
        <backtop ><span slot="left">hello</span></backtop>

  </div>

</template>

<script>

import hello2 from '@/components/hello2';
import backtop from '@/components/backtop';
export default {
  name: 'hello1',
  data(){
    return {
        msg:"123"
    }
  },
  components: {
      hello2,
      backtop
  },
  created(){
    
  },
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>

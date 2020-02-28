<template>
  <div id="home">
    <HelloWorld :value="value"></HelloWorld>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
      return {
        value:'123'
    }},
  components:{
    HelloWorld
    
  }
}
</script>

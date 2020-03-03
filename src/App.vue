<template>
  <div id="app">
    
    <router-link to="/home">home</router-link> |
    <router-link to="/vuexdemo">vuexdemo</router-link> |
    <router-link to="/vuexdemo1">vuexdemo1</router-link>
    <ul class= "ul1">
      h2*10
    </ul>
   <router-view></router-view>
   </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
.ul1{
    display: block;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>

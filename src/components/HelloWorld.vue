<template>
  <div id="HelloWorld">
    <HelloVuex :lastname1="lastname" :numbers1="numbers"></HelloVuex>

    <!-- <button><a :href="url" >百度</a></button> -->
    <!-- <ul>
      <li v-for="(number, index) in numbers" :item="number" :key="index">
        {{index}}
        </li>
    </ul>-->
    <!-- <h2>{{numbers.toString()}}</h2> -->
    <h2>{{value}}</h2>
  </div>
</template>

<script>
// 我是儿子
import HelloVuex from "@/components/HelloVuex";

// 我是爸爸
export default {
  name: "HelloWorld",
  components: {
    HelloVuex
  },
  props: {
    value: {
      type: String,
      default :"woshi erzi"
    }
  },
  computed: {
    fullname: function() {
      return this.firstname + this.lastname;
    }
  },
  data() {
    return {
      lastname: "Jonathon",
      // firstname:'feng',
      // msg1: "123",
      // url: "https://www.baidu.com/",
      numbers: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

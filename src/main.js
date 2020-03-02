import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  // url:'http://123.207.32.32:8000/home/data?type=pop&page=1'
  url:'https://47.106.174.83/home'
}).then(res =>{
  console.log(res.status);
  console.log(res.statusText)
})
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



// export default function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/',
//     timeout: 5000
//   })
//   instance.interceptors.request.use(res => {
//     console.log(res);
//     return res
//   }), err => {
//     console.log(err);

//   }
//   instance.interceptors.response.use(res => {
//     console.log(res.data);
//     return res.data
//   }, err => {
//     console.log(err);

//   }
//   )
// }


axios({
  // url:'http://123.207.32.32:8000/home/data?type=pop&page=1'
  url: 'http://47.106.71.73:5000/api/services/app/HymsonNews/GetAll'
}).then(res => {

  // console.log(res)
  // for(let i in res.data.result.items){
  //   console.log(res.data.result.items[i]);

  // }
  // console.log(res.data.result.items[0])

})
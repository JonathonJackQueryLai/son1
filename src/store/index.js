import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenString:'', 
    counter2: 1000,
    student: [
      {
        id: 1, age: 10, name: 'a'
      },
      {
        id: 1, age: 21, name: 'b'
      },
      {
        id: 1, age: 17, name: 'c'
      },
      {
        id: 1, age: 35, name: 'd'
      },
    ],
    info:{
      name:'Tony',
      age:'170'
    },
    array1:[1,2,3,4]
  },
  mutations: {
    increase(state) {
      state.counter2++
    },
    reduce(state) {
      state.counter2--
    },

    increasenum(state,num){
      state.counter2 += num
    },
    substraction(state,num){
      state.counter2 -= num 
    },
    addstudent(state,stu){
      state.student.push(stu)
    },
    updateInfo(state){
      // state.info.age = '17';
      Vue.set(state.info,'age','180')
    },
    deleteInfo(state){
      Vue.delete(state.info,'name','Tony')
      // delete state.info;
    },
    deleteNum(state){
      Vue.delete(state.array1,0)
    }
  },
  // 如果数据需要经过处理后才能进行提取的 就在getters里面进行处理

  getters: {
    tosarray(state){
      return state.array1.toString()
    },
    morethan20(state) {
      // // return state.student.name
      return state.student.filter(s => s.age > 15)
    },
    powernum(state) {
      return state.counter2 *state.counter2
    },
    getLeght(state,getters){
      return getters.morethan20.length
    },
    getmorethage(state){
      // return age =>{ return state.student.filter(s=>s.age>age)}
        return function(age){
          return state.student.filter(s=>s.age>age)
        }
      
    }

  },
  actions: {
    aupdateinfo(content){
      setTimeout(() => {
        content.commit('updateInfo')
        console.log(paylod);
        
      }, 1000);
    }
  },
  modules: {

  }
})

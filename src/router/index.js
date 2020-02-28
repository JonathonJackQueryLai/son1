import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HelloWorld = () => import('@/components/HelloWorld')
const HelloVuex = () => import('@/components/HelloVuex')
const Hello1 = () => import('@/components/hello1')
const Hello2 = () => import('@/components/hello2')
const Vuexdemo = () => import('@/components/vuexdemo')
const Vuexdemo1 = () => import('@/components/vuexdemo1')
const Home = () => import('@/views/Home')

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/hello1',
    component: Hello1
  },
  {
    path:'/vuexdemo',
    component:Vuexdemo
  },
  {
    path:'/vuexdemo1',
    component:Vuexdemo1
  },
  {
    path: '/hello2',
    component: Hello2
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: "/hellovuex",
    component: HelloVuex,
  },
  {
    path: "/helloworld",
    component: HelloWorld,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

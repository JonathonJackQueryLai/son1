import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Login = () => import('@/components/login')
const Newf = () => import('@/components/newf')
const Tool = () => import('@/components/tool')
const Home = () => import('@/views/Home')
const Team = () => import('@/views/team')
const MachineToolStatus = () => import('@/views/machineToolStatus')

const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/machineToolStatus',
    component: MachineToolStatus
  },
  {
    path: '/newf',
    component: Newf
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: "/team",
    component: Team,
  },
  {
    path: "/home",
    component: Home,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

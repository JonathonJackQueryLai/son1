import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Login = () => import('@/components/login')
const Newf = () => import('@/components/newf')
const Tool = () => import('@/components/tool')
const Home = () => import('@/views/Home')
const Team = () => import('@/views/team')
const MachineToolStatus = () => import('@/views/machineToolStatus')
const Shop = () => import('@/views/shop')
const Maintain = () => import('@/views/maintain')
const MachineOee = () => import('@/views/machineOee')
const Notify = () => import('@/common/notifypage')
const Eff = () => import('@/views/hymsonEfficient')
const Order = () => import('@/views/order')
const Statistics = () => import('@/views/statistics')

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/eff',
    component: Eff
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/order',
    component: Order
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
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: '/maintain',
    component: Maintain
  },
  {
    path: '/machineoee',
    component: MachineOee
  },
  {
    path: '/notify',
    component: Notify
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

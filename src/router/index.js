import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '@/views/start'
import Login from '@/views/login'
import Regist from '@/views/regist'
import Home from '@/views/home'

Vue.use(VueRouter)

// 路由配置表

const routes = [
  {
    path: '/start',
    // path: '',
    // name: 'start',
    component: Start,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/regist',
        name: 'regist',
        component: Regist
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router

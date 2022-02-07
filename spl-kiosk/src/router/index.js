import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/settings/index.vue')
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import('../views/deposit/index.vue')
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import('../views/withdraw/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

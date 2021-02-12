import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/meny',
    name: 'Meny',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Meny.vue')
  },
  {
    path: '/minProfil',
    name: 'MinProfil',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/MinProfil.vue')
  },
  {
    path: '/orderstatus',
    name: 'OrderStatus',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Orderstatus.vue')
  },
  {
    path: '/status',
    name: 'Status',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Status.vue')
  },
  {
    path: '/vartKaffe',
    name: 'VartKaffe',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/VartKaffe.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

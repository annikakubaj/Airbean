import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

// Här deklarerars routsen. De får en adress och ett namn.
// Bara "Landing" importeras direkt. De andra importeras först när de används.
const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/meny',
    name: 'Meny',
    component: () => import('../views/Meny.vue')
  },
  {
    path: '/minprofil',
    name: 'MinProfil',
  
    component: () => import('../views/MinProfil.vue')
  },
  {
    path: '/orderstatus',
    name: 'OrderStatus',
  
    component: () => import('../views/Orderstatus.vue')
  },
  {
    path: '/status',
    name: 'Status',
  
    component: () => import('../views/Status.vue')
  },
  {
    path: '/vartkaffe',
    name: 'VartKaffe',
  
    component: () => import('../views/VartKaffe.vue')
  },

  {
    path: '/userprofile',
    name: 'UserProfile',
    
    component: () => import('../views/UserProfile.vue')
  },

  {
    path: '/nav',
    name: 'Navbar',
    
    component: () => import('../components/Navbar.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

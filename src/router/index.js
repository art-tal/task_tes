import Vue from 'vue'
import VueRouter from 'vue-router'
import Wash from '../views/Wash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Wash',
    component: Wash
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

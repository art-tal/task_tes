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
]

const router = new VueRouter({
  routes
})

export default router

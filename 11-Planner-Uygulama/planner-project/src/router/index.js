import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    component: () => import( '../views/AddProject.vue')
  }, 
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: () => import( '../views/EditProject.vue'),
    // id yi param ile yakalamk için  
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
 
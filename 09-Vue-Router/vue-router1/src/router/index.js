import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/Students.vue')
  },
  // ! pros true yaparak ilgili yerde props id olarak çağırabileceğiz
  {
    path: '/students/:id',
    name: 'studentInfo',
    component: () => import('../views/StudentInfo.vue'),
    props:true

  },
  // ! path e manuel onalarak student yazılırsa students e yönlendirme yapacağız
  {
    path: '/student',
    redirect:'/students'


  },
  // !notfound sayfası diğer path istekleri için
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
    props:true

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

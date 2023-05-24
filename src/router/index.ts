import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue')
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('@/views/NewsDetail.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/Product.vue')
  },
  {
    path: '/job',
    name: 'Job',
    component: () => import('@/views/Job.vue')
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    component: () => import('@/views/JobDetail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('@/views/profile/index.vue')
  },
  {
    path: '/tool',
    name: 'Tool',
    component: () => import('@/views/tool.vue')
  },
  {
    path: '/paper',
    name: 'Paper',
    component: () => import('@/views/paper.vue')
  },
  {
    path: '/singlepaper',
    name: 'Singlepaper',
    component: () => import('@/views/singlepaper.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

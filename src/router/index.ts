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
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('@/views/comments.vue')
  },
  {
    path: '/futures',
    name: 'Futures',
    component: () => import('@/views/futures.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

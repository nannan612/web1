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
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('@/views/profile/index.vue')
  },
  {
    path: '/tool',
    name: 'Tool',
    component: () => import('@/views/tool/tool.vue')
  },
  {
    path: '/paper',
    name: 'Paper',
    component: () => import('@/views/scientific/paper.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('@/views/scientific/data.vue')
  },
  {
    path: '/laboratory',
    name: 'Laboratory',
    component: () => import('@/views/scientific/laboratory.vue')
  },
  {
    path: '/singlepaper',
    name: 'Singlepaper',
    component: () => import('@/views/scientific/singlepaper.vue')
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('@/views/comments/comments.vue')
  },
  {
    path: '/futures',
    name: 'Futures',
    component: () => import('@/views/tool/futures.vue')
  },
  {
    path: '/zhixi',
    name: 'Zhixi',
    component: () => import('@/views/heyanzhixi/Zhixi.vue')
  },
  {
    path: '/heyan',
    name: 'Heyan',
    component: () => import('@/views/heyanzhixi/heyan.vue')
  },
  {
  path: '/stock',
  name: 'Stock',
  component: () => import('@/views/tool/stock.vue')
},
{
  path: '/qiquan',
  name: 'qiquan',
  component: () => import('@/views/tool/qiquan.vue')
},
{
  path: '/cloud',
  name: 'Cloud',
  component: () => import('@/views/cloud/cloud.vue')
},
{
  path: '/class',
  name: 'Class',
  component: () => import('@/views/class/class.vue')
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

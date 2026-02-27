import {createRouter, createWebHistory} from 'vue-router'

// 路由配置
const backendRoutes = [
  {
    path: '/backend',
    component: () => import('@/components/BackendLayout.vue'),
    children: [
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: backendRoutes
})

export default router

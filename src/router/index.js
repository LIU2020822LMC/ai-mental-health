import {createRouter, createWebHistory} from 'vue-router'

// 路由配置
const backendRoutes = [
  {
    path: '/',
    redirect: '/backend',
  },
  {
    path: '/backend',
    component: () => import('@/components/BackendLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component:()=>import('@/views/dashboard.vue'),
        meta: {
          title: '数据分析',
          icon: 'PieChart'
        }
      },
      {
        path: 'Knowledge',
        component:()=>import('@/views/Knowledge.vue'),
        meta: {
          title: '知识文章',
          icon: 'Notebook'
        }
      },
      {
        path: 'consultations',
        component:()=>import('@/views/consultations.vue'),
        meta: {
          title: '咨询记录',
          icon: 'Message'
        }
      },
      {
        path: 'emotional',
        component:()=>import('@/views/emotional.vue'),
        meta: {
          title: '情绪日志',
          icon: 'User'
        }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: backendRoutes
})

export default router

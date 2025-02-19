import type { RouteRecordRaw } from 'vue-router'

const TheLayout = () => import('@/components/layout/TheLayout.vue')

const ExplorerRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '/explorer',
        component: () => import('../view/ExplorerView.vue'),
        name: 'Explorer'
      }
    ]
  }
]

export default ExplorerRouter

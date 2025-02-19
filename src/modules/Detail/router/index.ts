import type { RouteRecordRaw } from 'vue-router'

const TheLayout = () => import('@/components/layout/TheLayout.vue')

const DetailRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '/detail',
        component: () => import('../view/DetailView.vue'),
        name: 'Detail'
      }
    ]
  }
]

export default DetailRouter

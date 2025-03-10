import type { RouteRecordRaw } from 'vue-router'

const TheLayout = () => import('@/components/layout/TheLayout.vue')

const DetailRouter: RouteRecordRaw[] = [
  {
    path: '/detail/:id',
    component: TheLayout,
    children: [
      {
        path: '',
        component: () => import('../view/DetailView.vue'),
        name: 'Detail'
      }
    ]
  }
]

export default DetailRouter

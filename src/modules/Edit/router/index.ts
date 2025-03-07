import type { RouteRecordRaw } from 'vue-router'

const TheLayout = () => import('@/components/layout/TheLayout.vue')

const EditRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '/edit',
        component: () => import('../view/EditView.vue'),
        name: 'Edit'
      }
    ]
  }
]

export default EditRouter

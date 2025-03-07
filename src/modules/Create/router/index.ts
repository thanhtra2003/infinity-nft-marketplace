import type { RouteRecordRaw } from 'vue-router'

const TheLayout = () => import('@/components/layout/TheLayout.vue')

const CreateRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '/create',
        component: () => import('../view/CreateView.vue'),
        name: 'Create'
      }
    ]
  }
]

export default CreateRouter

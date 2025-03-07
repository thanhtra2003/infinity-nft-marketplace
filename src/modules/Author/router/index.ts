import type { RouteRecordRaw } from 'vue-router'

const TheLayout = () => import('@/components/layout/TheLayout.vue')

const AuthorRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: TheLayout,
    children: [
      {
        path: '/author',
        component: () => import('../view/AuthorView.vue'),
        name: 'Author'
      }
    ]
  }
]

export default AuthorRouter

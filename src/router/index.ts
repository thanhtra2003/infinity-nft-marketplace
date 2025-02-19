import LIST_ROUTER from '@/modules'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: LIST_ROUTER.flat()
})

export default router

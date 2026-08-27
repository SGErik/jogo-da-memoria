import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useGuardRoute } from './guard'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

useGuardRoute(router)

export default router



import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

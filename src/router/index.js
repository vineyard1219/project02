import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CommunityFree from '../views/CommunityFree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/CommunityFree',
      name: 'CommunityFree',
      component: CommunityFree
    }

  ]
})

export default router

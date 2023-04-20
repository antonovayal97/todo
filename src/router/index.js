import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Note from '../views/Note.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/note',
      name: 'note',
      component: Note
    }
  ]
})

export default router

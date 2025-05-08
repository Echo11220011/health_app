import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import('../views/ExerciseView.vue')
    },
    {
      path: '/diet',
      name: 'diet',
      component: () => import('../views/DietView.vue')
    },
    {
      path: '/mental-health',
      name: 'mental-health',
      component: () => import('../views/MentalHealthView.vue')
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('../views/ProgressView.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../views/AchievementsView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router 
// Configurarea router-ului Vue - definește toate rutele aplicației
// Fiecare rută este conectată la o componentă din folderul views
// Router-ul gestionează navigarea între pagini fără reîncărcarea completă a paginii
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/Signup.vue'),
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('@/views/Forgot.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
    },
    {
      path: '/produse',
      name: 'produse',
      component: () => import('@/views/Produse.vue'),
    },
    {
      path: '/comenzi',
      name: 'comenzi',
      component: () => import('@/views/Comenzi.vue'),
    },
    {
      path: '/clienti',
      name: 'clienti',
      component: () => import('@/views/Clienti.vue'),
    },
    {
      path: '/facturi',
      name: 'facturi',
      component: () => import('@/views/Facturi.vue'),
    },
    {
      path: '/retururi',
      name: 'retururi',
      component: () => import('@/views/Retururi.vue'),
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('@/views/Marketing.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('@/views/Analytics.vue'),
    },
    {
      path: '/raporturi',
      name: 'raporturi',
      component: () => import('@/views/Raporturi.vue'),
    },
    {
      path: '/setari',
      name: 'setari',
      component: () => import('@/views/Setari.vue'),
    },
    {
      path: '/ajutor',
      name: 'ajutor',
      component: () => import('@/views/Ajutor.vue'),
    },
  ],
})

export default router


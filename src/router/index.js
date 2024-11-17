import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage.vue',
    component: LandingPage,
  },
  // Add new pages here as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

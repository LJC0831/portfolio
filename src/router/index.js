import { createRouter, createWebHistory } from 'vue-router';

import AppPortfolio1 from '../components/AppPortfolio1.vue';
import AppPortfolio2 from '../components/AppPortfolio2.vue';
import AppPortfolio3 from '../components/AppPortfolio3.vue';

const routes = [
  { path: '/AppPortfolio1',    name: 'AppPortfolio1',      component: AppPortfolio1},
  { path: '/AppPortfolio2',    name: 'AppPortfolio2',      component: AppPortfolio2},
  { path: '/AppPortfolio3',    name: 'AppPortfolio3',      component: AppPortfolio3}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
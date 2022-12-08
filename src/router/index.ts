// @/router

import { createRouter, createWebHashHistory } from 'vue-router';
import HomeViewVue from '@/HomeView.vue';
import JobSearchFormVue from '@/components/JonSearch/JobSearchForm.vue';

const routes = [
  {
    path: "/",
    name: "Home", //identifier for the router
    component: HomeViewVue,
  },
  {
    path: "/jobs/results",
    name: "jobResults",
    component: JobSearchFormVue,
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
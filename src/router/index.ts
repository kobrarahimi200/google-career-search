// @/router
import { createRouter, createWebHashHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import JobReseultsViewVue from "@/views/JobReseultsView.vue";
import JobView from "@/views/JobView.vue";
const routes = [
  {
    path: "/",
    name: "Home", //identifier for the router
    component: HomeViewVue,
  },
  {
    path: "/jobs/results",
    name: "jobResults",
    component: JobReseultsViewVue,
  },
  {
    path: "/jobs/results/:id", //dynamic section is :id
    name: "jobListing",
    component: JobView,
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;

/* Denna fil är för Vue router, för att importera alla routes */

import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from "./views/AboutView.vue";
import Weather from "./views/Weather.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: "/about",
    },
    {
      component: Weather,
      path: "/weather",
    },
  ],
});

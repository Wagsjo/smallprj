/* Denna fil är för Vue router, för att importera alla routes */

import { createRouter, createWebHashHistory } from "vue-router";

import Forecast from "./views/JokeView.vue";
import Weather from "./views/WeatherView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Forecast,
      path: "/",
    },
    {
      component: Weather,
      path: "/weather/:weekday",
    },
  ],
});

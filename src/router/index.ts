import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../views/LogIn.vue";
import Home from "../views/Home.vue";
import TopView from "../views/TopView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/top",
    name: "top",
    component: TopView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

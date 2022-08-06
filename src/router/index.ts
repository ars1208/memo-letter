import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../views/LogIn.vue";
import Home from "../views/Home.vue";
import Letter from "../views/Letter.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "/services",
    name: "Services",
    component: Home,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/services/letter",
    name: "Letter",
    component: Letter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

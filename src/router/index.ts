import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "../views/LogIn.vue";
import About from "../views/AboutView.vue";
import Message from "../views/MessageView.vue";

import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/memo-letter",
    name: "home",
    component: HomeView,
  },
  {
    path: "/memo-letter/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/memo-letter/about",
    name: "about",
    component: About,
    meta: { requiresAuth: true },
  },
  {
    path: "/memo-letter/message",
    name: "message",
    component: Message,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.userToken
  ) {
    next({ path: "/memo-letter/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;

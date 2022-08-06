import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";
import Auth from "@aws-amplify/auth";
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

function getAuthenticatedUser() {
  return Auth.currentAuthenticatedUser()
    .then((data) => {
      if (data && data.signInUserSession) {
        store.commit("setUser", data);
        return data;
      }
    })
    .catch((e) => {
      console.error(e);
      store.commit("setUser", null);
      return null;
    });
}

router.beforeResolve(async (to, from, next) => {
  await getAuthenticatedUser();

  return next();
});

export default router;

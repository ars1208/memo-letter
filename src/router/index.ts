import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";
import Auth from "@aws-amplify/auth";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
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
    meta: { requireAuth: true },
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
    meta: { requireAuth: true },
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

let user;

router.beforeResolve(async (to, from, next) => {
  user = await getAuthenticatedUser();

  if (to.name == "LogIn" && user) {
    return next({ name: "Services" });
  }

  if (to.matched.some((record) => record.meta.requireAuth) && !user) {
    return next({ name: "LogIn" });
  }

  return next();
});

onAuthUIStateChange((authState, authData) => {
  if (authState === AuthState.SignedIn && authData) {
    router.push({ name: "Services" });
  }
  if (authState === AuthState.SignedOut) {
    router.push({ name: "LogIn" });
  }
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
// import firebase from '@/firebase'
// changes

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: "Homes",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "Homez",
      component: () => import("@/views/UserRegister.vue"),
    },
  ]
});

export default router;
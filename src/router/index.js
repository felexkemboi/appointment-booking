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
    }
  ]
});

export default router;
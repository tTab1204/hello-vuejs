import Vue from "vue";
import VueRouter from "vue-router";
import Message from "@/views/Message.vue";
import ROUTES from "./routes";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.MESSAGE,
    name: "Message",
    component: Message,
  },
  {
    path: ROUTES.DATE_TIME,
    name: "DateTime",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/DateTime.vue"),
  },
  {
    path: ROUTES.PLURALIZATION,
    name: "Pluralization",
    component: () => import("@/views/Pluralization.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

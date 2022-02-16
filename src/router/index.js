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
    component: () => import("@/views/DateTime.vue"),
  },
  {
    path: ROUTES.PLURALIZATION,
    name: "Pluralization",
    component: () => import("@/views/Pluralization.vue"),
  },
  {
    path: ROUTES.CURRENCY,
    name: "Currency",
    component: () => import("@/views/Currency.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

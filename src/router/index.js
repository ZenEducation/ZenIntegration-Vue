import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Form from "../components/Form.vue";
import Form_details from "../components/Form_details.vue";
import { enableMapSet } from "immer";

enableMapSet();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Form,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/form-details",
      name: "form-details",
      component: Form_details,
    },
  ],
});

export default router;

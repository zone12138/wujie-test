import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/homePage.vue"),
    },
    {
      path: "/carousel",
      component: () => import("@/views/carouselView.vue"),
    },
  ],
});

export default router;

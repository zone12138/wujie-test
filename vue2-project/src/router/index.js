import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: window.$wujie? "/empty" : "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/homePage.vue"),
    },
    {
      path: "/carousel",
      component: () => import("@/views/carouselView.vue"),
    },
    {
      path: '/empty',
      component: () => import("@/components/Empty.vue")
    }
  ],
});

export default router;

import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: window.$wujie ? "/empty" : "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/homePage.vue"),
    },
    {
      path: "/carousel",
      component: () => import("@/views/carouselView.vue"),
    },
    // 用于离开子应用时，手动切换路由，使页面进入 deactivated 生命周期，然后再进进入时，手动切换回子应用，使页面进入 activated 生命周期
    {
      path: "/empty",
      component: () => import("@/components/Empty.vue"),
    },
  ],
});

// 重载路由方法，用于解决 vue-router 跳转重复路由时会报错的问题
const originalPush = router.push;
router.push = function push(location) {
  return originalPush.call(this, location).catch(() => {});
};

const originalReplace = router.replace;
router.replace = function replace(location) {
  return originalReplace.call(this, location).catch(() => {});
};

export default router;

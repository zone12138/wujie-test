import { createRouter, createWebHistory } from "vue-router";
import { isWujie } from "@/busEvents/emit";

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: isWujie ? "/empty" : "home",
    },
    {
      path: "/home",
      component: () => import("@/views/homePage.vue"),
    },
    {
      path: '/basemap',
      component: () => import("@/views/baseMap.vue")
    },
    {
      path: "/empty",
      component: () => import("@/views/emptyView.vue"),
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

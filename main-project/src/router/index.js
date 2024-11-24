import { createRouter, createWebHistory } from "vue-router";
import { useEmit } from "../busEvents/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/homePage.vue"),
      meta: {
        title: "主应用首页",
      },
    },
    {
      path: `/${__SUBAPP_VUE2DEMO__}`,
      // component: () => import("@/components/vue2Comp.vue"),
      meta: {
        title: "vue2 子应用",
      },
      children: [
        {
          path: "home",
          // component: () => import("@/components/vue2Comp.vue"),
          name: 'vue2 子应用首页',
          meta: {
            title: "vue2 子应用首页",
          },
        },
        {
          path: "carousel",
          // component: () => import("@/components/vue2Comp.vue"),
          name: 'vue2 子应用走马灯',
          meta: {
            title: "vue2 子应用走马灯",
          },
        },
        {
          path: "elementUI",
          name: 'vue2 子应用elementUI',
          meta: {
            title: "vue2 子应用elementUI",
          }
        }
      ],
    },
    {
      path: "/vue3",
      meta: {
        title: "vue3 子应用",
      },
      children: [
        {
          path: "vue3-1",
          component: () => import("@/components/vue3Comp.vue"),
          meta: {
            title: "vue3-1",
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  useEmit("change-child-route", to.path, from.path);
  next();
});

export default router;

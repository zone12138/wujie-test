import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/homePage.vue"),
      meta: {
        title: '主应用首页'
      }
    },
    {
      path: "/vue2",
      component: () => import("@/components/vue2Comp.vue"),
      meta: {
        title: 'vue2 子应用'
      }
    },
    {
      path: '/vue3',
      meta: {
        title: 'vue3 子应用'
      },
      children: [
        {
          path: 'vue3-1',
          component: () => import('@/components/vue3Comp.vue'),
          meta: {
            title: 'vue3-1'
          }
        }
      ]
    }
  ]
})

export default router;

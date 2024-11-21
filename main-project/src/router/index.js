import { createRouter, createWebHistory } from "vue-router";
import { useEmit } from '../busEvents/index'

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
      // component: () => import("@/components/vue2Comp.vue"),
      meta: {
        title: 'vue2 子应用'
      },
      children: [
        {
          path: 'home',
          component: () => import("@/components/vue2Comp.vue"),
          meta: {
            title: 'vue2 子应用首页',
            mode: 'wujie'
          }
        },
        {
          path: 'carousel',
          component: () => import("@/components/vue2Comp.vue"),
          meta: {
            title: 'vue2 子应用走马灯',
            mode: 'wujie'
          }
        },
      ]
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

router.beforeEach((to, from, next) => {
  const { meta } = to
  if (meta && meta.mode === 'wujie') {
    useEmit('change-child-route', to.path)
  }
  next()
})

export default router;

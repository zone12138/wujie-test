import { createRouter,  } from 'vue-router'

const router = [
  {
    path: '/',
    component: () => import('../components/HelloWorld.vue')
  }
]
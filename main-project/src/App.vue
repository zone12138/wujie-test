<template>
  <div>
    <h1>这是主应用</h1>
    <el-menu>
      <template v-for="{ children, path, meta } in router" :key="path">
        <subMenu v-if="children && children.length !== 0"></subMenu>
        <ElMenuItem v-else :index="path">{{ meta?.title }}</ElMenuItem>
      </template>
    </el-menu>
    <RouterLink to="vue2">vue2</RouterLink>
    <router-link to="vue3">vue3</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import subMenu from './components/subMenu.vue'
const router = useRouter().getRoutes()
// const router = []
</script>

<style scoped>

</style>

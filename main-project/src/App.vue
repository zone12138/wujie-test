<template>
  <div>
    <el-menu mode="horizontal" router>
      <subMenu v-for="item in router" :key="item.path" :menuData="item" />
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script setup>
import subMenu from './components/subMenu.vue'
const router = useRouter().options.routes
</script>

<style scoped>

</style>

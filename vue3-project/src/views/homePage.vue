<template>
  <div class="homepage-container">
    <h1>Vue3 DEMO HOME</h1>
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <strong>ElementPlus Dark</strong>
        </div>
      </template>
      <p v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</p>
      <template #footer>Footer content</template>
    </el-card>
    <br>
    <el-button type="primary" @click="handleJump">
      跳转至Vue2Demo的首页
    </el-button>
  </div>
</template>

<script setup>
import { useEmit } from "@/busEvents/emit";

const handleJump = () => {
  useEmit("global-jump", { path: "/subApp_Vue2Demo/home" });
};
</script>

<style lang="scss" scoped>
.homepage-container {
  height: 100%;
  width: 100%;
  padding: 20px;
}
</style>

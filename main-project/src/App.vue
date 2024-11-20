<!--
 * @Author: xie 1459547902@qq.com
 * @Date: 2024-11-18 09:24:16
 * @LastEditors: xie 1459547902@qq.com
 * @LastEditTime: 2024-11-20 11:17:57
 * @FilePath: \wujie-test\main-project\src\App.vue
 * @Description: 主容器
-->
<template>
  <section class="main-container">
    <header>
      <el-menu mode="horizontal" router :default-active="route.path">
        <subMenu v-for="item in router" :key="item.path" :menuData="item" />
      </el-menu>
    </header>
    <main>
      <!-- vue-router@4 的写法 -->
      <!-- <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is='Component'></component>
        </keep-alive>
      </router-view> -->
      <router-view></router-view>
    </main>
    <footer>
      <tagsView />
    </footer>
  </section>
</template>

<script setup>
import subMenu from "./components/subMenu.vue";
import tagsView from "./components/tagsView.vue";
const router = useRouter().options.routes;
const route = useRoute();
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  main {
    position: relative;
    flex: 1;
    overflow: hidden;
  }
}
</style>

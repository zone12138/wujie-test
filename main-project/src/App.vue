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
        <subMenu v-for="item in menuData" :key="item.path" :menuData="item" />
      </el-menu>
    </header>
    <main>
      <!-- vue-router@4 的写法 -->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
      <!-- <router-view /> -->
      <WujieVue
        v-for="item in appInfos"
        :key="item.name"
        v-show="handleShowWujie(item)"
        height="100%"
        width="100%"
        v-bind="item"
        :activated="handleActivated"
        :deactivated="handleDeactivated"
      ></WujieVue>
    </main>
    <footer>
      <tagsView />
    </footer>
  </section>
</template>

<script setup>
import subMenu from "./components/subMenu.vue";
import tagsView from "./components/tagsView.vue";
import { appInfos } from "./wujie/register";
const router = useRouter();
const route = useRoute();
const menuData = router.options.routes;
const handleShowWujie = (item) =>
  computed(() => route.path.indexOf(`/${item.name}/`) === 0).value;

const handleActivated = () => {
  console.log("进入 子应用");
};

const handleDeactivated = () => {
  console.log("离开 子应用");
};
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

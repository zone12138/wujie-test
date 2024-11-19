<template>
  <ElSubMenu v-if="menuData.children && menuData.children.length > 0">
    <template #title>
      {{ menuData?.meta?.title }}
    </template>
    <subMenu
      v-for="item in menuData.children"
      :key="item.path"
      :menuData="item"
    ></subMenu>
  </ElSubMenu>
  <ElMenuItem v-else :index="menuData.path">
    {{ menuData?.meta?.title }}
  </ElMenuItem>
</template>

<script setup>
import subMenu from "./subMenu.vue";
const props = defineProps({
  menuData: Object,
});

const { menuData } = toRefs(props);

console.log(menuData);
</script>

<style></style>

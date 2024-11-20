<template>
  <ElSubMenu v-if="menuData.children && menuData.children.length > 0" :index="fullPath">
    <template #title>
      {{ menuData?.meta?.title }}
    </template>
    <subMenu
      v-for="item in menuData.children"
      :key="item.path"
      :menuData="item"
      :parentPath="fullPath"
    ></subMenu>
  </ElSubMenu>
  <ElMenuItem v-else :index="fullPath">
    {{ menuData?.meta?.title }}
  </ElMenuItem>
</template>

<script setup>
import subMenu from "./subMenu.vue";
const props = defineProps({
  menuData: Object,
  parentPath: {
    type: String,
    default: ""
  }
});

const { menuData, parentPath } = toRefs(props);

const fullPath = computed(() => {
  return parentPath.value ? `${parentPath.value}/${menuData.value.path}` : menuData.value.path;
});

</script>

<style></style>

<template>
  <div class="tags-view-container">
    <el-tag
      v-for="item in visitedViews"
      :key="item.path"
      :closable="item.path !== defaultPath"
      :effect="item.path === route.path ? 'dark' : 'plain'"
      size="large"
      @click="handleClick(item)"
      @close="handleClose(item)"
    >
      {{ item?.meta?.title || item?.name || "未命名" }}
    </el-tag>
  </div>
</template>

<script setup>
const defaultPath = "/";
const visitedViews = ref([]);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  handleSetDefault()  
});

/**
 * 设置第一个已访问菜单 （homePage）
 */
const handleSetDefault = () => {
  const item = router.getRoutes().find((item) => item.path === defaultPath);
  if (item) visitedViews.value.push(item);
}

/**
 * 点击tag时跳转至对应的页面
 * @param routes 路由信息
 */
const handleClick = (routes) => {
  router.push(routes);
};

/**
 * 点击关闭时，关闭对应的页面
 * @param routes 路由信息
 */
const handleClose = (routes) => {
  const index = visitedViews.value.findIndex(
    (item) => item.path === routes.path
  );
  if (route.path === routes.path) {
    handleClick(visitedViews.value[index - 1]);
  }
  visitedViews.value.splice(index, 1);
};

// 监听路由变化
watch(route, (newVal) => {
  const item = visitedViews.value.find((item) => item.path === newVal.path);
  if (item) return;
  visitedViews.value.push({ ...toRaw(newVal) });
});
</script>

<style lang="scss" scoped>
::v-deep .el-tag {
  cursor: pointer;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;

  & + .el-tag {
    border-left: none;
  }
}
</style>

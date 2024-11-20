<template>
  <div class="tags-view-container">
    <el-tag
      v-for="item in visitedViews"
      :key="item.path"
      :closable="item.path !== defaultPath"
      :effect="item.path === route.path ? 'dark' : 'plain'"
      @click="handleClick(item)"
      @close="handleClose(item)"
    >
      {{ item?.meta?.title || "未命名" }}
    </el-tag>
  </div>
</template>

<script setup>
const defaultPath = "/";
const visitedViews = ref([]);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const item = router.getRoutes().find((item) => item.path === defaultPath);
  if (item) visitedViews.value.push(item);
});

const handleClick = (routes) => {
  router.push(routes);
};

const handleClose = (routes) => {
  const index = visitedViews.value.findIndex(
    (item) => item.path === routes.path
  );
  if (route.path === routes.path) {
    handleClick(visitedViews.value[index - 1]);
  }
  visitedViews.value.splice(index, 1);
};

watch(route, (newVal) => {
  const item = visitedViews.value.find((item) => item.path === newVal.path);
  console.log("item", item, visitedViews.value);
  if (item) return;
  visitedViews.value.push({ ...toRaw(newVal) });
});
</script>

<style lang="scss" scoped>
::v-deep .el-tag {
  cursor: pointer;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  & + .el-tag {
    border-left: none;
  }
}
</style>

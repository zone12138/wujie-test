<template>
  <div class="elementui-container">
    <ElTabs type="border-card" v-model="activeName">
      <ElTabPane name="dialog" label="弹窗"><dialogView /> </ElTabPane>
      <ElTabPane name="message" label="消息/通知提示"
        ><messageView />
      </ElTabPane>
      <ElTabPane name="select" label="下拉框"><selectView /> </ElTabPane>
      <ElTabPane name="image" label="图片"><imageView /> </ElTabPane>
    </ElTabs>
  </div>
</template>

<script>
import dialogView from "@/components/elementUIView/dialogView.vue";
import messageView from "@/components/elementUIView/messageView.vue";
import selectView from "@/components/elementUIView/selectView.vue";
import imageView from "@/components/elementUIView/imageView.vue";
export default {
  name: "ElementUIView",
  components: { dialogView, messageView, selectView, imageView },
  data() {
    return {
      activeName: "dialog",
    };
  },
};
</script>

<style lang="scss" scoped>
.elementui-container {
  height: 100%;
  width: 100%;
  padding: 10px;
  ::v-deep .el-tabs {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__content {
      flex: 1;
      overflow: hidden;

      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>

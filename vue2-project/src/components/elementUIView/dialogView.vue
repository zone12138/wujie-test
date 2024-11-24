<template>
  <div class="dialog-container">
    <ElButton type="primary" @click="handleShowDialog(false)">打开弹窗（append-to-body为false）</ElButton>
    <ElButton type="success" @click="handleShowDialog(true)">打开弹窗（append-to-body为true）</ElButton>
    <ElDialog :visible.sync="dialogShow" :append-to-body="appendToBody" title="测试dialog的appendToBody" width="500px">
      <div>验证：<ElTag type="info">子应用的弹窗是否会插入到主应用的body中去</ElTag></div>
      <br>
      <div>结果：<ElTag type="danger">无论是否使用append-to-body属性，都不会插入到主应用的body中去</ElTag></div>
    </ElDialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogShow: false,
      appendToBody: false
    };
  },
  methods: {
    /**
     * 打开弹窗
     * @param isAppendToBody 是否插入body
     */
    handleShowDialog(isAppendToBody = false) {
      this.dialogShow = true;
      this.appendToBody = isAppendToBody;
    },
  },
};
</script>
<style lang="scss">
.dialog-container {
  height: 100%;
  width: 100%;
}
</style>

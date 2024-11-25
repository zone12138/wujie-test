<template>
  <div class="message-container">
    <ElButton @click="handleShowMessage()">message</ElButton>
    <ElButton @click="handleShowNotify()">notify</ElButton>
  </div>
</template>
<script>
import { useEmit } from "@/busEvents/emit";
export default {
  methods: {
    /**
     * 显示消息
     */
    handleShowMessage() {
      useEmit("global-message", "error", "【向主应用发起通信】消息提示是被插入到了子应用中而不是主应用中");
    },
    /**
     * 显示通知
     */
    handleShowNotify() {
      useEmit("global-notify", {
        title: "【向主应用发起通信】",
        dangerouslyUseHTMLString: true,
        message:
          '<strong><span style="color: #ff0000;">通知提示</span> <span style="color: #0000ff;">是被插入到了子应用中而不是主应用中</span></strong>',
        duration: 0,
      });
    },
  },
};
</script>
<style lang="scss">
.message-container {
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div class="select-container">
    <ElSelect v-model="selectVal">
        <ElOption v-for="item of 9" :key="item" :label="item" :value="item"></ElOption>
    </ElSelect>
  </div>
</template>

<script>
export default {
  name: "SelectView",
  data() {
    return {
      selectVal: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  height: 100%;
  width: 100%;
}
</style>

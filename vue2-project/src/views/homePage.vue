<template>
  <div class="home-container">
    <div class="bar-content">
      <bar3D />
       1234csv大发发
    </div>
    <div class="bar-content">
      <bar3DTwo />
    </div>
  </div>
</template>

<script>
import bar3D from "@/components/homePage/bar3D.vue";
import bar3DTwo from "@/components/homePage/bar3D-two.vue";
export default {
  components: {
    bar3D,
    bar3DTwo,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  gap: 20px;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #061539;

  .bar-content {
    width: 50%;
    height: 100%;
    padding: 20px;
    border: 1px solid #efefef;
    border-radius: 50px;
    font-family: Kingsoft_cloud;
    color: red;
  }
}
</style>

<template>
  <div class="image-container">
    <ElImage :src="require('../../assets/scenery.jpg')" fit="contain"></ElImage>
    <img src="../../assets/scenery.jpg" alt="图片加载失败" srcset="" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .el-image,
  img {
    height: 50%;
    width: 50%;
    object-fit: contain;
  }
}
</style>

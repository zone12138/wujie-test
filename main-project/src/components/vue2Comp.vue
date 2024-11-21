<!--
 * @Author: xie 1459547902@qq.com
 * @Date: 2024-11-19 15:07:32
 * @LastEditors: xie 1459547902@qq.com
 * @LastEditTime: 2024-11-20 11:27:47
 * @FilePath: \wujie-test\main-project\src\components\vue2Comp.vue
 * @Description: vue2 子应用容器
-->
<template>
  <WujieVue
    height="100%"
    width="100%"
    name="vue2"
    :url="url"
    :alive="true"
    :activated="activated"
    :deactivated="deactivated"
  ></WujieVue>
</template>

<script setup>
const url = ref("http://localhost:4201/");

const activated = function() {
  console.log("vue2 子应用 activated", arguments);
};
const deactivated = () => {
  console.log("vue2 子应用 deactivated");
};
</script>

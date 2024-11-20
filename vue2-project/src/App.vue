<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ElInputNumber v-model="number"></ElInputNumber>
  </div>
</template>

<script>
import lifecycle from "./utils/lifecycleMixin";

export default {
  name: "App",
  mixins: [lifecycle],
  data() {
    return {
      number: 10,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>

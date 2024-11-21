<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import lifecycle from "./utils/lifecycleMixin";

export default {
  name: "App",
  mixins: [lifecycle],
};
</script>

<style>
#app {
  text-align: center;
}
</style>

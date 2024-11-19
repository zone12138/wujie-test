<template>
  <ElSubMenu v-if="props.menuData.length"></ElSubMenu>
</template>

<script setup>
const props = defineProps({
  menuData: Array
})
console.log(props)
</script>

<style></style>
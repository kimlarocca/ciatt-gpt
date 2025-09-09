<script setup lang="ts">
const { checkColorMode } = useDarkMode()
onMounted(() => {
  checkColorMode()
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

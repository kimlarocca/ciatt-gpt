<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="container mx-auto p-4">
    <Divider class="mt-12 mb-4" />
    <p class="small">Copyright © {{ currentYear }}. All Rights Reserved.</p>
  </footer>
</template>

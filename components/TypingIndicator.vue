<template>
  <div class="flex items-start gap-3 mb-4">
    <!-- Avatar -->
    <div
      class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-medium"
    >
      CIATT
    </div>

    <!-- Typing Animation -->
    <div class="flex-grow">
      <div class="bg-gray-700 rounded-lg px-4 py-3 inline-block">
        <div class="flex space-x-1">
          <div
            class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style="animation-delay: 0ms"
          ></div>
          <div
            class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style="animation-delay: 150ms"
          ></div>
          <div
            class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style="animation-delay: 300ms"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for this simple component
</script>

<style scoped>
@keyframes bounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>

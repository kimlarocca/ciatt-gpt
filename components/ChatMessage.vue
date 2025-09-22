<template>
  <div class="flex items-start gap-3 mb-4 group">
    <!-- Avatar -->
    <div
      class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-medium"
      :class="message.isUser ? 'bg-green-600' : 'bg-gray-600'"
    >
      {{ message.isUser ? 'You' : 'JC' }}
    </div>

    <!-- Message Content -->
    <div class="flex-grow min-w-0">
      <div class="prose prose-invert max-w-none">
        <p class="text-gray-100 whitespace-pre-wrap break-words mb-0">
          {{ message.content }}
        </p>
      </div>

      <!-- Timestamp -->
      <div
        class="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {{ formatTime(message.timestamp) }}
      </div>
    </div>

    <!-- Copy button (appears on hover) -->
    <Button
      v-if="!message.isUser"
      @click="copyMessage"
      class="opacity-0 group-hover:opacity-100 transition-opacity px-4"
      aria-label="Copy message"
      icon="pi pi-copy"
      v-tooltip="`Copy message`"
    />
  </div>
</template>

<script setup lang="ts">
interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface Props {
  message: Message
}

const props = defineProps<Props>()

const formatTime = (timestamp: Date) => {
  return timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const copyMessage = async () => {
  try {
    await navigator.clipboard.writeText(props.message.content)
    // You could add a toast notification here if desired
  } catch (err) {
    console.error('Failed to copy message:', err)
  }
}
</script>

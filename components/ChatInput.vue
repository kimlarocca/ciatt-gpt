<template>
  <div class="border-t border-gray-700 bg-gray-800 p-4">
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <textarea
          ref="textareaRef"
          v-model="inputText"
          @keydown="handleKeydown"
          @input="adjustHeight"
          placeholder="Message CiattGPT..."
          class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 pr-12 resize-none border border-gray-600 focus:border-gray-500 focus:outline-none placeholder-gray-400"
          rows="1"
          :disabled="disabled"
        ></textarea>

        <!-- Send Button -->
        <button
          @click="sendMessage"
          :disabled="!canSend"
          class="absolute right-4 top-0 bottom-0 px-2 rounded-lg transition-colors"
          :class="
            canSend
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          "
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>

      <!-- Footer text -->
      <p class="text-xs text-gray-500 text-center mt-2">
        CiattGPT makes a lot of mistakes and often flip-flops on opinions.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'

interface Emits {
  (e: 'send', message: string): void
}

interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const emit = defineEmits<Emits>()

const inputText = ref('')
const textareaRef = ref<HTMLTextAreaElement>()

const canSend = computed(() => {
  return inputText.value.trim().length > 0 && !props.disabled
})

const sendMessage = () => {
  if (canSend.value) {
    emit('send', inputText.value.trim())
    inputText.value = ''
    adjustHeight()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}

const adjustHeight = () => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
      textareaRef.value.style.height =
        Math.min(textareaRef.value.scrollHeight, 200) + 'px'
    }
  })
}

// Focus input when component mounts
onMounted(() => {
  textareaRef.value?.focus()
})
</script>

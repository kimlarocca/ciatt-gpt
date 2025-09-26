<template>
  <div
    class="p-4 bg-gray-900 fixed left-0 right-0 transition-all duration-200"
    :style="{ bottom: keyboardOffset + 'px' }"
  >
    <div class="max-w-5xl mx-auto">
      <InputGroup class="mb-5">
        <InputText
          ref="inputRef"
          placeholder="Ask anything..."
          :disabled="disabled"
          v-model="inputText"
          class="text-white"
          @keypress.enter="sendMessage"
          @focus="handleInputFocus"
          @blur="handleInputBlur"
        />
        <Button icon="pi pi-send" @click="sendMessage" :disabled="!canSend" />
      </InputGroup>

      <!-- Footer text -->
      <p class="text-xs text-gray-500 text-center mt-2">
        This website was not requested or authorized by any candidate or
        candidate's committee. Paid for by
        <a target="_blank" href="https://www.papnj.com">People Are People LLC</a
        >, 971 US Highway 202N #8014, Branchburg, NJ 08876.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'

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
const inputRef = ref<HTMLInputElement>()
const keyboardOffset = ref(0)
const isInputFocused = ref(false)

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

// Store the viewport listener so we can remove it later
let viewportListener: (() => void) | null = null

const handleInputFocus = () => {
  isInputFocused.value = true
  // Only run keyboard handling on client-side
  if (process.client) {
    // On mobile devices, especially Android, we need to handle the virtual keyboard
    if (window.visualViewport) {
      viewportListener = () => {
        if (isInputFocused.value) {
          const keyboardHeight =
            window.innerHeight - window.visualViewport!.height
          keyboardOffset.value = keyboardHeight > 0 ? keyboardHeight : 0
        }
      }
      window.visualViewport.addEventListener('resize', viewportListener)
      viewportListener() // Call once to set initial value
    } else {
      // Fallback for browsers without Visual Viewport API
      // Add a small delay to ensure keyboard has appeared
      setTimeout(() => {
        if (isInputFocused.value && inputRef.value) {
          inputRef.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 300)
    }
  }
}

const handleInputBlur = () => {
  isInputFocused.value = false
  keyboardOffset.value = 0

  // Remove the viewport listener when input loses focus
  // Only run on client-side to avoid SSR issues
  if (process.client && window.visualViewport && viewportListener) {
    window.visualViewport.removeEventListener('resize', viewportListener)
    viewportListener = null
  }
}

// Focus input when component mounts
onMounted(() => {
  // Only run on client-side
  if (process.client) {
    inputRef.value?.focus()
  }
})

// Clean up viewport listener on unmount
onUnmounted(() => {
  // Only run on client-side to avoid SSR issues
  if (process.client && window.visualViewport && viewportListener) {
    window.visualViewport.removeEventListener('resize', viewportListener)
    viewportListener = null
  }
})
</script>

<style lang="scss" scoped>
.p-inputtext {
  border-top-left-radius: var(--border-radius) !important;
  border-bottom-left-radius: var(--border-radius) !important;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1)) !important;
  border: none;
  padding: 1rem !important;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7) !important;
  }
}
.p-inputgroup button {
  border-top-right-radius: var(--border-radius) !important;
  border-bottom-right-radius: var(--border-radius) !important;
  padding-left: 1.5rem !important;
  padding-right: 1.75rem !important;
}

/* Ensure the input container stays above keyboard on mobile */
@supports (height: 100dvh) {
  .fixed {
    /* Use dynamic viewport height when available */
    bottom: env(keyboard-inset-height, 0px);
  }
}

/* Smooth transitions for keyboard animations */
.transition-all {
  transition-property: bottom, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

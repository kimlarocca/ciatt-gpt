<template>
  <div class="p-4 bg-gray-900 fixed bottom-0 left-0 right-0">
    <div class="max-w-5xl mx-auto">
      <InputGroup class="mb-5">
        <InputText
          placeholder="Ask anything..."
          :disabled="disabled"
          v-model="inputText"
          class="text-white"
          @keypress.enter="sendMessage"
        />
        <Button icon="pi pi-send" @click="sendMessage" :disabled="!canSend" />
      </InputGroup>

      <!-- Footer text -->
      <p class="text-xs text-gray-500 text-center mt-2">
        This parody website was not requested or authorized by any candidate or
        candidate's committee. Paid for by
        <a target="_blank" href="https://www.papnj.com">People Are People LLC</a
        >, 971 US Highway 202N #8014, Branchburg, NJ 08876.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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

const canSend = computed(() => {
  return inputText.value.trim().length > 0 && !props.disabled
})

const sendMessage = () => {
  if (canSend.value) {
    emit('send', inputText.value.trim())
    inputText.value = ''
  }
}
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

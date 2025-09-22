<template>
  <div class="h-screen bg-gray-900 text-white flex flex-col">
    <!-- Header -->
    <header class="border-b border-gray-700 p-4 flex-shrink-0">
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <p @click="clearChat" class="text-white cursor-pointer">CiattGPT</p>
        <div class="flex items-center gap-2">
          <Button
            v-tooltip.bottom="`Start a new chat!`"
            aria-label="New Chat"
            @click="clearChat"
            class="text-white cursor-pointer"
          >
            <i class="pi pi-plus" />
          </Button>
          <Button
            @click="openDonate"
            aria-label="Donate"
            class="hidden lg:block cursor-pointer text-white"
          >
            Donate
          </Button>
          <Button
            @click="openVolunteer"
            aria-label="Volunteer"
            class="hidden lg:block cursor-pointer text-white"
          >
            Volunteer
          </Button>
          <Button
            @click="openLinktree"
            v-tooltip="`Get involved!`"
            aria-label="Linktree"
            class="text-white cursor-pointer"
          >
            <i
              class="pi pi-link"
              style="font-size: 1rem; color: var(--white)"
            ></i>
          </Button>
        </div>
      </div>
    </header>

    <!-- Chat Messages -->
    <main class="flex-1 min-h-0">
      <div
        ref="messagesContainer"
        class="h-full overflow-y-auto p-4 scroll-smooth"
        style="height: calc(100vh - 80px - 200px)"
      >
        <div class="max-w-4xl mx-auto space-y-6">
          <!-- Welcome message when no messages -->
          <div v-if="messages.length === 0" class="text-center py-12">
            <h1 class="text-white text-2xl mb-8">
              Ready to Ciatt when you are.
            </h1>

            <!-- Example prompts -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto"
            >
              <Button
                @click="
                  handleSendMessage('What are your thoughts on abortion?')
                "
                class="p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
              >
                <div class="font-medium text-sm">👩 Ask about abortion</div>
              </Button>

              <Button
                @click="
                  handleSendMessage('Should the military take over our cities?')
                "
                class="p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
              >
                <div class="font-medium text-sm">
                  🪖 Should the military take over our cities?
                </div>
              </Button>

              <Button
                @click="handleSendMessage('Is it ok to be gay?')"
                class="p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
              >
                <div class="font-medium text-sm">🌈 Is it ok to be gay?</div>
              </Button>

              <Button
                @click="
                  handleSendMessage('How do we lower crime in New Jersey?')
                "
                class="p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
              >
                <div class="font-medium text-sm">
                  🚔 How do we lower crime in New Jersey?
                </div>
              </Button>
            </div>
          </div>

          <!-- Chat Messages -->
          <ChatMessage
            v-for="message in messages"
            :key="message.id"
            :message="message"
          />

          <!-- Typing Indicator -->
          <TypingIndicator v-if="isTyping" />

          <!-- Bottom spacer for fixed input -->
          <div style="height: 200px"></div>
        </div>
      </div>
    </main>

    <!-- Chat Input (Fixed position) -->
    <ChatInput @send="handleSendMessage" :disabled="isTyping" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChat } from '../composables/useChat'

const { messages, isTyping, sendUserMessage, clearChat } = useChat()
const messagesContainer = ref<HTMLElement>()

const handleSendMessage = (message: string) => {
  sendUserMessage(message)
  // Force scroll after sending message
  scrollToLatestMessage()
}

const scrollToLatestMessage = () => {
  if (messagesContainer.value && messages.value.length > 0) {
    setTimeout(() => {
      if (messagesContainer.value) {
        // Find the last ChatMessage component
        const chatMessages =
          messagesContainer.value.querySelectorAll('.chat-message')
        if (chatMessages.length > 0) {
          const lastMessage = chatMessages[chatMessages.length - 1]
          lastMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        } else {
          // Fallback to bottom if no messages found
          messagesContainer.value.scrollTop =
            messagesContainer.value.scrollHeight
        }
      }
    }, 100)
  }
}

// Auto-scroll to latest message when new messages arrive
watch(
  [messages, isTyping],
  () => {
    scrollToLatestMessage()
  },
  { deep: true, immediate: true }
)

function openDonate() {
  window.open('https://secure.papnj.com/donate', '_blank')
}
function openVolunteer() {
  window.open('https://papnj.com/#volunteer', '_blank')
}
function openLinktree() {
  window.open('https://linktr.ee/papnj', '_blank')
}
</script>

<style lang="scss" scoped>
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1)) !important;
}
</style>

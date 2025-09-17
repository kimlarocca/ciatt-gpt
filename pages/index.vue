<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col">
    <!-- Header -->
    <header class="border-b border-gray-700 p-4">
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <h1 class="text-white text-3xl font-bold">Ciatt GPT</h1>
        <div class="flex items-center gap-2">
          <button
            @click="clearChat"
            class="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
          >
            New chat
          </button>
          <button
            @click="openDonate"
            aria-label="Donate"
            class="px-4 text-white py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
          >
            Donate
          </button>
          <button
            @click="openVolunteer"
            aria-label="Volunteer"
            class="px-4 text-white py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
          >
            Volunteer
          </button>
          <button
            @click="openLinktree"
            aria-label="Linktree"
            class="px-4 text-white py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
          >
            <i
              class="pi pi-link"
              style="font-size: 1rem; color: var(--white)"
            ></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Chat Messages -->
    <main class="flex-1 overflow-hidden flex flex-col">
      <div ref="messagesContainer" class="flex-1 overflow-y-auto px-4 py-6">
        <div class="max-w-4xl mx-auto space-y-6">
          <!-- Welcome message when no messages -->
          <div v-if="messages.length === 0" class="text-center py-12">
            <p class="text-white mb-8">
              Ask me anything and I'll give you a totally unbiased response!
            </p>

            <!-- Example prompts -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto"
            >
              <button
                @click="
                  handleSendMessage(
                    'What are your thoughts on current politics?'
                  )
                "
                class="p-4 text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-left transition-colors border border-gray-700"
              >
                <div class="font-medium text-sm">💭 Ask about politics</div>
                <div class="text-gray-400 text-xs mt-1">
                  What are your thoughts on current politics?
                </div>
              </button>

              <button
                @click="
                  handleSendMessage('Can you give me an unbiased opinion?')
                "
                class="p-4 text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-left transition-colors border border-gray-700"
              >
                <div class="font-medium text-sm">
                  ⚖️ Request unbiased opinion
                </div>
                <div class="text-gray-400 text-xs mt-1">
                  Can you give me an unbiased opinion?
                </div>
              </button>

              <button
                @click="
                  handleSendMessage('Tell me about transparency in government')
                "
                class="p-4 text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-left transition-colors border border-gray-700"
              >
                <div class="font-medium text-sm">
                  🏛️ Government transparency
                </div>
                <div class="text-gray-400 text-xs mt-1">
                  Tell me about transparency in government
                </div>
              </button>

              <button
                @click="handleSendMessage('What makes a good leader?')"
                class="p-4 text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-left transition-colors border border-gray-700"
              >
                <div class="font-medium text-sm">👑 Leadership qualities</div>
                <div class="text-gray-400 text-xs mt-1">
                  What makes a good leader?
                </div>
              </button>
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
        </div>
      </div>

      <!-- Chat Input -->
      <ChatInput @send="handleSendMessage" :disabled="isTyping" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChat } from '../composables/useChat'

const { messages, isTyping, sendUserMessage, clearChat } = useChat()
const messagesContainer = ref<HTMLElement>()

const handleSendMessage = (message: string) => {
  sendUserMessage(message)
}

// Auto-scroll to bottom when new messages arrive
watch(
  [messages, isTyping],
  () => {
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    })
  },
  { deep: true }
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

import { ref, readonly } from 'vue'

export interface Message {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
}

export const useChat = () => {
    const messages = ref<Message[]>([])
    const isTyping = ref<boolean>(false)

    // Array of pre-written fake responses
    const fakeResponses = [
        "That's a great question, let's see what Donald Trump says about that before I make any statements.",
        "That's a great question - before I answer, what are your thoughts on the topic? That way I can mirror those instead of having any convictions.",
        "That's a great question - why IS it okay for Trump to make billions while in office for his whole family, but I make a website insinuating Mikie Sherrill's husband's totally legal payments via stocks were sketchy.",
        "That's a great question - why is Mikie being over the top transparent but nobody is holding me accountable to release my financial details?",
        "Only if my daddy Trump says so!",
        ""
    ]

    const addMessage = (content: string, isUser: boolean = false): string => {
        const message: Message = {
            id: crypto.randomUUID(),
            content,
            isUser,
            timestamp: new Date()
        }

        messages.value.push(message)
        return message.id
    }

    const getRandomResponse = (): string => {
        const randomIndex = Math.floor(Math.random() * fakeResponses.length)
        return fakeResponses[randomIndex]
    }

    const sendUserMessage = async (content: string) => {
        // Add user message immediately
        addMessage(content, true)

        // Show typing indicator
        isTyping.value = true

        // Simulate thinking time (1-3 seconds)
        const thinkingTime = Math.random() * 2000 + 1000

        await new Promise(resolve => setTimeout(resolve, thinkingTime))

        // Hide typing indicator and add fake response
        isTyping.value = false
        const response = getRandomResponse()
        addMessage(response, false)
    }

    const clearChat = () => {
        messages.value = []
        isTyping.value = false
    }

    return {
        messages: readonly(messages),
        isTyping: readonly(isTyping),
        sendUserMessage,
        clearChat
    }
}
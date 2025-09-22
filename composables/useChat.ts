import { ref, readonly } from 'vue'
import keywordsData from '../utils/keywords.json'

export interface Message {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
}

interface KeywordEntry {
    Keywords: string[]
    Response: string
}

export const useChat = () => {
    const messages = ref<Message[]>([])
    const isTyping = ref<boolean>(false)
    const lastResponseIndex = ref<number | null>(null)

    // Load keywords from JSON file
    const keywordEntries: KeywordEntry[] = keywordsData

    // Array of pre-written fake responses
    const fakeResponses = [
        "That's a great question, let's see what my daddy Donald Trump says about that before I make any statements.",
        "That's a great question - before I answer, what are your thoughts on the topic? That way I can mirror those instead of having any convictions.",
        "That's a great question. It's important to remember that Joe Biden and Phil Murphy are accountable for all of your problems.",
        "Remember, friends, we only need to hold Democrats accountable for their actions, inactions, and anything else wrong in our lives.",
        "Did I mention I'm a bit of a Libertarian? But please don't swear. Or smoke cannabis. Or make a medical decision with your doctor.",
        "That's a great question, but daddy Trump doesn't want me to answer!",
        "That's a great question - let me just check what my supporters want to hear first, then I'll give you that exact opinion.",
        "That's a great question - I need to poll my base before I can form any independent thoughts on this matter.",
        "That's a great question - hold on while I wait for Trump to tell me what my position should be.",
        "That's a great question - but first, let me see which way the political wind is blowing today.",
        "That's a great question - but first I think we need to have a broader conversation about law-abiding immigrants and how they should be deported.",
        "That's a great question - let me be clear, this is something we're actively not looking into.",
        "That's a great question - I've always been inconsistent on this issue, and I think the people of New Jersey know where I stand.",
        "That's a great question - but what we really need to focus on is banning abortions.",
        "That's a great question -  I agree with Trump's answer on that. I'll literally let Donald Trump do anything if he'll put me in the big boy chair!",
        "That's a great question - my position has always been clear, but don't worry, I'll flip-flop as needed to stay in power.",
        "That's a great question - let me just say that I have a very good brain, and I know words very well.",
        "That's a great question - but let me tell you, nobody knows more about this issue than I do, believe me.",
        "That's a great question - but let me just say that I've been very consistent on this issue, unlike some people who change their positions all the time.",
        "That's a great question - but let me just say that I'm the most qualified person to answer it, because I've been very successful in winning elections.",
        "That's a great question - but let me just say that I'm the only one who can fix this problem, because I have a very good brain.",
        "That's a great question - but let me just say that I'm the best thing that's ever happened to New Jersey, and nobody has done more for New Jersey than I have.",
        "That's a great question - but let me just say your questions are Not My Problem, just like hungry children are Not My Problem."
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

    const findKeywordMatch = (userMessage: string): string | null => {
        const lowerMessage = userMessage.toLowerCase()

        // Check each keyword entry for matches
        for (const entry of keywordEntries) {
            // Check if any keyword from this entry appears in the user message
            const hasMatch = entry.Keywords.some(keyword =>
                lowerMessage.includes(keyword.toLowerCase())
            )

            if (hasMatch) {
                return entry.Response
            }
        }

        return null
    }

    const getResponse = (userMessage: string): string => {
        // First check for keyword matches
        const keywordResponse = findKeywordMatch(userMessage)
        if (keywordResponse) {
            return keywordResponse
        }

        // If no keyword match, fall back to random response
        return getRandomResponse()
    }

    const getRandomResponse = (): string => {
        let randomIndex: number

        // If we have only one response, just return it
        if (fakeResponses.length === 1) {
            return fakeResponses[0]
        }

        // Keep generating random indices until we get one different from the last
        do {
            randomIndex = Math.floor(Math.random() * fakeResponses.length)
        } while (randomIndex === lastResponseIndex.value && fakeResponses.length > 1)

        // Update the last response index
        lastResponseIndex.value = randomIndex

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

        // Hide typing indicator and add smart response
        isTyping.value = false
        const response = getResponse(content)
        addMessage(response, false)
    }

    const clearChat = () => {
        messages.value = []
        isTyping.value = false
        lastResponseIndex.value = null
    }

    return {
        messages: readonly(messages),
        isTyping: readonly(isTyping),
        sendUserMessage,
        clearChat
    }
}
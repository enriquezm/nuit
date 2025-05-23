import { ref, watch, type Ref } from 'vue'

export function useTypingAnimation(text: Ref<string>, speed = 50) {
  const displayedText = ref('')
  const isResponding = ref(false)
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const type = (fullText: string, index = 0) => {
    if (index > fullText.length) {
      timeoutId = null
      return
    }

    displayedText.value = fullText.slice(0, index)

    timeoutId = setTimeout(() => {
      isResponding.value = index < fullText.length
      type(fullText, index + 1)
    }, speed)
  }

  watch(text, (newText) => {
    if (timeoutId) clearTimeout(timeoutId)
    displayedText.value = ''
    if (newText) {
      type(newText, 1)
    }
  }, { immediate: true })

  return {
    displayedText,
    isResponding,
  }
}

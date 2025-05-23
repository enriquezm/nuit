import qaMapRaw from '@/assets/qa.json';
import { ref } from 'vue';

export enum ResponseType {
  TEXT = 'text',
  CLOSE_EYES = 'close_eyes',
}

interface Response {
  text?: string;
  type?: ResponseType;
  html?: string;
}

const qaMap = qaMapRaw as Record<string, Response>;

export function useAskResponse() {
  const question = ref('')
  const response = ref<Response>({} as Response);
  const isHtml = ref(false);
  
  const availableCommands = computed(() => Object.keys(qaMap));

  const submitQuestion = () => {
    const trimmed = question.value.trim().toLowerCase()
    if (!trimmed) return

    const match = qaMap[trimmed]
    if (match) {
      response.value.text = match.html || match.text;
      response.value.type = match.type || ResponseType.TEXT;
      isHtml.value = !!match.html;
    } else {
      response.value.text = `I don't know how to answer "${question.value}".`;

      isHtml.value = false;
    }

    question.value = '';
  }

  const askGPT = async (question: string) => {
    const { data } = await useFetch('/api/ask', {
      method: 'POST',
      body: { question },
    });

    response.value.text = data.value?.answer ?? '';
  };
  

  return {
    question,
    response,
    isHtml,
    submitQuestion,
    availableCommands,
    askGPT,
  }
}

<template>
  <div class="ask">
    <div class="ask__sidebar">
      <header class="ask__sidebarHeader">
        <p>finn_bot v1.0-u32.33</p>
      </header>
      <div class="ask__finnBot">
        <finn-bot :is-talking="isResponding" :response-type="responseType" />
      </div>
      <ul class="ask__commandsList">
        <li v-for="command in availableCommands" class="ask__command">/<button class="ask__commandButton" @click="handleCommandButtonClick">{{ command }}</button></li>
      </ul>
    </div>
    <div class="ask__response">
      <p v-if="!isHtml">{{ displayedText }}</p>
      <p v-else v-html="displayedText"></p>
    </div>
    <div class="ask__input">
      <span class="ask__inputSlash">/</span>
      <input
        ref="inputRef"
        class="ask__inputField" 
        v-model="question"
        @keyup.enter="handleSubmitQuestion"
        :placeholder="randomCommand"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'simple',
})

import { onMounted, ref } from 'vue';

const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputRef.value?.focus();
});

import { useAskResponse } from '~/composables/useAskResponse';
import { useTypingAnimation } from '~/composables/useTypingAnimation';

const { question, response, isHtml, submitQuestion, availableCommands, askGPT } = useAskResponse();

const responseText = computed(() => response.value.text || '');
const responseType = computed(() => response.value.type);

const enableGpt = ref(false);

const randomCommand = computed(() => {
  const commands = availableCommands.value;
  return commands[Math.floor(Math.random() * commands.length)];
});

const handleCommandButtonClick = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  question.value = `${target.innerText}`;
  
  submitQuestion();
};

const gptResponse = ref<string>('');

const handleSubmitQuestion = () => {
  if (question.value.trim() === '') {
    return;
  }

  if (!enableGpt.value) {
    submitQuestion();

    return;
  }

  if (availableCommands.value.includes(question.value)) {
    submitQuestion();
  } else {
    askGPT(question.value).then(response => {
      gptResponse.value = response ?? '';
    });
  }

  question.value = '';
};

const { displayedText, isResponding } = useTypingAnimation(responseText, 5);
</script>

<style scoped lang="scss">
.ask {
  display: grid;
  grid-template-columns: minmax(50px, 320px) 3fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'sidebar response' 'sidebar input';
  height: 100vh;
  font-family: 'Courier Prime', monospace;

  &__sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #0f0f0f;
    padding: 24px;
  }
  
  &__commandsList {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  &__commandButton {
    background: none;
    border: none;
    color: #fff;
    font-family: 'Courier Prime', monospace;
    cursor: pointer;

    &:hover {
      color: goldenrod;
    }
  }

  &__response {
    grid-area: response;
    background-color: #141414;
    color: #fff;
    flex-grow: 2;
    padding: 24px;
    font-size: 16px;
  }

  &__input {
    grid-area: input;
    display: flex;
    align-items: center;
    width: 100%;
    
    &Slash,
    &Field {
      font-family: 'Courier Prime', monospace;
      background-color: #000;
      color: #fff;
      font-size: 16px;
    }

    &Slash {
      padding: 24px 0 24px 24px;
    }
    
    &Field {
      width: 100%;
      padding: 24px 24px 24px 4px;
      border: none;
      
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
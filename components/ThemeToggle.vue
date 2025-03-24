<template>
  <button class="themeToggle" @click="setColorMode">
    <Icon :name="icon" size="20px"/>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const setColorMode = () => {
  console.log('changing color mode');
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

const icon = computed(() => colorMode.value === 'dark' ? 'fe:sunny-o' : 'fe:moon');

watchEffect(() => {
  console.log('Color mode:', colorMode.value) // Debug if it changes
})
</script>

<style scoped lang="scss">
.themeToggle {
  padding: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dark-mode {
  .themeToggle {
    color: white;
  }
}
</style>
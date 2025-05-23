<template>
  <button class="themeToggle" @click="setColorMode">
    <Icon :name="icon" size="20px"/>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const setColorMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
};

const icon = ref(colorMode.value);;

watch(
  () => colorMode.value,
  (newColorMode) => {
    icon.value = newColorMode === 'dark' ? 'fe:sunny-o' : 'fe:moon';
  },
  { immediate: true }
);

onMounted(() => {
  console.log('icon', icon.value);
  console.log('colormode', colorMode);
});
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
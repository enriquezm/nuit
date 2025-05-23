<template>
  <section class="lab">
    <h1 class="heading1">The lab.</h1>
    <ul class="lab__list">
      <li class="card">
        <p class="card__heading">Gesture: hover and press</p>
        <motion.button
          class="button button--purple"
          :whileHover="{ scale: 1.2 }"
          :whilePress="{ scale: 0.8 }"
        />
      </li>
      <li class="card">
        <p class="card__heading">Gesture: press</p>
        <motion.button
          class="button button--yellow"
          :whilePress="{ scale: 0.5, rotate: 10 }"
        />
      </li>
      <li class="card">
        <p class="card__heading">Gesture: drag</p>
        <motion.button
          class="button button--pink"
          drag :whileDrag="{ scale: 1.2, backgroundColor: '#6F56FF' }"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

definePageMeta({
  layout: 'base',
})
</script>

<style scoped lang="scss">
.lab {
  max-width: 600px;
  width: 100%;
  padding: 40px 0;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
  }
}

.heading1 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
}

.heading2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 18px;
}

.paragraph {
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 64px;
  list-style-type: none;
  width: 100%;
  position: relative;

  &__heading {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 8px;
    left: 8px;
  }
}

.dark-mode {
  .card {
    border-color: rgba(255, 255, 255, 0.847);

    &__heading {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

.button {
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #CCCCCC;

  &--purple {
    background-color: #6F56FF;
  }

  &--yellow {
    background-color: #F9C80E;
  }

  &--pink {
    background-color: #F45B69;
  }
}
</style>
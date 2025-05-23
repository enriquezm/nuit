<template>
  <section class="intro">
    <div class="avatar">
      <NuxtImg src="/avatar.png" width="64" height="64" alt="Logo" />
    </div>
    <h1 class="heading1">Hey there!</h1>
    <p class="paragraph">
      I'm a frontend engineer with a passion for crafting intuitive, accessible, and visually engaging user experiences using Vue and Nuxt.
    </p>
    <p class="paragraph">
      I love bringing designs to life with clean, efficient code, ensuring that every interaction feels smooth and natural. Whether it's building scalable component libraries, optimizing performance, or collaborating with designers to refine UI details, I enjoy creating digital experiences. 
    </p>
  </section>
  <section class="socials">
    <h2 class="heading2">Find me on</h2>
    <ul class="socials__list">
      <li>
        <a class="socials__item" href="https://github.com/enriquezm">
          <span class="socials__itemHandler">Github</span>
          <div class="socials__itemDivider"></div>
          <span class="socials__itemIcon"><Icon name="fe:github" mode="svg" size="24px"/></span>
        </a>
      </li>
      <li>
        <a class="socials__item" href="https://www.linkedin.com/in/mylesenriquez/">
          <span class="socials__itemHandler">LinkedIn</span>
          <div class="socials__itemDivider"></div>
          <span class="socials__itemIcon"><Icon name="ri:linkedin-box-fill" mode="svg" size="24px" /></span>
        </a>
      </li>
    </ul>
  </section>
  <section class="socials">
    <h2 class="heading2">Experience</h2>
    <ul class="socials__list">
      <li v-for="experience in experiences" :key="experience.url">
        <a class="socials__item" :href="experience.url">
          <span class="socials__itemHandler">{{ experience.title }} @ {{ experience.company }}</span>
          <div class="socials__itemDivider"></div>
          <span class="socials__itemIcon">{{ experience.duration }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useExperiences } from '~/composables/useExperiences';

const { experiences } = useExperiences();

definePageMeta({
  layout: 'base',
})
</script>

<style scoped lang="scss">
.intro {
  max-width: 600px;
  width: 100%;
  padding: 40px 0;
}

.avatar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  border-radius: 100%;
}

.heading1 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
}

.heading2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}

.paragraph {
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
}

.socials {
  max-width: 600px;
  width: 100%;
  padding: 24px 0;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;

    &:hover {
      .socials__itemDivider {
        border-bottom: 1px solid rgb(23, 23, 23);
      }
    }

    &Divider {
      flex-grow: 1;
      border-bottom: 1px dashed rgb(149, 149, 149);
    }
  }
}

.light-mode {
  .socials__item {
    color: rgb(23, 23, 23);
  }
}

.dark-mode {
  .socials__item {
    color: white;

    &:hover {
      .socials__itemDivider {
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
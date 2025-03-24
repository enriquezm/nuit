<template>
  <main class="baseLayout">
    <nav class="baseNav">
      <NuxtLink class="baseNav__logo" to="/"><p>nuit.</p></NuxtLink>
      <ul class="baseNav__links">
        <li><NuxtLink class="baseNav__link" to="/">home</NuxtLink></li>
        <li><NuxtLink class="baseNav__link" to="/about">about</NuxtLink></li>
      </ul>
      <ThemeToggle />
    </nav>
      <slot />
  </main>
</template>

<style scoped lang="scss">
.baseLayout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px; /* Add some padding around the layout */
}

.baseNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 24px;
  max-width: 600px;
  width: 100%;

  &__links {
    display: flex;
    gap: 16px;
    list-style: none;
  }

  &__logo {
    color: rgb(23, 23, 23);
    text-decoration: none;
  }

  &__link {
    font-size: 16px;
    font-weight: 400;
    color: rgb(23, 23, 23);
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* Add hover effect for links */
    }
  }
}

.dark-mode {
  .baseNav {
    &__logo,
    &__link {
      color: white;
    }
  }
}
</style>
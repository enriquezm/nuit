<template>
  <main class="baseLayout">
    <nav class="baseNav">
      <p>nuit.</p>
      <ul class="baseNav__links">
        <li><NuxtLink class="baseNav__link" to="/">home</NuxtLink></li>
        <li><NuxtLink class="baseNav__link" to="/about">about</NuxtLink></li>
      </ul>
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
  background-color: #f0f0f0; /* Light background for contrast */
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
</style>
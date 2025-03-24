// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  colorMode: {
    preference: 'system', // default theme
    fallback: 'light', // fallback theme
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode' // Ensure the key is correctly stored
  },
})
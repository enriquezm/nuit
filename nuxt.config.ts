export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'motion-v/nuxt',
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/scss/global.scss'],
  colorMode: {
    preference: 'system', // default theme
    fallback: 'light', // fallback theme
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode' // Ensure the key is correctly stored
  },
  alias: {
    '@/components': './components',
    '@/assets': './assets',
  }
})
export default defineNuxtConfig({
  compatibilityDate: '2026-02-16',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  typescript: {
    strict: true,
    typeCheck: true
  }
})

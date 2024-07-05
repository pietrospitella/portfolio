// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-anchorscroll'
  ],
  anchorscroll: {
    hooks: [
      'page:transition:finish',
    ],
  },
  build: {
    transpile: ['gsap'],
  },
  compatibilityDate: "2024-07-04"
})
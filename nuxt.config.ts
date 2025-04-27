// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@element-plus/nuxt'
  ],
  // elementPlus:{
  // },
  // app: {
  //   keepalive: true,
  // },
  devServer: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    },
    loadingTemplate: () => '<div>Loading...</div>'
  },
  // ssr: false,
  // routeRules: {
  //   '/': { prerender: true },
  //   '/about': { prerender: true },
  // }
  // experimental: {
  //   componentIslands: true
  // }
})
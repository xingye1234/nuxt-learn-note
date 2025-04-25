// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon'
  ],
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
  experimental:{
    componentIslands:true
  }
})
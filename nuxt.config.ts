// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@element-plus/nuxt'
  ],
  app: {
    // head配置 主要是针对SEO优化  useSeoMeta(), useHead() 这两个hooks 都可以使用(组件中使用)
    head: {
      title: 'Nuxt 3',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  routeRules: {
    '/': { prerender: true },
    // // Cached for 1 hour
    // '/api/*': { cache: { maxAge: 60 * 60 } },
    // // Redirection to avoid 404
    // '/old-page': {
    //   redirect: { to: '/new-page', statusCode: 302 }
    // }
  },
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
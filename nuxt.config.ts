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
    //全局设置页面过渡动画 目前有bug，会导致热更新报错
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    // },
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
    // loadingTemplate: () => '<div>Loading...</div>'
  },
  // routeRules: {
  //   // 静态生成 (SSG)
  //   '/': { prerender: true },
    
  //   // 客户端渲染 (SPA)
  //   '/about': { ssr: false },
    
  //   // 重定向
  //   '/old-page': { redirect: '/new-page' },
    
  //   // 缓存控制
  //   '/api/*': { cache: { maxAge: 60 * 60 } },
    
  //   // 自定义headers
  //   '/secure': { headers: { 'x-secure': 'true' } }
  // },
  
  // experimental: {
  //   componentIslands: true
  // }
})
export default defineNuxtPlugin({
    name: 'my-plugin',
    enforce: 'pre', // or 'post'
    // async setup (nuxtApp) {
    //   // this is the equivalent of a normal functional plugin
    //   // console.log('------> plugins setup', nuxtApp)
    //   // return {
    //   //   provide: {
    //   //     // 可以通过 useNuxtApp().$myPluginKey 来访问到这个值
    //   //     myPluginKey: 'Hello from plugin!'
    //   //   }
    //   // }
    // },
    hooks: {
      // You can directly register Nuxt app runtime hooks here

      // app:created 参考 https://nuxt.com/docs/api/advanced/hooks 生命周期hook

      'app:created'() {
        const nuxtApp = useNuxtApp()
        // do something in the hook

        // console.log('--------> plugins runtime hook', nuxtApp)
      }
    },
    env: {
      // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
      islands: true
    }
  })
  
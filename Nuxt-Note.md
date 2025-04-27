# Nuxt

## 返回的对象数据就像一个全局变量一样，可以通过plugins -> provide 注入, 也可以通过返回的对象上provide方法实现。
```js
const nuxtapp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)

console.log(nuxtApp.$hello('name'))


// 在plugin中使用 hook
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    /* your code goes here */
  })
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
    // if (import.meta.client) {
    //   console.log(..._args)
    // }
  })
})
```

# Directory structure

## layouts 设置基础布局

###  可通过setPageLayout 动态设置布局
```js
setPageLayout('custom')
```
### 通过definePageMeta为当前页面指定布局
```js
//macro 宏定义,拓展功能很多，例如可以单独设置当前页面的keepAlive，transition，meta，加载页面等信息。
definePageMeta({
  layout: 'default'
})
```

## shared & utils 同为 auto-import 工具 区别 utils 只会被自动导入到客户端中（界面，组件），而 shared 会被导入到服务端和客户端中（接口，工具）

## server 服务端目录
```js
// server/routes/hello.ts  生成 http://localhost:3000/hello
// server/api/hello.ts  生成 http://localhost:3000/api/hello
// server/api/profile/[id].ts 动态匹配profile/1  profile/2 等路径
// server/api/foo/[...].ts 匹配foo后的所有路径  /foo/1 /foo/1/2 /foo/1/2/3 等路径
// server/api/hello.get.ts 生成get方法   server/api/hello.post.ts 生成post方法
```

## middleware 中间件（auth可能需要添加.global后缀）

###  类似于路由守卫  可以在路由跳转前进行拦截，判断是否有权限访问该路由，或者进行一些其他操作。

```js

// abortNavigation() 中断导航，跳转到其他页面 只能在middleware中使用
// navigateTo('/') 跳转到其他页面
//两个全局导航函数

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    return navigateTo('/')
  }
})
```

## 异步请求 

### useFetch  主要用于组件中，返回的数据是响应式的，当数据发生变化时，页面会自动更新。
```js
// 在组件内发起 HTTP 请求，且需要自动管理加载状态、错误信息时使用。
// 希望请求能与 Nuxt 的 SSR 和 SSG 无缝集成时使用。
const { data, pending, error, refresh } = await useFetch('/api/hello'),
```
### $fetch 直接获取到数据，不是响应式的。
```js
// 当需要在非组件环境（如插件、工具函数）发起 HTTP 请求时使用。
// 当需要手动控制请求流程，自行处理加载状态和错误时使用。
const data = await $fetch('/api/hello')

//获取到的数据会在客户端和服务端看到

```
### useAsyncData  返回一个包含响应数据、加载状态、错误信息的响应对象，和 useFetch 类似，但更灵活，可自定义数据获取函数。
```js
// 当需要自定义数据获取逻辑，如使用自定义函数或第三方库获取数据时使用。
// 希望在服务端渲染时提前获取数据，且需要灵活控制数据获取过程时使用。
const { data, pending, error } = await useAsyncData('hello', () => $fetch('/api/hello')),
```
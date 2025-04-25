# Nuxt

## 全局钩子函数，可以在任何地方使用，返回的对象数据就像一个全局变量一样，可以通过plugins -> provide 注入。
```js
useNuxtApp()
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

###  server/routes/hello.ts  生成 http://localhost:3000/hello
###  server/api/hello.ts  生成 http://localhost:3000/api/hello
###  server/api/profile/[id].ts 动态匹配profile/1  profile/2 等路径
###  server/api/foo/[...].ts 匹配foo后的所有路径  /foo/1 /foo/1/2 /foo/1/2/3 等路径
###  server/api/hello.get.ts 生成get方法   server/api/hello.post.ts 生成post方法


## middleware 中间件目录

###  类似于路由守卫  可以在路由跳转前进行拦截，判断是否有权限访问该路由，或者进行一些其他操作。

```js

// abortNavigation() 中断导航，跳转到其他页面
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
<template>
  <div>
    <h1>Welcome to My Website</h1>
    <p>This is the home page of my website.</p>
    <button @click="$router.push('/about')">Go to About Page</button>
    <br />
    <button @click="count++">{{ count }}</button>

    <div>
      response: {{ data.msg }}
    </div>
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  keepalive: true,
  key:(route) => route.fullPath,
  pageTransition: {
    name: 'fade',
    mode: 'out-in', 
  },
  title: 'Home Page',
})

const count = ref(0)
const { data } = await useFetch('/api/hello');

// console.log(data)

// const res = await useFetch('/hello');

// console.log(res)

// console.log(res)
</script>

<style>
/* 定义 fade 过渡的样式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
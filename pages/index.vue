<template>
  <div>
    <h1>Welcome to My Website</h1>
    <p>This is the home page of my website.</p>
    <button @click="$router.push('/about')">Go to About Page</button>
    <br />
    <!-- <button @click="count++">{{ count }}</button> -->

    <el-button type="primary" @click="count++">{{ count }}</el-button>

    <div>
      response: {{ data!.msg }}
    </div>
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  keepalive: true,
  key: (route) => route.fullPath,
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
})



const count = ref(0)
const { data } = await useFetch('/api/hello');

const res = await $fetch('/api/profile/1');

console.log('------->fetch',res);

// const { data: asyncData, status, error, refresh, clear } = await useAsyncData(
//   'api-hello',
//   () => $fetch('/api/hello')
// )

// console.log('------->', asyncData, status, error);

// console.log(data)

// const res = await useFetch('/hello');

// console.log(res)

// console.log(res)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
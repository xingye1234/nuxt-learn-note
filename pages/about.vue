<template>
    <div>
        About Page
        <input type="text">
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    keepalive: true,
    key:(route) => route.fullPath,
})

useSeoMeta({
    title: 'About Page',
})

const requestFetch = useRequestFetch()
const { data: forwarded } = await useAsyncData(() => requestFetch('/api/hello'))
console.log('------->forwarded',forwarded.value);

// const url = useRequestURL();

// console.log('------->useRequestURL',url);

// const route = useRoute();
// console.log('------->',route);
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
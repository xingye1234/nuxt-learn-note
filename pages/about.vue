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
    pageTransition: {
        name: 'fade',
        mode: 'out-in',
    },
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
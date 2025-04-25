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
    title: 'About Page',
    pageTransition: {
        name: 'fade',
        mode: 'out-in',
    },
})
</script>
<template>
   <NuxtLayout >
      <NuxtPage />
   </NuxtLayout>
</template>
<script setup lang="ts">
// const config = useAppConfig();

const nuxtApp = useNuxtApp();

console.log('------->nuxtApp',nuxtApp);

// console.log('------->config',config);

useSeoMeta({
   title: 'Nuxt Demo',
   description: 'This is the description of the nuxt demo',
   ogTitle: 'Nuxt Demo',
})
</script>
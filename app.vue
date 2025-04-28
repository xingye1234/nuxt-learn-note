<template>
   <NuxtLayout >
      <NuxtPage />
   </NuxtLayout>
</template>
<script setup lang="ts">
// const config = useAppConfig();

const nuxtApp = useNuxtApp();

// console.log('------->nuxtApp',nuxtApp);

// console.log('------->config',config);

const runTimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

// console.log('------->appConfig',appConfig);
// console.log('------->runTimeConfig',runTimeConfig);

// useSeoMeta({
//    title: 'Nuxt Demo',
//    description: 'This is the description of the nuxt demo',
//    ogTitle: 'Nuxt Demo',
// })
</script>
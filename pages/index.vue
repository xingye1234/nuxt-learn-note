<template>
  <div class="home-content">
    <h1>Welcome to My Website</h1>
    <p>This is the home page of my website.</p>


    <NuxtLink to="/about">Go to About Page</NuxtLink>

    <br />

    <div class="btn">
      <el-button type="primary" @click="count++">{{ count }}</el-button>
    </div>

    <div>
      <span class="res">response</span>: {{ data!.msg }}
    </div>
  </div>
</template>
<script setup lang="ts">

definePageMeta({
  keepalive: true,
  key: (route) => route.fullPath
})



const count = ref(0)
const { data } = await useFetch('/api/hello');

// const res = await $fetch('/api/profile/1');

// console.log('------->fetch',res);

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

<style scoped lang="less">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.home-content{
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  h1{
    text-align: center;
  }
  p{
    font-weight: bold;
    text-align: center;
    font-style: italic;
  }
  a{
    color:skyblue;
    margin-bottom: 20px;
  }
  .btn{
    margin: 25px 0;
  }
  .res{
    color: red;
    font-weight: bold;
  }
}
</style>
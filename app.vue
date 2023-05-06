import { NuxtPage, NuxtLink } from './.nuxt/components';
<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// import '~/assets/global.scss'
console.log(111)
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - 村长的技术空间1` : '村长的技术空间'
  }
})
onBeforeMount(() => {
  console.log('onBeforeMount')
})
</script>

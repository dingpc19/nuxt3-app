<template>
  <div class="p-5">
    <Head>
      <Title>{{ data?.title }}</Title>
    </Head>
    <!-- 显示错误信息 -->
    <div v-if="error">{{ errorMsg }}</div>
    <div v-else-if="pending">加载中...</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
    <!-- 评论区 -->
    <div class="py-2">
      <NInput v-model:value="value" type="textarea" placeholder="输入评论" />
      <NButton @click="onSubmit">发送</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from '#app'

const router = useRouter()
const route = useRoute()
// 设置为当前文章id
// useHead({
//   title: route.params.id as string
// })
// const { title, content } = await $fetch(`/api/detail/${router.params.id}`)
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`)
const { data, pending, error } = await useAsyncData('post', fetchPost)
// 获取服务端返回的错误信息
const errorMsg = computed(() => (error.value as NuxtError)?.statusMessage)
console.log('errorMsg.value', errorMsg.value)
// 显示全屏错误页
watchEffect(() => {
  // error 存在，则显示错误页
  if (unref(error)) {
    showError(errorMsg.value as string)
  }
})
const value = useState('comment', () => '')
// const isLogin = useLogin()
const store = useUser()
const { isLogin } = storeToRefs(store)
const onSubmit = () => {
  if (isLogin.value) {
    // 提交留言...
    value.value = ''
  } else {
    // 要求登录
    router.push('/login?callback=' + route.path)
  }
}
</script>

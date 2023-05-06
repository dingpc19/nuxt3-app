// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  nitro: {
    preset: 'vercel'
  },
  app: {
    head: {
      title: '村长的技术空间',
      meta: [
        { name: 'description', content: '专注于前端技术分享' },
        { name: 'keywords', content: 'nuxt,vue,ts,frontend' }
      ]
    }
  },
  runtimeConfig: {
    // 只能用于服务端的 keys
    apiSecret: '123',
    // 可用于客户端的 keys
    public: {
      apiBase: '/api'
    }
  },
  // css: ['assets/global.scss'],
  // vite: {
  //   // @ts-expect-error
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "~/assets/_variables.scss";'
  //       }
  //     }
  //   }
  // },
  // imports: {
  //   // Auto-import pinia stores defined in `~/stores`
  //   dirs: ['stores']
  // },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs'
        ]
      }
    ]
  ]
})

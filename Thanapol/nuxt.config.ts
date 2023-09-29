// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' }]
    }
  },
  ssr:false,
  router:{
    options:{
      hashMode:false,
    },
  },
  nitro:{
    devProxy:{
      '/api':{
        target:'http://127.0.0.1:1880/api',
        changeOrigin:true,
      },
    },
  },
})
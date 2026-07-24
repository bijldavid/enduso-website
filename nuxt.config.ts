// https://nuxt.com/docs/api/configuration/nuxt-config
if (process.platform === 'darwin') {
  process.env.TMPDIR = '/tmp'
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  app: {
    viewTransition: true,
  },
})

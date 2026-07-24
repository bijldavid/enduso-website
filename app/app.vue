<template>
    <NuxtLayout />
</template>

<script setup>
import '~/assets/css/reset.css'
import '~/assets/css/general.css'
import '~/assets/css/fonts.css'

const { baseURL, cdnURL } = useRuntimeConfig().app

useHead({
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: `${cdnURL || baseURL}favicon.ico`,
        },
    ],
})
</script>
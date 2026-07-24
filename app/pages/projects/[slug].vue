<template>
    <div class="banner">
        <img :src="project.bannerImage" :alt="project.alt">
    </div>
    <main>
        <div class="container">
            <Breadcrumbs>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/projects">Projecten</NuxtLink>
                <NuxtLink :to="`/projects/${project.id}`">{{ project.label }}</NuxtLink>
            </Breadcrumbs>

            <div class="text-container">
                <h1>{{ project.title }}</h1>
                <component :is="projectComponent" v-if="projectComponent" />
            </div>
        </div>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectDetailBySlug } from '~/data/project-details'
import Thialf from '~/components/projects/Thialf.vue'
import WitFlowerBulbs from '~/components/projects/WitFlowerBulbs.vue'
import Bovegro from '~/components/projects/Bovegro.vue'
import GolfbaanSpierdijk from '~/components/projects/GolfbaanSpierdijk.vue'
import Hemrik from '~/components/projects/Hemrik.vue'
import Blankendaal from '~/components/projects/Blankendaal.vue'

const route = useRoute()
const project = computed(() => getProjectDetailBySlug(String(route.params.slug ?? '')))

const projectComponents = {
    thialf: Thialf,
    golfbaanspierdijk: GolfbaanSpierdijk,
    witflowerbulbs: WitFlowerBulbs,
    bovegro: Bovegro,
    hemrik: Hemrik,
    blankendaal: Blankendaal,
}

const projectComponent = computed(() => project.value ? projectComponents[project.value.id] ?? null : null)

useHead(() => ({
    title: project.value ? `${project.value.label} | Projecten` : 'Projecten',
    meta: [
        {
            name: 'description',
            content: project.value?.description ?? 'Projectpagina van Enduso',
        },
    ],
}))
</script>

<style scoped>
.banner {
    position: relative;
    height: 450px;
    width: 100%;
}

.banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30%;
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
    z-index: 1;
}

.banner img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

main {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--neutral-100);
    padding-top: 3rem;
}


main .container {
    display: grid;
    gap: 2rem;
}

main .container .text-container {
    display: grid;
    gap: 2rem;
}

main .container .text-container h1 {
    font-family: artavion, sans-serif;
    font-weight: 400;
    line-height: 1.3em;
    color: var(--blue);
    font-size: var(--h2-size);
    text-wrap: balance;
}



@media (width > 700px) {

    main .container {
        max-width: 800px;
        margin-inline: auto;
    }

}
</style>
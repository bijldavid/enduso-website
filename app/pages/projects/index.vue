<template>
    <main>
        <div class="container">
            <Breadcrumbs>
                <a href="/">Home</a>
                <NuxtLink href="/projects">Projecten</NuxtLink>
            </Breadcrumbs>

            <h1>Bekijk alle projecten</h1>

            <div>
                <ul>
                    <li v-for="project in projects" :key="project.id" class="project-card">
                        <NuxtLink :to="`/projects/${project.id}`">
                            <div class="image-container">
                                <img :src="project.bannerImage" :alt="project.alt">
                            </div>
                            <h2>{{ project.label }}</h2>
                            <p>{{ project.title }}</p>
                        </NuxtLink>
                    </li>
                </ul>

            </div>
        </div>
    </main>
</template>

<script setup>
import { projectDetails } from '~/data/project-details'

const projects = projectDetails
</script>

<style scoped>
main {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--neutral-100);
    padding-top: 9rem;
}


main .container {
    display: grid;
    gap: 2rem;
}

main .container h1 {
    font-family: artavion, sans-serif;
    font-weight: 400;
    line-height: 1.3em;
    color: var(--blue);
    font-size: var(--h2-size);
    text-wrap: balance;
}

main .container ul {
    display: grid;
    gap: 2rem;
}

main .container ul li:nth-of-type(4n + 1) {
    --brand-background: var(--pastel-orange);
    --brand-color: var(--orange);
}

main .container ul li:nth-of-type(4n + 2) {
    --brand-background: var(--pastel-purple);
    --brand-color: var(--purple);
}

main .container ul li:nth-of-type(4n + 3) {
    --brand-background: var(--pastel-blue);
    --brand-color: var(--blue);
}

main .container ul li:nth-of-type(4n + 4) {
    --brand-background: var(--pastel-green);
    --brand-color: var(--green);
}

main .container ul li {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
}

main .container ul li .image-container {
    position: relative;
    width: 100%;
    height: 350px;
    z-index: 0;
}

main .container ul li .image-container::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0));
    z-index: 1;
}

main .container ul li .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    scale: 1;
    transition: scale 1s ease;
}

main .container ul li:hover .image-container img {
    scale: 1.05;
}

main .container ul li h2 {
    position: absolute;
    top: 0;
    left: 0;
    padding: .5rem 1.5rem;
    border-radius: 0 0 15px 0;
    background: var(--brand-background);
    z-index: 1;
    font-family: poppins, sans-serif;
    font-weight: 500;
    line-height: 1.5em;
    color: var(--brand-color);
    font-size: var(--sub-title-size);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

main .container ul li p {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: var(--h3-size);
    color: var(--neutral-100);
    text-wrap: balance;
}

@media (width > 700px) {
    main .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    main .container ul {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
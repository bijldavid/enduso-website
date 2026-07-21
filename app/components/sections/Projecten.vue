<template>
    <section id="projects" data-reveal-ignore>
        <div class="container">
            <h2>Bekijk onze projecten</h2>

            <div class="carousel">
                <ul class="no-scrollbar" ref="carouselEl">
                    <li v-for="(project, index) in projects" :key="project.id" class="reveal-ignore">
                        <div class="text-container">
                            <h3 class="reveal-ignore">
                                {{ project.title }}
                                <span>{{ project.highlight }}</span>
                                {{ project.afterHighlight }}
                            </h3>
                            <NuxtLink :to="`/projects/${project.id}`" class="reveal-ignore">
                                <span>Lees meer</span>
                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <polyline class="cls-1" points="7.721 2.01 16.279 12 7.721 21.99" />
                                </svg>
                            </NuxtLink>
                        </div>
                        <div class="meta-data">
                            <p class="index">{{ project.index }}</p>
                            <p class="project-label">{{ project.label }}</p>
                        </div>
                        <img :src="project.image" :alt="project.alt">
                    </li>
                </ul>
                <div class="navigation glass-border-light">
                    <button class="left" @click="prev" :disabled="currentIndex === 0"></button>
                    <button class="right" @click="next" :disabled="currentIndex === projects.length - 1"></button>
                </div>
            </div>

            <nav>
                <ul>
                    <li v-for="(project, index) in projects" :key="project.id"
                        :class="{ active: index === currentIndex }">
                        <button @click="goTo(index)">{{ project.navLabel }}</button>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { projectCarouselItems } from '~/data/project-carousel'
const projects = projectCarouselItems

const currentIndex = ref(0)
const carouselEl = ref(null)

function goTo(index) {
    currentIndex.value = Math.max(0, Math.min(index, projects.length - 1))
}

function prev() { goTo(currentIndex.value - 1) }
function next() { goTo(currentIndex.value + 1) }

watch(currentIndex, (i) => {
    const slide = carouselEl.value?.children[i]
    slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
})
</script>

<style scoped>
/* - - - - - - - - - - - - - - - - - - - - */
/* PROJECTEN */
/* - - - - - - - - - - - - - - - - - - - - */

li:nth-of-type(4n + 1) {
    --project-color: var(--orange);
    --project-color-pastel: var(--pastel-orange);
}

li:nth-of-type(4n + 2) {
    --project-color: var(--purple);
    --project-color-pastel: var(--pastel-purple);
}

li:nth-of-type(4n + 3) {
    --project-color: var(--blue);
    --project-color-pastel: var(--pastel-blue);
}

li:nth-of-type(4n + 4) {
    --project-color: var(--green);
    --project-color-pastel: var(--pastel-green);
}

#projects {
    background: var(--background-100);
    padding: var(--block-padding) var(--inline-padding);
}

#projects .container {
    display: grid;
    gap: 2rem;
}

#projects .container h2 {
    text-align: center;
}

#projects .container .carousel {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
}

#projects .container .carousel ul {
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
}

#projects .container .carousel ul li {
    position: relative;
    max-width: 100%;
    height: 600px;
    flex-shrink: 0;
    display: grid;
    gap: 1rem;
    overflow: hidden;
    scroll-snap-align: center;
}

#projects .container .carousel ul li::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.7));
    z-index: 1;
}

#projects .container .carousel ul li::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(15deg, rgba(0, 0, 0, 0.7), transparent 50%);
    z-index: 1;
}

#projects .container .carousel ul li .text-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    position: absolute;
    top: 2rem;
    left: 50%;
    translate: -50%;
    width: 80%;
    z-index: 2;
}

#projects .container .carousel ul li .text-container h3 {
    color: var(--neutral-100);
    font-size: var(--h2-size);
    text-align: center;
}

#projects .container .carousel ul li .text-container a {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--neutral-100);
    background: transparent;
    border: 2px solid var(--neutral-100);
    padding: .5rem 1.5rem;
    border-radius: 5px;
    backdrop-filter: blur(3px);
}

#projects .container .carousel ul li .text-container a span {
    font-family: poppins, sans-serif;
    font-weight: 600;
    line-height: 1.5em;
    font-size: var(--sub-title-size);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    white-space: nowrap;
}

#projects .container .carousel ul li .text-container a svg {
    display: block;
    height: var(--sub-title-size);
    width: var(--sub-title-size);
    stroke: var(--neutral-100);
    stroke-width: 3px;
    fill: none;
    margin-bottom: 1px;
}


#projects .container .carousel ul li .text-container a:hover {
    background: var(--neutral-100);
    color: var(--project-color);
}



#projects .container .carousel ul li .text-container h3 span {
    background: var(--project-color);
}

#projects .container .carousel ul li .text-container a:hover svg {
    stroke: var(--project-color);
}

#projects .container .carousel ul li .meta-data {
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    display: grid;
    gap: .5rem;
    z-index: 2;
}

#projects .container .carousel ul li .meta-data p {
    color: var(--neutral-100);
    line-height: 1em;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.25rem;
}

#projects .container .carousel ul li .meta-data p.project-label {
    color: var(--neutral-100);
    background: var(--project-color);
    padding: .25rem .15rem;
}

@media (width < 600px) {
    #projects .container .carousel ul li .meta-data p.project-label {
        display: none;
    }
}

#projects .container .carousel ul li img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

/* - - - - - - - - - - - - - - - - - - - - */
/* NAVIGATION */
/* - - - - - - - - - - - - - - - - - - - - */

#projects .container .carousel .navigation {
    position: absolute;
    z-index: 2;
    bottom: 2rem;
    left: 50%;
    translate: -50%;
    display: flex;
    background: linear-gradient(90deg, var(--pastel-blue), var(--pastel-blue));
    height: 40px;
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
}

#projects .container .carousel .navigation::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    height: 60%;
    width: 1px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
}

#projects .container .carousel .navigation button {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: transparent;

    position: relative;

    color: var(--neutral-100);
    border: none;
    cursor: pointer;
    height: 100%;
    width: 100%;

    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
}

#projects .container .carousel .navigation button:disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
}

#projects .container .carousel .navigation:has(button.left:disabled) {
    background: linear-gradient(90deg, #d1dae9 50%, var(--pastel-blue) 50%);
}

#projects .container .carousel .navigation:has(button.right:disabled) {
    background: linear-gradient(90deg, var(--pastel-blue) 50%, #d1dae9 50%);
}

#projects .container .carousel .navigation:not(:has(button.left:disabled)) button.left:hover::before,
#projects .container .carousel .navigation:not(:has(button.right:disabled)) button.right:hover::before {
    content: '';
    position: absolute;
    inset: 7.5px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 5px;
}

#projects .container .carousel .navigation:not(:has(button.right:disabled)) button.right:active,
#projects .container .carousel .navigation:not(:has(button.left:disabled)) button.left:active {
    translate: 0 2px;
}

#projects .container .carousel .navigation button.left {
    background-image: url(/images/arrow-left.png);
}

#projects .container .carousel .navigation button.right {
    background-image: url(/images/arrow-right.png);
}

#projects .container nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: center;
}

#projects .container nav ul li {
    height: 10px;
    width: 10px;
    background: var(--blue);
    opacity: 0.3;
    border-radius: 50%;
    display: grid;
    place-items: center;
}

#projects .container nav ul li button {
    height: 100%;
    width: 100%;
    font-size: 0;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: transparent;
}

#projects .container nav ul li.active {
    opacity: 1;
    background: var(--project-color);
}

@media (width > 700px) {
    #projects .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    #projects .container .carousel ul li h3 {
        top: 3rem;
        max-width: 30ch;
    }

    #projects .container .carousel ul li .meta-data {
        bottom: 3rem;
        left: 3rem;
    }

    #projects .container .carousel .navigation {
        bottom: 3rem;
    }

    #projects .container nav ul {
        position: relative;
        width: fit-content;
        margin-inline: auto;
        border-radius: 10px;
        padding: .5rem 1rem;
        background: var(--pastel-blue);
    }

    #projects .container nav ul li {
        height: auto;
        width: auto;

        position: relative;
        font-family: poppins, sans-serif;
        font-weight: 500;
        line-height: 1em;
        color: var(--blue);
        background: var(--background-100) !important;
        font-size: var(--sub-title-size);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: .5rem .75rem;
        border-radius: 5px;
        overflow: hidden;
    }

    #projects .container nav ul li:not(.active):hover {
        opacity: .66;
    }

    #projects .container nav ul::before,
    #projects .container nav ul li::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        border: 1px solid transparent;
        background: linear-gradient(-45deg, #fff, #9ab7e4, #fff) border-box;
        mask:
            linear-gradient(#000 0 0) padding-box,
            linear-gradient(#000 0 0) border-box;
        mask-composite: exclude;
    }

    #projects .container nav ul li button {
        isolation: isolate;
        position: relative;
        font-family: poppins, sans-serif;
        font-weight: 500;
        color: var(--blue);
        font-size: var(--sub-title-size);
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    #projects .container nav ul li.active {
        padding-left: 1rem;
    }

    #projects .container nav ul li.active button::before {
        content: '';
        position: absolute;
        height: calc(100% + (.5rem * 2));
        width: 7.5px;
        left: -1rem;
        top: -.5rem;
        background: var(--project-color);
    }
}
</style>
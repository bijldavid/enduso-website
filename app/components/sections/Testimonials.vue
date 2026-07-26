<template>
    <section id="testimonials">
        <div class="container">
            <h2>Wat partners over Enduso zeggen:</h2>

            <div class="card-container">
                <ul>
                    <li
                        v-for="(testimonial, i) in testimonials"
                        :key="testimonial.id"
                        class="glass-border-dark"
                        :style="{ '--index': indices[i] }"
                        :class="{ 'animate-out': animatingCards.has(i) }"
                        @animationend="() => {
                            animatingCards.delete(i)
                            animatingCards.value = new Set(animatingCards.value)
                        }"
                    >
                        <small>
                            <img
                                :src="assetUrl(testimonial.icon)"
                                alt=""
                                aria-hidden="true"
                            >
                            {{ testimonial.label }}
                        </small>

                        <p>{{ testimonial.testimonial }}</p>

                        <span class="hr"></span>

                        <div>
                            <img
                                :src="assetUrl(testimonial.image)"
                                :alt="testimonial.name"
                            >

                            <div>
                                <p class="name">{{ testimonial.name }}</p>
                                <p class="role">{{ testimonial.role }}</p>
                            </div>
                        </div>
                    </li>
                </ul>

                <button
                    class="glass-border-light"
                    @click="handleNext"
                ></button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const { assetUrl } = useAssetUrl()

const testimonials = [
    {
        id: 1,
        label: 'Thialf',
        icon: '/images/thialf-icon.png',
        testimonial: 'Enduso kijkt verder dan alleen de techniek. Ze denken mee over onze bedrijfsprocessen, de netcapaciteit en de praktische haalbaarheid van de oplossing.',
        name: 'Minne Dolstra',
        role: 'CEO, Thialf',
        image: '/images/thialf-white.webp',
    },
    {
        id: 2,
        label: 'Golfbaan Spierdijk',
        icon: '/images/spierdijk-icon.png',
        testimonial: 'Door de samenwerking met Enduso hebben we meer grip gekregen op onze energievoorziening. Dat geeft vertrouwen in een periode waarin netcongestie veel onzekerheid veroorzaakt.',
        name: 'Paul Schoenmaker',
        role: 'Golfbaan Spierdijk',
        image: '/images/golfbaanspierdijk-white.webp',
    },
    {
        id: 3,
        label: 'Wit Flower Bulbs',
        icon: '/images/witflowerbulbs-icon.png',
        testimonial: 'Wat voor ons sterk werkt, is de manier waarop Enduso verschillende partijen bij elkaar brengt. Leveranciers, techniek en strategie worden echt verbonden.',
        name: 'Peter Wit',
        role: 'CTO, WFB',
        image: '/images/witflowerbulbs-white.webp',
    },
]

const indices = ref(testimonials.map((_, i) => i))
const animatingCards = ref(new Set())

function handleNext() {
    const frontIndex = indices.value.indexOf(0)

    animatingCards.value.add(frontIndex)
    animatingCards.value = new Set(animatingCards.value)

    indices.value = indices.value.map((index) =>
        index === 0 ? testimonials.length - 1 : index - 1
    )
}
</script>

<style scoped>
#testimonials {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--background-900);
    overflow-x: clip;
}

#testimonials .container {
    display: grid;
    gap: 2rem;
}

#testimonials .container h2 {
    color: var(--neutral-100);
}

#testimonials .container .card-container {
    position: relative;
    z-index: 100;
    padding-inline-end: 20px;
}


#testimonials .container .card-container ul {
    --timing-function: cubic-bezier(0.519, 0.157, 0, 1.261);

    isolation: isolate;
    position: relative;
    display: grid;
    grid-template-areas: "stack";
    align-items: stretch;
    justify-items: left;
    max-width: 100%;
}

#testimonials .container .card-container ul li {
    position: relative;
    grid-area: stack;
    padding: 2rem;
    padding-top: 5rem;
    background: var(--background-700);
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 20px;
    box-shadow: 12px 12px 15px 0px rgb(0 0 0 / 0.2);
    transform-origin: bottom right;
    z-index: calc(-1 * var(--index));
    translate: calc(10px * var(--index)) calc(10px * var(--index));
    transition: translate 0.3s ease;
}

#testimonials .container .card-container ul li small {
    position: absolute;
    top: 0;
    left: 0;

    font-family: poppins, sans-serif;
    font-weight: 500;
    color: var(--neutral-100);
    font-size: var(--sub-title-size);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 1rem 2rem;
    padding-left: 4rem;
    border-radius: 0 0 20px 0;
    border-right: 1px solid #38445A;
    border-bottom: 1px solid #38445A;
}

#testimonials .container .card-container ul li small img {
    position: absolute;
    top: 50%;
    left: 2rem;
    translate: 0 -50%;
    height: 1.25rem;
    width: auto;
}

#testimonials .container .card-container ul li>p {
    color: var(--neutral-100);
}

#testimonials .container .card-container ul li p {
    color: var(--neutral-100);
}

#testimonials .container .card-container ul li .hr {
    margin-top: auto;
    background: #38445A;
    justify-self: end;
    align-self: end;
}


#testimonials .container .card-container ul li>div {
    display: flex;
    gap: 2rem;
    align-items: center;
}

#testimonials .container .card-container ul li>div img {
    height: 30px;
}

#testimonials .container .card-container ul li>div div {
    display: flex;
    flex-direction: column;
    gap: .25rem;
}

#testimonials .container .card-container ul li>div div .role {
    color: var(--neutral-500);
}

#testimonials .container .card-container button {
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    z-index: 1000;

    appearance: none;
    border: none;

    color: var(--neutral-100);
    border: none;
    cursor: pointer;
    height: 40px;
    width: 50px;
    border-radius: 10px;
    background: var(--pastel-blue);
    overflow: hidden;

    background-image: url(/images/arrow-right.webp);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
}

#testimonials .container .card-container button:active {
    translate: 0 calc(-50% + 2px);
}

#testimonials .container .card-container button:hover::after {
    content: '';
    position: absolute;
    inset: 7.5px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 5px;
}

@keyframes card-flip {
    0% {
        transform: translateX(0) translateY(0) rotate(0deg);
        z-index: 1;
    }

    50% {
        transform: translateX(80px) translateY(calc(-100% + 80px)) rotate(45deg);
        z-index: 1;
    }

    51% {
        transform: translateX(80px) translateY(calc(-100% + 80px)) rotate(45deg);
        z-index: calc(-1 * var(--index));
    }

    100% {
        transform: translateX(0) translateY(0) rotate(0deg);
        z-index: calc(-1 * var(--index));
    }
}

#testimonials .container .card-container ul li.animate-out {
    animation: card-flip 0.8s var(--timing-function, ease) forwards;
}




@media (width > 700px) {


    #testimonials .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    #testimonials .container .card-container {
        padding-inline-end: 0;
    }

    #testimonials .container .card-container ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(325px, 100%), 1fr));
        gap: 1rem;
    }

    #testimonials .container .card-container ul li {
        z-index: 0;
        translate: 0;
        grid-area: auto;
    }

    #testimonials .container .card-container button {
        display: none;
    }
}
</style>
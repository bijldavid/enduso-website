<template>
    <section id="hero">
        <div class="container">

            <div class="bars">

                <div class="content-container">
                    <h1 class="reveal-ignore">Grip op <span>energie</span>, <br>ruimte voor <span>groei</span></h1>
                    <p class="reveal-ignore">
                        Met Enduso kiest u voor een betrouwbare energie oplossing die kosten
                        bespaart, de energiekwaliteit verbetert en bijdraagt aan een duurzame en toekomstbestendige
                        energievoorziening.
                    </p>
                </div>

                <span class="gradient"></span>

                <div class="image-container">
                    <img src="/images/colaboration-orange.webp" alt="">
                </div>
                <div class="image-container">
                    <img src="/images/solar-panels-purple.webp" alt="">
                </div>
                <div class="image-container">
                    <img src="/images/wind-turbine-blue.webp" alt="">
                </div>
                <div class="image-container">
                    <img src="/images/ev-charger-green.webp" alt="">
                </div>

            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
/* - - - - - - - - - - - - - - - - - - - - */
/* HERO SECTION */
/* - - - - - - - - - - - - - - - - - - - - */

#hero {
    background-color: var(--background-900);
    background-image: radial-gradient(circle at 50% 100%, transparent, var(--background-700)),
        url("/images/repeated-dot.png");
    overflow: hidden;
    background-size: 100% auto, 10px 10px;
}

#hero .container {
    --hero-block-padding: 16rem;
    display: grid;
    place-items: center;
    padding: var(--hero-block-padding) var(--inline-padding);

    max-width: 1300px;
    margin-inline: auto;
    container-type: inline-size;
}

@media (width > 700px) {
    #hero .container {
        --hero-block-padding: 12rem;
        padding: 8rem var(--inline-padding) var(--hero-block-padding);
    }
}

#hero .container .bars {
    --timing-function: cubic-bezier(0.79, 0.146, 0.247, 1.338);
    position: relative;
    translate: -20cqw;
    --section-width: 140cqw;
    --offset: 10cqw;
    width: var(--section-width);
    display: grid;
    grid-template-areas: "stack";
    padding-bottom: 17.5cqw;
}

#hero .container .bars .gradient {
    content: "";
    position: absolute;
    top: 0;
    left: calc((100vw - 140cqw) / -2);
    width: 100vw;
    height: calc(100% + var(--hero-block-padding));
    background:
        linear-gradient(0deg, var(--background-900) calc(5rem + 10cqw), transparent 70%),
        radial-gradient(at 50% 75%, var(--background-900), transparent 50%);
    z-index: 1;
}

@media (width > 700px) {
    #hero .container .bars {
        padding-bottom: 0;
    }

    #hero .container .bars .gradient {
        background:
            linear-gradient(0deg, var(--background-900) 0, transparent 70%),
            radial-gradient(at 50% 100%, var(--background-900), transparent 50%);
        z-index: 1;
    }
}

#hero .container .bars .image-container {
    position: relative;
    height: 50cqw;
    grid-area: stack;
    justify-self: center;
    clip-path: polygon(0 100%, 50% 100%, 50% 100%, 0 100%);
    transition: clip-path 0.3s var(--timing-function);
}

#hero .container .bars .image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

#hero .container .bars .image-container:nth-of-type(2)::before {
    height: calc(30% + 6cqw);
    background: linear-gradient(180deg, var(--bar-color) 6cqw, transparent);
}

#hero .container .bars .image-container:nth-of-type(3)::before {
    height: calc(30% + 4cqw);
    background: linear-gradient(180deg, var(--bar-color) 4cqw, transparent);
}

#hero .container .bars .image-container:nth-of-type(4)::before {
    height: calc(30% + 2cqw);
    background: linear-gradient(180deg, var(--bar-color) 2cqw, transparent);
}

#hero .container .bars .image-container:nth-of-type(5)::before {
    height: calc(30% + 0cqw);
    background: linear-gradient(180deg, var(--bar-color) 0cqw, transparent);
}

#hero .container .bars .image-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bar-color);
    animation: color-reveal 0.5s var(--timing-function) 0.5s forwards;
}

@keyframes color-reveal {
    0% {
        opacity: 1;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    }

    99% {
        opacity: 1;
        clip-path: polygon(0 0, 99% 0, 99% 0, 0% 0%);
    }

    100% {
        opacity: 0;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0% 0%);
    }
}

#hero .container .bars .image-container:nth-of-type(2) {
    --bar-color: var(--orange);
    translate: calc(-150% + (var(--offset) * 3));
    animation: reveal-orange 1s var(--timing-function) forwards;
}

#hero .container .bars .image-container:nth-of-type(3) {
    --bar-color: var(--purple);
    translate: calc(-50% + var(--offset));
    animation: reveal-purple 1s var(--timing-function) forwards;
    animation-delay: 0.1s;
}

#hero .container .bars .image-container:nth-of-type(3)::after {
    animation-delay: 0.6s;
}

#hero .container .bars .image-container:nth-of-type(4) {
    --bar-color: var(--blue);
    translate: calc(50% - var(--offset));
    animation: reveal-blue 1s var(--timing-function) forwards;
    animation-delay: 0.2s;
}

#hero .container .bars .image-container:nth-of-type(4)::after {
    animation-delay: 0.7s;
}

#hero .container .bars .image-container:nth-of-type(5) {
    --bar-color: var(--green);
    translate: calc(150% - (var(--offset) * 3));
    animation: reveal-green 1s var(--timing-function) forwards;
    animation-delay: 0.3s;
}

#hero .container .bars .image-container:nth-of-type(5)::after {
    animation-delay: 0.8s;
}

@keyframes reveal-orange {
    0% {
        clip-path: polygon(0 100%, 50% 100%, 50% 100%, 0 100%);
    }

    100% {
        clip-path: polygon(40% 20%, 90% 20%, 50% 100%, 0 100%);
    }
}

@keyframes reveal-purple {
    0% {
        clip-path: polygon(0 100%, 50% 100%, 50% 100%, 0 100%);
    }

    100% {
        clip-path: polygon(42.5% 15%, 92.5% 15%, 50% 100%, 0 100%);
    }
}

@keyframes reveal-blue {
    0% {
        clip-path: polygon(0 100%, 50% 100%, 50% 100%, 0 100%);
    }

    100% {
        clip-path: polygon(45% 10%, 95% 10%, 50% 100%, 0 100%);
    }
}

@keyframes reveal-green {
    0% {
        clip-path: polygon(0 100%, 50% 100%, 50% 100%, 0 100%);
    }

    100% {
        clip-path: polygon(47.5% 5%, 97.5% 5%, 50% 100%, 0 100%);
    }
}

#hero .container .bars .image-container img {
    width: calc((var(--section-width) / 4) + (var(--offset) * 1.5));
    height: 100%;
    object-fit: cover;
}


/* - - - - - - - - - - - - - - - - - - - - */
/* CONTENT CONTAINER */
/* - - - - - - - - - - - - - - - - - - - - */

#hero .container .content-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    translate: -50% 50%;
    z-index: 2;
    text-align: center;
    display: grid;
    gap: 1rem;
    width: 70%;
}

#hero .container .content-container h1 {
    font-family: artavion, sans-serif;
    font-weight: 400;
    line-height: 1.15em;
    color: var(--neutral-100);
    font-size: 2.5rem;

    opacity: 0;
    translate: 0 3rem;
    filter: blur(10px);
    animation: hero-text-reveal 1.5s cubic-bezier(0.373, 0.061, 0, 1.003) forwards;

}

#hero .container .content-container h1 span {
    color: var(--background-300);
}

#hero .container .content-container p {
    font-size: var(--p-size);
    font-family: artavion, sans-serif;
    font-weight: 400;
    line-height: 1.6em;
    color: var(--neutral-100);
    text-wrap: balance;
    max-width: 40rem;
    margin-inline: auto;
    opacity: 0;
    translate: 0 3rem;
    filter: blur(10px);
    animation: hero-text-reveal 1.5s cubic-bezier(0.373, 0.061, 0, 1.003) 0.15s forwards;
}

@keyframes hero-text-reveal {
    0% {
        opacity: 0;
        translate: 0 3rem;
        filter: blur(10px);
    }

    100% {
        opacity: 1;
        translate: 0;
        filter: blur(0);
    }
}

@media (width < 400px) {
    #hero .container .content-container h1 {
        font-size: 2rem;
    }
}

@media (width > 700px) {
    #hero .container .content-container h1 {
        font-size: 4rem;
    }
}

@media (width > 1000px) {
    #hero .container .content-container h1 {
        font-size: 5rem;
    }
}
</style>
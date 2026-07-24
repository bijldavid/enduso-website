<template>
    <main>
        <div class="container">
            <Breadcrumbs>
                <a href="/">Home</a>
                <NuxtLink href="/About">About</NuxtLink>
            </Breadcrumbs>
            <div class="content-container">

                <h1>Over <span>E</span><span>n</span><span>d</span><span>u</span><span>s</span><span>o</span></h1>
                <p>
                    Wij zijn Endruso: een Noord-Hollands bedrijf met een nuchtere aanpak en een passie voor slimme
                    energieoplossingen. Samen met een team van ervaren energieprofessionals werken wij aan innovatieve
                    projecten die organisaties helpen omgaan met de uitdagingen van de energietransitie.
                </p>

                <p>
                    De groeiende druk op het elektriciteitsnet en de uitdagingen rondom netcongestie vragen om
                    praktische oplossingen. Wij zetten onze kennis, techniek en ons brede netwerk in om bedrijven en
                    bedrijventerreinen te ondersteunen bij het optimaal benutten van hun energiecapaciteit.<br>
                    Daarbij geloven wij niet in standaardoplossingen, maar in samenwerken en meedenken. We luisteren
                    naar de behoeften van onze klanten, begrijpen hun uitdagingen en ontwikkelen oplossingen die écht
                    passen bij de praktijk.
                </p>
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

main .container .content-container {
    display: grid;
    gap: 2rem;
}

@media (width > 700px) {
    main .container {
        max-width: 800px;
        margin-inline: auto;
    }

    main .container ul {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
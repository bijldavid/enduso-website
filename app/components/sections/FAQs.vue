<template>
    <section id="FAQS">
        <div class="container">
            <h2>Meer weten over onze aanpak?</h2>
            <div>
                <p class="sub-title">Veelgestelde vragen</p>
                <div class="details-container">
                    <details name="FAQs">
                        <summary><h3>Wat bedoelt Enduso met systeemintegratie?</h3></summary>
                        <p class="reveal-ignore">Met systeemintegratie bedoelt Enduso het slim verbinden van
                            installaties,
                            energiestromen, data en
                            bedrijfsprocessen. Het doel is om losse onderdelen te laten samenwerken als één betrouwbaar
                            energiesysteem.</p>
                    </details>
                    <details name="FAQs">
                        <summary><h3>Hoe helpt systeemintegratie bij netcongestie?</h3></summary>
                        <p class="reveal-ignore">Door beschikbare capaciteit slimmer te benutten en energiestromen
                            intelligent te sturen, kan de
                            druk op het elektriciteitsnet worden verminderd. Zo ontstaat er meer flexibiliteit binnen
                            bestaande aansluitingen.</p>
                    </details>
                    <details name="FAQs">
                        <summary><h3>Voor wie zijn de oplossingen van Enduso geschikt?</h3></summary>
                        <p class="reveal-ignore">Enduso werkt voor organisaties die te maken hebben met
                            energie-uitdagingen
                            zoals netcongestie,
                            verduurzaming, groei of bedrijfszekerheid. Denk aan bedrijven en locaties waar
                            energievoorziening een belangrijk onderdeel is van de dagelijkse operatie.</p>
                    </details>
                    <details name="FAQs">
                        <summary><h3>Werkt Enduso met vaste oplossingen of maatwerk?</h3></summary>
                        <p class="reveal-ignore">Elke locatie en organisatie is anders. Daarom kijkt Enduso per project
                            naar
                            de technische
                            situatie, bedrijfsprocessen en toekomstplannen. Op basis daarvan wordt een passende
                            systeemintegratie ontworpen.</p>
                    </details>
                    <details name="FAQs">
                        <summary><h3>Waarom is samenwerking zo belangrijk?</h3></summary>
                        <p class="reveal-ignore">Energieprojecten raken vaak meerdere partijen, systemen en belangen.
                            Door
                            opdrachtgevers,
                            leveranciers en technische experts vroegtijdig te verbinden, ontstaat een oplossing die niet
                            alleen technisch klopt, maar ook praktisch uitvoerbaar is.</p>
                    </details>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
#FAQS {
    background: var(--background-100);
    padding: var(--block-padding) var(--inline-padding);
}

#FAQS .container {
    display: grid;
    gap: 2rem;
}

#FAQS .container>div {
    display: grid;
    gap: 1rem;
}

#FAQS .container>div .details-container {
    display: grid;
    gap: 1.5rem;
}

#FAQS .container>div .details-container details {
    overflow: hidden;
}

#FAQS .container>div .details-container details::details-content {
    block-size: 0;
    transition: block-size .3s, content-visibility .3s;
    transition-behavior: allow-discrete;
}

#FAQS .container>div .details-container details:open::details-content {
    block-size: auto;
}

#FAQS .container>div .details-container details::details-content {
    color: hsl(0 0% 78%);
    font-size: 1rem;
    block-size: 0;
    transition: block-size .3s, content-visibility .3s;
    transition-behavior: allow-discrete;
}

#FAQS .container>div .details-container details[open]::details-content {
    block-size: auto;
}

#FAQS .container>div .details-container details:not(:last-of-type) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--neutral-300);
}

#FAQS .container>div .details-container details summary {
    position: relative;
    padding-right: 3rem;
}

#FAQS .container>div .details-container details summary::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 1rem;
    translate: 0 -50%;
    height: 1rem;
    width: 1rem;
    background-image: url('/images/chevron.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    rotate: 0deg;
    transition: rotate 0.3s;
}

#FAQS .container>div .details-container details[open] summary::before {
    rotate: 90deg;
}

#FAQS .container>div .details-container details summary h3 {
    font-family: artavion, sans-serif;
    font-weight: 400;
    line-height: 1.3em;
    color: var(--neutral-900);
    font-size: calc(var(--h3-size) - 3px);
    text-wrap: wrap;
}

#FAQS .container>div .details-container details p {
    padding: 1rem 3rem 0 0;
    color: var(--neutral-500);
}

@media (width > 700px) {
    #FAQS .container {
        max-width: 1200px;
        margin-inline: auto;
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
    }

    #FAQS .container>div {
        gap: 2rem;
    }
}
</style>
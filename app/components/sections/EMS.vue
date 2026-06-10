<template>
    <section id="EMS">
        <div class="container">
            <h2>Wij verbinden techniek, data en energieprocessen tot één betrouwbaar energiesysteem.</h2>
            <div>
                <p class="sub-title" data-reveal-ignore>Meer grip, minder congestie</p>
                <p>Met slimme systeemintegratie verbindt Enduso techniek, data en energieprocessen tot
                    één werkend geheel. Zo ontstaat meer grip op beschikbare capaciteit, betrouwbaarheid en de
                    verduurzaming van bedrijfsprocessen.
                </p>
                <a class="read-more" href="#">Lees meer</a>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
#EMS {
    padding: var(--block-padding) var(--inline-padding);
    padding-bottom: calc(var(--block-padding) / 2);
    background: var(--neutral-100);
}

#EMS .container {
    display: grid;
    gap: 2rem;
}

#EMS .container>div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (width > 700px) {
    #EMS .container {
        max-width: 1200px;
        margin-inline: auto;
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
    }
}
</style>
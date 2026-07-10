<template>
    <section id="intro">
        <div class="container">
            <h2>Enduso EMS brengt energie in balans</h2>
            <div>
                <p class="sub-title" data-reveal-ignore>Meer grip, minder congestie</p>
                <p>Bij Enduso leveren we meer dan een Energy Management Systeem (EMS). We ontwikkelen een integraal
                    energiesysteem dat volledig aansluit op de manier waarop uw organisatie werkt, produceert en energie
                    verbruikt.

                </p>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
#intro {
    padding: var(--block-padding) var(--inline-padding);
    padding-bottom: calc(var(--block-padding) / 2);
    background: var(--neutral-100);
}

#intro .container {
    display: grid;
    gap: 2rem;
}

#intro .container h2 {
    --large-size: 1.5rem;
    font-size: var(--large-size);
}

#intro .container>div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (width > 900px) {

    #intro .container {
        max-width: 1200px;
        margin-inline: auto;
        grid-template-columns: 450px 1fr;
        gap: 6rem;
    }

    #intro .container h2 {
        --large-size: 3rem;
    }
}
</style>
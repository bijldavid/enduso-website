<template>
    <section id="USPS">
        <div class="container">
            <h2 class="visually-hidden">Onze unieke voordelen</h2>
            <ul>
                <li>
                    <img src="/images/eye.webp" alt="">
                    <p>Krijg helder inzicht in verbruik, energiestromen en beschikbare capaciteit.</p>
                </li>
                <li>
                    <img src="/images/gear.webp" alt="">
                    <p>Stuur opwek, opslag en verbruik slim aan voor meer grip en stabiliteit.</p>
                </li>
                <li>
                    <img src="/images/money.webp" alt="">
                    <p>Verlaag kosten, verbeter energiekwaliteit en haal meer uit uw systeem.</p>
                </li>
                <li>
                    <img src="/images/grow.webp" alt="">
                    <p>Bouw aan een energie-systeem dat meebeweegt met uw organisatie.</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
#USPS {
    padding: var(--block-padding) var(--inline-padding);
    padding-top: calc(var(--block-padding) / 2);
    background: var(--neutral-100);
}

#USPS .container {}

#USPS .container ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
}

#USPS .container ul li {
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    background: var(--brand-background);
    color: var(--brand-color);
}

#USPS .container ul li img {
    width: 3.5rem;
}

#USPS .container ul li h3 span {
    font-size: 1.5rem;
}

@media (width > 700px) {
    #USPS .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    #USPS .container ul {
        gap: 1rem;
    }

    #USPS .container ul li {
        padding: 2rem;
    }

    #USPS .container ul li h3 {
        color: inherit;
        font-size: 3rem;
        line-height: 1;
    }
}

@media (width > 1000px) {
    #USPS .container ul {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
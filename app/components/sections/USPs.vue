<template>
    <section id="USPS">
        <div class="container">
            <h2 class="visually-hidden">Onze unieke voordelen</h2>
            <ul>
                <li>
                    <h3>10+</h3>
                    <p>Lopende projecten met tevreden klanten.</p>
                </li>
                <li>
                    <h3>200<span>kW</span></h3>
                    <p>Slim aangestuurd vermogen.</p>
                </li>
                <li>
                    <h3>6</h3>
                    <p>Samenwerkende partners.</p>
                </li>
                <li>
                    <h3>1M</h3>
                    <p>kWh aan energie slimmer benut.</p>
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
    gap: 1rem;
    padding: 1.25rem;
    background: var(--usp-background);
    color: var(--usp-color);
}

#USPS .container ul li h3 {
    color: inherit;
    font-size: 2rem;
    line-height: 1;
}

#USPS .container ul li h3 span {
    font-size: 1.5rem;
}

#USPS .container ul li:nth-of-type(1) {
    --usp-background: var(--pastel-orange);
    --usp-color: var(--orange);
}

#USPS .container ul li:nth-of-type(2) {
    --usp-background: var(--pastel-purple);
    --usp-color: var(--purple);
}

#USPS .container ul li:nth-of-type(3) {
    --usp-background: var(--pastel-blue);
    --usp-color: var(--blue);
}

#USPS .container ul li:nth-of-type(4) {
    --usp-background: var(--pastel-green);
    --usp-color: var(--green);
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
<template>
    <section id="partners">
        <div class="container">
            <h2 class="sub-title">Partner leveranciers</h2>
            <div>
                <div>
                    <img src="/images/croonwolter&dros-gray.png" alt="Croonwolter & Dros">
                </div>
                <div>
                    <img src="/images/gebrdevries-gray.png" alt="gebr. de Vries">
                </div>
                <div>
                    <img src="/images/kraandorpwijnker-gray.png" alt="Kraandorp Wijnker">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
#partners {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--neutral-100);
}

#partners .container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
}

#partners .container h2 {
    justify-self: center;
    max-width: 35ch;
    text-align: center;
}

@media (width > 500px) {
    #partners .container h2 {
        max-width: max-content;
    }
}

#partners .container>div {
    position: relative;
    display: grid;
    gap: 3rem;
    align-items: center;
}

#partners .container>div div {
    position: relative;
}

#partners .container>div div::before {
    content: "";
    position: absolute;
    inset: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0;
}

#partners .container>div div:hover::before {
    opacity: 1;
}

#partners .container>div div:nth-of-type(1):hover::before {
    background-image: url("/images/croonwolter&dros.png");
}

#partners .container>div div:nth-of-type(2):hover::before {
    background-image: url("/images/gebrdevries.png");
}

#partners .container>div div:nth-of-type(3):hover::before {
    background-image: url("/images/kraandorpwijnker.png");
}

#partners .container>div div img {
    max-width: 150px;
    justify-self: center;
    align-self: center;
}

@media (width > 700px) {
    #partners .container {
        max-width: 700px;
        margin-inline: auto;
        gap: 4rem;
    }

    #partners .container>div {
        grid-template-columns: repeat(3, 1fr);
    }

    #partners .container>div div img {
        max-width: 100%;
        max-height: 40px;
        justify-self: center;
        align-self: center;
    }
}
</style>
<template>
    <section id="sectoren">
        <div class="container">
            <h2>De sectoren waar wij actief zijn</h2>
            <ul>
                <li>
                    <div class="image-container">
                        <img src="/images/farm.svg" alt="Agrarische bedrijven">
                    </div>
                    <div class="text-container">
                        <h3>Agrarische bedrijven</h3>
                        <p>
                            We helpen agrarische bedrijven met het slim aansturen van hun energievoorziening, zodat ze
                            hun bedrijfsvoering kunnen optimaliseren en verduurzamen.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="image-container">
                        <img src="/images/companies.svg" alt="Bedrijventerreinen">
                    </div>
                    <div class="text-container">
                        <h3>Bedrijventerreinen</h3>
                        <p>
                            We helpen bedrijventerreinen met het slim aansturen van hun energievoorziening, zodat ze hun
                            bedrijfsvoering kunnen optimaliseren en verduurzamen.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="image-container">
                        <img src="/images/sport.svg" alt="Sportcomplexen">
                    </div>
                    <div class="text-container">
                        <h3>Sportcomplex</h3>
                        <p>
                            We helpen sportcomplexen met het slim aansturen van hun energievoorziening, zodat ze hun
                            bedrijfsvoering kunnen optimaliseren en verduurzamen.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="image-container">
                        <img src="/images/logistics.svg" alt="logistieke bedrijven">
                    </div>
                    <div class="text-container">
                        <h3>logistieke bedrijven</h3>
                        <p>
                            We helpen logistieke bedrijven met het slim aansturen van hun energievoorziening, zodat ze
                            hun bedrijfsvoering kunnen optimaliseren en verduurzamen.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="image-container">
                        <img src="/images/plug.svg" alt="Laadinfra-exploitanten">
                    </div>
                    <div class="text-container">
                        <h3>Laadinfra-exploitanten</h3>
                        <p>
                            We helpen laadinfra-exploitanten met het slim aansturen van hun energievoorziening, zodat ze
                            hun bedrijfsvoering kunnen optimaliseren en verduurzamen.
                        </p>
                    </div>
                </li>
                <li>
                    <div class="image-container">
                        <img src="/images/estate.svg" alt="Vastgoed">
                    </div>
                    <div class="text-container">
                        <h3>Vastgoed</h3>
                        <p>
                            We helpen vastgoedbedrijven met het slim aansturen van hun energievoorziening, zodat ze hun
                            bedrijfsvoering kunnen optimaliseren en verduurzamen.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </section>

</template>

<script>

</script>

<style>
#sectoren {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--neutral-100);
}

#sectoren .container {
    display: grid;
    gap: 2rem;
}

#sectoren .container ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: .5rem;
}

#sectoren .container ul li {
    padding: 1.5rem;
    background: var(--background-100);
    border-radius: 20px;
    display: grid;
    gap: 1rem;
}

#sectoren .container ul li .image-container {
    height: 3rem;
    width: 3rem;
    padding: .5rem;
    background: var(--background-200);
    border-radius: 10px;
}

#sectoren .container ul li .image-container img {
    height: 100%;
    width: 100%;
}

#sectoren .container ul li .text-container {
    display: grid;
    gap: .5rem;
}

#sectoren .container ul li .text-container h3 {
    color: var(--blue);
}

#sectoren .container ul li .text-container p {
    color: var(--blue);
}

@media (width > 700px) {
    #sectoren .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    #sectoren .container ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    #sectoren .container ul li {
        padding: 2rem;
    }
}
</style>
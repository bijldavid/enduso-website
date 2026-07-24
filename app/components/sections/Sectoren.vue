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
                            Door opwek, opslag en verbruik slim af te stemmen, krijgen agrarische bedrijven meer grip op
                            energiekosten, netcapaciteit en continuïteit.
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
                            Op bedrijventerreinen verbinden we energiestromen tussen organisaties, zodat beschikbare
                            capaciteit slimmer wordt verdeeld en beter wordt benut.
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
                            Sportcomplexen combineren verlichting, koeling en laadinfra. Enduso stuurt deze installaties
                            samen aan voor lagere pieken en meer zekerheid.
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
                            Voor logistieke bedrijven stemmen we laadinfra, opslag en processen op elkaar af, zodat
                            voertuigen betrouwbaar laden zonder onnodige netpieken.
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
                            Laadinfra-exploitanten krijgen controle over laadvermogen en capaciteit, zodat meer
                            voertuigen efficiënt en betrouwbaar kunnen worden geladen.
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
                            Binnen vastgoed verbinden we gebouwinstallaties, opwek en opslag tot één energiesysteem dat
                            kosten verlaagt en ruimte biedt voor verduurzaming.
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
<template>
    <section id="service">
        <div class="container">
            <h2>Wat biedt Enduso?</h2>
            <div class="content-container">
                <div class="connector-lines">
                    <span class="devider"></span>
                    <div class="connections">
                        <span class="bottom"></span>
                        <span class="bottom"></span>
                        <span class="bottom"></span>
                        <span class="bottom"></span>
                        <span class="bottom"></span>
                    </div>
                </div>
                <ul>
                    <li>
                        <p><span>EPMS</span><br>(Energy Process Management System)</p>
                    </li>
                    <li>
                        <p><span>CEF</span><br>(Controlled Energy Flow)</p>
                    </li>
                    <li>
                        <p>Maatwerk achter de meter</p>
                    </li>
                    <li>
                        <p>Virtueel groepscontract</p>
                    </li>
                    <li>
                        <p>Security</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
#service {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--background-100);
}

#service .container {
    display: grid;
    gap: 2rem;
}

#service .container .content-container {
    display: grid;
    grid-template-columns: 1fr min(300px, 60vw);
}

/* - - - - - - - - - - - - - - - - - - - - */
/* CONNECTOR LINES */
/* - - - - - - - - - - - - - - - - - - - - */

#service .container .connector-lines {
    --dynamic-value: 73.6px;
    --connector-rows: 5;
    --connector-gap: 1rem;
    display: grid;
    grid-template-columns: 1px 1fr;
}

#service .container .connector-lines span {
    position: relative;
}

#service .container .connector-lines .devider {
    height: calc(100% - ((100% - (var(--connector-gap) * (var(--connector-rows) - 1))) / var(--connector-rows)) + 1px);
    width: 1px;
    background: var(--blue);
    align-self: center;
}

#service .container .connector-lines .devider::before {
    content: '';
    position: absolute;
    width: 1px;
    height: calc(var(--dynamic-value) / 2);
    background: var(--blue);
    top: 0;
    left: 50%;
    translate: -50% -100%;
}

#service .container .connector-lines .devider::after {
    content: '';
    position: absolute;
    width: 7.5px;
    height: 7.5px;
    background: var(--blue);
    top: 0;
    left: 50%;
    translate: -50% calc((var(--dynamic-value) / 2 + 100%) * -1);
}

#service .container .connector-lines .connections {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;
    width: 100%;
}

#service .container .connector-lines .connections .bottom {
    width: calc(100% - 2rem);
    height: 1px;
    background: var(--blue);
    align-self: center;
}

#service .container .connector-lines .connections .bottom::after {
    content: '';
    position: absolute;
    width: 7.5px;
    height: 7.5px;
    border: 1px solid var(--blue);
    top: 50%;
    right: 0;
    translate: 100% -50%;
}

/* - - - - - - - - - - - - - - - - - - - - */
/* ITEMS */
/* - - - - - - - - - - - - - - - - - - - - */

#service .container .content-container ul {
    display: grid;
    grid-auto-rows: 1fr;
    gap: 1rem;
}

#service .container .content-container ul li {
    background: var(--brand-background);
    padding: .5rem 1rem;
    border-radius: 5px;
    display: grid;
    place-items: center;
}

#service .container .content-container ul li p {
    font-family: poppins, sans-serif;
    font-weight: 500;
    line-height: 1.5em;
    color: var(--brand-color);
    font-size: var(--sub-title-size);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
}

#service .container .content-container ul li p span {
    font-weight: 700;
}

@media (width > 700px) {
    #service .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    #service .container .connector-lines {
        --dynamic-value: 79px;
    }
}




@media (width > 1100px) {

    #service .container h2 {
        text-align: center;
    }

    #service .container .connector-lines {
        --connector-columns: 5;
        --connector-gap: 1rem;
        grid-template-columns: 1fr;
        margin-top: calc(var(--dynamic-value) / 2);
    }

    #service .container .connector-lines .devider {
        width: calc(100% - ((100% - (var(--connector-gap) * (var(--connector-columns) - 1))) / var(--connector-columns)) + 1px);
        height: 1px;
        margin-inline: auto;
    }

    #service .container .connector-lines .connections {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
    }

    #service .container .connector-lines .connections .bottom {
        width: 1px;
        height: 1rem;
        margin-inline: auto;
    }

    #service .container .connector-lines .connections .bottom::after {
        bottom: 0;
        left: 50%;
        translate: -50% 100%;
    }

    #service .container .content-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    #service .container .content-container ul {
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        grid-auto-rows: 1fr;
    }
}
</style>
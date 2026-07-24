<template>
    <nav class="breadcrumbs">
        <slot />
    </nav>
</template>

<script>

</script>

<style>
.breadcrumbs {
    --gap: 3rem;
    display: flex;
    align-items: center;
    gap: var(--gap);
    width: max-content;
}

.breadcrumbs a {
    position: relative;
    font-weight: 400;
    line-height: 1.75em;
    font-family: poppins, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-size: var(--sub-title-size);
    color: var(--blue);
    padding: .25rem;
    border-radius: 5px;
}

.breadcrumbs a:hover {
    background: var(--background-100);
}

.breadcrumbs a:not(:last-of-type)::before {
    content: '';
    position: absolute;
    height: var(--sub-title-size);
    aspect-ratio: 1;
    top: 50%;
    right: calc(var(--gap) / 2 * -1);
    translate: 50% -50%;
    pointer-events: none;

    background-image: url(/images/breadcrum-arrow.webp);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
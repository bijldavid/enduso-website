<template>
  <footer class="reveal-ignore">
    <div class="container">
      <div>
        <p class="quote">"Wij zorgen voor energie waar mensen blij van worden"</p>
        <p>— Jacob-Jan Vijn</p>
      </div>
      <span class="hr"></span>
      <picture>
        <source srcset="/images/enduso-footer.webp" media="(min-width: 701px)">
        <img src="/images/enduso-mark-footer.webp" alt="Description">
      </picture>
      <nav>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <a href="mailto:info@enduso.com">info@enduso.com</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-phone">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <p>+31 6 12345678</p>
          </li>
          <li>
            <img src="/images/enduso-white.webp" alt="Enduso B.V.">
            <p>Enduso B.V.</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-map">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
              <path d="M9 4v13" />
              <path d="M15 7v13" />
            </svg>
            <p>1234 AB, Amsterdam</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
            </svg>
            <a href="">LinkedIn</a>
          </li>
        </ul>
        <button type="button" class="to-top" @click="scrollToTop" aria-label="Back to top">
          <img src="/images/footer-up-arrow.webp" alt="">
        </button>
      </nav>

      <p class="legal">&copy; 2026 Enduso. Alle rechten voorbehouden.</p>
    </div>
  </footer>
</template>

<script setup>
function scrollToTop() {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
footer {
  background-color: var(--background-900);
}

footer .container {
  padding: var(--block-padding) var(--inline-padding);
  display: grid;
  gap: 3rem;
}

footer .container * {
  color: var(--neutral-100);
}

footer .container div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

footer .container div .quote {
  font-family: artavion, sans-serif;
  font-weight: 400;
  line-height: 1.3em;
  font-size: var(--h2-size);
  text-wrap: balance;
  max-width: 25ch;
  margin: 0 auto;
}

footer .container .hr {
  height: 1px;
  background-color: var(--devider-bright);
  padding: 0;
}

footer .container picture {
  max-width: 350px;
  margin: 0 auto;
}

footer .container nav {
  display: grid;
  justify-items: center;
  gap: 1.5rem;
}

footer .container nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  gap: 1rem;
  margin-top: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--devider-bright);
}

footer .container nav ul li {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .25rem;
  border-radius: 5px;
}

footer .container nav ul li:has(a):hover {
  background-color: #ffffff20;
}

footer .container nav ul li svg {
  stroke-width: 1.5px;
}

footer .container nav ul li :is(svg, img) {
  width: calc(var(--p-size) + 0.5rem);
  height: auto;
}

footer .container nav ul li a {
  position: relative;
  font-family: poppins, sans-serif;
  font-weight: 400;
  color: var(--neutral-100);
  font-size: var(--p-size);
}

footer .container nav ul li a:hover::before {
  width: 100%;
}

footer .container nav .to-top {
  isolation: isolate;
  position: relative;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

footer .container nav .to-top::before {
  content: '';
  position: absolute;
  z-index: -1;
  height: 150%;
  aspect-ratio: 1;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: #ffffff20;
  border-radius: 5px;
  scale: 0;
  transition: scale 0.15s ease;
}

footer .container nav .to-top:hover::before {
  scale: 1;
}

footer .container nav .to-top img {
  height: 1.25rem;
  width: auto;
}

footer .container .legal {
  color: var(--neutral-500);
  text-align: center;
}

@media (width > 700px) {
  footer .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  footer .container picture {
    max-width: 100%;
    margin: 3rem auto;
  }

  footer .container nav {
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
  }

  footer .container nav ul {
    padding: 0;
    margin: 0;
    border: none;
    align-items: start;
  }

  footer .container nav .to-top {
    height: max-content;
  }
}
</style>
<template>
  <footer>
    <div class="container">
      <div>
        <p class="quote">"Wij zorgen voor energie waar mensen blij van worden"</p>
        <p>— Jacob-Jan Vijn</p>
      </div>
      <span class="hr"></span>
      <picture>
        <source srcset="/images/enduso-footer.png" media="(min-width: 701px)">
        <img src="/images/enduso-mark-footer.png" alt="Description">
      </picture>
      <nav>
        <ul>
          <li>
            <p>info@enduso.nl</p>
          </li>
          <li>
            <p>+31 6 12345678</p>
          </li>
          <li>
            <p>Enduso B.V.</p>
          </li>
          <li>
            <p>1234 AB, Amsterdam</p>
          </li>
          <li>
            <p>LinkedIn</p>
          </li>
        </ul>
        <a href="#hero"><img src="/images/footer-up-arrow.png" alt="Back to top"></a>
      </nav>

      <p class="legal">&copy; 2026 Enduso. Alle rechten voorbehouden.</p>
    </div>
  </footer>
</template>

<script>

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
}

footer .container nav ul li a {
  position: relative;
  font-family: poppins, sans-serif;
  font-weight: 400;
  color: var(--neutral-100);
  font-size: var(--p-size);
}

footer .container nav ul li a::before {
  content: '';
  position: absolute;
  width: 0px;
  height: 1px;
  background-color: var(--neutral-100);
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease;
}

footer .container nav ul li a:hover::before {
  width: 100%;
}

footer .container nav>a {
  isolation: isolate;
  position: relative;
}

footer .container nav>a::before {
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

footer .container nav>a:hover::before {
  scale: 1;
}

footer .container nav>a img {
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

  footer .container nav>a {
    height: max-content;
  }
}
</style>
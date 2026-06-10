<template>
  <header :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="logo-container">
        <img class="logo-mark" src="/images/enduso-logo-mark.png" alt="enduso-logo-mark">
        <img class="logo-text" src="/images/enduso-logo-text.png" alt="enduso-logo-text">
      </div>

      <nav :class="{ 'toggle-menu': menuOpen, 'menu-interacted': menuInteracted }" @click="handleNavClick">
        <ul>
          <li><a href="#EMS">Energiesysteem</a></li>
          <li><a href="#partners">Leveranciers</a></li>
          <li><a href="#projects">Projecten</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#FAQS">FAQs</a></li>
        </ul>
      </nav>

      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

/* ================================================== */
/* STATE                                              */
/* ================================================== */

const menuOpen = ref(false)
const menuInteracted = ref(false)
const isScrolled = ref(false)

/* ================================================== */
/* HELPERS                                            */
/* ================================================== */

function setScrollLock(isLocked) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('menu-open', isLocked)
  document.body.classList.toggle('menu-open', isLocked)
}

/* ================================================== */
/* INTERACTIONS                                       */
/* ================================================== */

function toggleMenu() {
  menuInteracted.value = true
  menuOpen.value = !menuOpen.value
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    menuOpen.value = false
  }
}

function handleResize() {
  menuOpen.value = false
  menuInteracted.value = false
  setScrollLock(false)
}

function handleNavClick(event) {
  if (!event.target.closest('a')) return
  menuOpen.value = false
  setScrollLock(false)
}

const updateScrollState = () => {
  if (typeof window === 'undefined') return
  isScrolled.value = window.scrollY > 0
}

/* ================================================== */
/* LIFECYCLE                                          */
/* ================================================== */

let stopWatcher

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)

  stopWatcher = watch(menuOpen, (isOpen) => {
    setScrollLock(isOpen)
  }, { immediate: true })
})

onUnmounted(() => {
  menuOpen.value = false
  setScrollLock(false)
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  if (typeof stopWatcher === 'function') stopWatcher()
})
</script>

<style>
/* ================================================== */
/* HEADER                                             */
/* ================================================== */

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(0);
  background-color: transparent;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, translate .3s ease;
  padding: 1rem var(--inline-padding);
}

header.is-scrolled {
  background-color: #ffffff2e;
  backdrop-filter: blur(10px);
}

header .container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  isolation: isolate;
}

header .container .logo-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 6rem;
  transition: height .3s ease;
}

header.is-scrolled .container .logo-container {
  height: 2rem;
}

header .container .logo-container .logo-text {
  width: 100%;
  scale: 1;
  transition: scale .3s ease;
}

header.is-scrolled .container .logo-container .logo-text {
  scale: 0;
}

header .container .logo-container .logo-mark {
  width: 45%;
  margin-left: 10%;
  translate: 0;
  transition: width .3s ease, translate .3s ease;
}

header.is-scrolled .container .logo-container .logo-mark {
  width: 30%;
  translate: 0 60%;
}

header .container nav {
  position: fixed;
  background: var(--background-900);
  inset: 0;
  height: 100vh;
  width: 100%;
  translate: 100%;
}

header .container nav.menu-interacted {
  transition: translate .3s ease;
}

header .container nav ul {
  position: relative;
  display: grid;
  gap: 1rem;
  margin: 10rem var(--inline-padding);
  padding-top: 3rem;
  border-top: 1px solid var(--devider-bright);
}

header .container nav ul li {
  position: relative;
  /* width: max-content; */
  height: 100%;
}

header .container nav ul li:nth-of-type(4n + 1) {
  --brand-color: var(--orange);
}

header .container nav ul li:nth-of-type(4n + 2) {
  --brand-color: var(--purple);
}

header .container nav ul li:nth-of-type(4n + 3) {
  --brand-color: var(--blue);
}

header .container nav ul li:nth-of-type(4n + 4) {
  --brand-color: var(--green);
}

header .container nav ul li a {
  display: block;
  font-family: artavion, sans-serif;
  font-weight: 400;
  line-height: 1.3em;
  color: var(--neutral-100);
  font-size: calc(var(--h3-size) - 3px);
  text-wrap: wrap;
  padding: 1rem 2rem;
  background-color: transparent;
  border-radius: 5px;
  background-color: #ffffff10;
  border: 1px solid var(--brand-color);

}

header .container nav.toggle-menu {
  translate: 0 0;
}

@media (hover: hover) and (width < 700px) and (pointer: fine) {
  header .container nav ul li:hover a {
    background-color: #ffffff40;
  }

  header .container nav ul li:hover a {
    color: var(--neutral-100);
  }
}

header .container:has(.toggle-menu) button span {
  background-color: var(--neutral-100) !important;
}

/* scroll-lock */
body:has(.toggle-menu) {
  overflow-y: hidden;
}

body.menu-open {
  overflow: hidden;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - */
/* HAMBURGER MENU                                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - */

header .container button {
  --burger-size: 15px;
  position: absolute;
  top: 50%;
  right: 0;
  translate: 0 -50%;

  height: var(--burger-size);
  width: 20px;
  display: grid;
  grid-template-areas: 'stack';
  place-items: center;
  cursor: pointer;
  z-index: 10;

  border: none;
  appearance: none;
  background: none;
}



@media (hover: hover) and (pointer: fine) {

  header .container button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    height: 2.5rem;
    aspect-ratio: 1;

    background: var(--GSS-primary);
    opacity: 0.1;
    border-radius: 50%;
    z-index: -1;
    scale: 0;
    transition: scale .3s ease, opacity .3s ease;
  }

  header .container button:hover::after {
    scale: 1;
    opacity: 0.15;
  }

}

header .container button span {
  --line-thickness: 2px;
  grid-area: stack;
  width: 100%;
  height: var(--line-thickness);
  background-color: var(--neutral-100);
  transition: background-color .3s ease, translate .3s ease, rotate .3s ease, opacity .3s ease, width .3s ease;
}

header.is-scrolled .container button span {
  background-color: var(--neutral-700);
}

header .container button span:first-of-type {
  translate: 0 calc(-1 * (var(--burger-size) / 2) + (var(--line-thickness) / 2));
}

header .container button span:last-of-type {
  translate: 0 calc((var(--burger-size) / 2) - (var(--line-thickness) / 2));
}

header .container:has(.toggle-menu) button span:nth-of-type(1) {
  translate: 0 0;
  rotate: z 45deg;
  width: calc(100% * 1.1);
}

header .container:has(.toggle-menu) button span:nth-of-type(2) {
  translate: 0 0;
  opacity: 0;
  width: 0px;
}

header .container:has(.toggle-menu) button span:nth-of-type(3) {
  translate: 0 0;
  rotate: z -45deg;
  width: calc(100% * 1.1);
}


header.hidden {
  translate: 0 calc(-100% - 1rem);
}


@media (width > 800px) {

  header .container {
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
  }

  header .container>button {
    display: none;
  }

  header .container nav {
    position: static;
    translate: 0;
    height: auto;
    width: auto;
    background: none;
    display: block;
  }

  header .container nav ul {
    display: flex;
    padding: 0;
    margin: 0;
    gap: .5rem;
    border: none;
  }

  header .container nav ul li {
    padding: 0;
  }

  header .container nav ul li:first-of-type::before {
    display: none;
  }

  header .container nav ul li a {
    font-family: artavion, sans-serif;
    font-weight: 400;
    line-height: 1.3em;
    color: var(--neutral-100);
    font-size: calc(var(--p-size) - 3px);
    text-wrap: wrap;
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
  }

  header .container nav ul li a:hover {
    background-color: #ffffff20 !important;
    outline: 1px solid color-mix(in oklch, var(--brand-color) 66%, white);
    color: color-mix(in oklch, var(--brand-color) 66%, white) !important;
  }

  header.is-scrolled .container nav ul li a {
    background-color: #ffffff40;
    color: var(--neutral-700);
  }

  header.is-scrolled .container nav ul li a:hover {
    background-color: #ffffff80 !important;
    outline: 1px solid var(--brand-color);
    color: var(--brand-color) !important;
  }
}
</style>
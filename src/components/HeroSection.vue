<script setup lang="ts">
  import Button from "./UI/Button.vue";
  import heroImage from "../assets/kopf_logo.svg";
</script>

<template>
  <section id="hero" class="flex items-center overflow-hidden relative">
    <div class="m-auto flex flex-col items-start gap-8 z-10 p-3 max-w-5xl">
      <h1
        class="text-7xl leading-tight handwritten heading-desktop hidden sm:inline"
      >
        Willkommen in der Ergotherapie Mensch/ich!
      </h1>

      <h1 class="mb-5 handwritten sm:hidden flex flex-col gap-1">
        <p class="text-2xl shrink-welcome">Willkommen in der Ergotherapie</p>
        <span class="shrink-menschlich"> Mensch/ich! </span>
      </h1>

      <span class="sm:text-2xl">
        Bei uns erwartet Sie ein Ort für Gesundheit, Entwicklung und
        Menschlichkeit. Der Mensch als "Ich" mit all seinen Facetten steht bei
        uns im Vordergrund. Als Patient*in und als Mitarbeiter*in.
      </span>

      <!-- <div class="flex gap-3">
        <Button label="Kontakt aufnehmen" to="/#kontakt" />
        <Button label="Unsere Leistungen" to="/#kontakt" variant="hollow" />
      </div> -->
    </div>

    <!-- BACKGROUND IMAGE -->
    <img
      :src="heroImage.src"
      aria-hidden
      alt=""
      class="absolute z-0 md:right-20 sm:-bottom-60 -bottom-20 transition fade-in"
      style="fill: var(--color-neutral-100)"
    />
  </section>
</template>

<style lang="css" scoped>
  section {
    height: calc(100dvh - var(--navbar-height-desktop));
    background: var(--clr-gradient);

    @media (max-width: 640px) {
      height: calc(100dvh - var(--navbar-height-mobile));
    }
  }

  .heading-desktop {
    font-size: clamp(1rem, 5vw, 4rem);

    @media (max-width: 640px) {
      line-height: 1;
    }
  }

  .shrink-welcome {
    font-size: clamp(1rem, 5vw, 5rem);
    line-height: 0;

    @media (max-width: 640px) {
      line-height: 1;
    }
  }

  .shrink-menschlich {
    font-size: clamp(3rem, 10vw, 4rem);
    line-height: 1.3;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 3000ms;
    transition: ease-in;
  }
</style>

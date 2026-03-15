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
        Willkommen bei Mensch/ich
      </h1>
      <h1 class="mb-5 handwritten shrink-menschlich sm:hidden">
        <span class="text-3xl"> Willkommen bei </span>
        <br />
        <span class="shrink-menschlich"> Mensch/ich </span>
      </h1>
      <span class="text-2xl">
        Ein Ort der Gesundheit, Entwicklung und Menschlichkeit in Berlin
        Adlershof.
      </span>
      <div class="flex-col gap-3 hidden sm:flex">
        <p>
          Genau hier setzen wir an. Wir begleiten Sie dabei, Ihre
          Selbstständigkeit zurückzugewinnen und Ihre Gesundheit aktiv
          mitzugestalten.
        </p>
        <p>
          Sie kennen es vielleicht: Eine Verletzung, eine Erkrankung – und
          plötzlich ist der Alltag nicht mehr der gleiche. Neben körperlichen
          Beschwerden kommen Unsicherheiten:
        </p>
        <p>Was darf ich tun? Wie kann ich meine Genesung unterstützen?</p>
      </div>

      <!-- <div class="flex gap-3">
        <Button label="Kontakt aufnehmen" to="/#kontakt" />
        <Button label="Unsere Leistungen" to="/#kontakt" variant="hollow" />
      </div> -->
    </div>

    <!-- BACKGROUND IMAGE -->
    <img
      :src="heroImage.src"
      aria-hidden
      class="absolute z-0 md:right-20 sm:-bottom-60 -bottom-20 opacity-70"
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
    font-size: clamp(3.25rem, 10vw, 4rem);
    line-height: 1.3;
  }
</style>

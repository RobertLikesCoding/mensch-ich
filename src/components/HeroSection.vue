<script setup lang="ts">
  import Button from "./Button.vue";
</script>

<template>
  <section
    class="flex justify-center items-center gradient h-dvh overflow-hidden relative"
  >
    <div class="flex flex-col items-start gap-8 z-10">
      <h1 class="text-7xl leading-tight mb-5 handwritten">
        Willkommen bei Mensch/ich
      </h1>
      <span class="text-2xl">
        Ein Ort der Gesundheit, Entwicklung und Menschlichkeit in Berlin
        Adlershof.
      </span>
      <div class="flex flex-col gap-3">
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

      <div class="flex gap-3">
        <Button label="Termin vereinbaren" to="#kontakt" />
        <Button label="Unsere Leistungen" to="#kontakt" variant="hollow" />
      </div>
    </div>

    <img
      src="/src/assets/hero_logo.png"
      alt="logo menschlich"
      aria-hidden
      class="absolute z-0 right-20 top-20"
    />
  </section>
</template>

<style lang="css" scoped></style>

<script setup lang="ts">
  import Button from "./Button.vue";
</script>

<template>
  <section class="flex justify-center gradient h-dvh">
    <div class="flex flex-col items-start gap-3">
      <h1 class="text-7xl leading-tight mb-5 handwritten">
        Willkommen bei Menschlich
      </h1>
      <span class="text-2xl">
        Ein Ort der Gesundheit, Entwicklung und Menschlichkeit in Berlin
        Adlershof.
      </span>
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

      <div class="flex gap-3">
        <Button label="Termin vereinbaren" to="#kontakt" color="secondary" />
        <Button
          label="Unsere Leistungen"
          to="#kontakt"
          color="secondary"
          variant="hollow"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
  section {
    height: calc(100vh - var(--navbar-height-desktop));
  }
</style>

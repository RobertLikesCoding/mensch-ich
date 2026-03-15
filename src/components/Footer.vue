<template>
  <footer
    class="flex flex-col gap-10 items-center text-neutral-100 bg-neutral-900 p-5"
  >
    <div class="flex gap-5 items-center w-full">
      <div class="flex flex-1 items-center">
        <!-- <img
        src="/src/assets/logo_menschlich.svg"
        alt="Logo Ergotherapie Menschlich."
        class="text-neutral-100"
      /> -->
        <div class="flex flex-col w-50">
          <p class="text-2xl font-bold">Wir sind Mitglied des B.E.D.</p>
          <a
            href="https://www.bed-ev.de/"
            target="_blank"
            class="text-pink-200 underline hover:text-pink-300"
            >bed-ev.de</a
          >
        </div>
        <a href="https://www.bed-ev.de/" target="_blank">
          <img
            :src="imgBED.src"
            alt="Logo Bundesverband für Ergotherapeut/innen."
            class="w-25 mb-2"
          />
        </a>
      </div>
    </div>
    <ul
      class="flex flex-col md:flex-row md:gap-10 list-none items-center gap-2"
    >
      <li><a href="/impressum" class="hover:underline">Impressum</a></li>
      <li><a href="/datenschutz" class="hover:underline">Datenschutz</a></li>
      <li>
        <p class="text-center text-sm md:text-base">
          © 2026 Mensch/ich - Praxis für Ergotherapie. Alle Rechte vorbehalten.
        </p>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
  import imgBED from "../assets/logo_bed.jpeg";
</script>

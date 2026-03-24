<template>
  <nav>
    <a href="/#page-top" class="flex-1">
      <img :src="imgLogo.src" alt="Logo der Ergotherapie Mensch/ich." />
    </a>
    <ul class="flex gap-5 md:gap-10 items-center justify-evenly flex-2">
      <li class="hover:underline underline-offset-5">
        <a href="/#leistungen">Leistungen</a>
      </li>
      <li class="hover:underline underline-offset-5">
        <a href="/#überuns">Über uns</a>
      </li>
      <li class="hover:underline underline-offset-5">
        <a href="/#team">Team</a>
      </li>
      <li>
        <Button label="Kontakt" to="/#kontakt" style="height: 30px" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import imgLogo from "../assets/logo_menschlich.svg";
  import Button from "./UI/Button.vue";
</script>

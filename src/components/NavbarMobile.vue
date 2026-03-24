<template>
  <nav>
    <div
      class="flex justify-between items-center w-full z-10 bg-neutral-100 py-2"
    >
      <a href="/#page-top">
        <img
          :src="imgLogo.src"
          alt="Logo der Ergotherapie Mensch/ich."
          class="h-20 ps-5"
        />
      </a>

      <button
        @click="isDropdownOpen = !isDropdownOpen"
        :class="`me-5 p-2 sm:hidden ${isDropdownOpen ? 'burger-close' : 'burger-toggle'}`"
        :aria-expanded="isDropdownOpen"
        :aria-label="isDropdownOpen ? 'Menü schließen' : 'Menü öffnen'"
      >
        <span class="bg-neutral-900"></span>
        <span class="bg-neutral-900"></span>
        <span class="bg-neutral-900"></span>
      </button>
    </div>
    <div
      :class="[
        'absolute w-full text-center transition-all duration-800',
        isDropdownOpen ? 'top-22' : '-top-64',
      ]"
    >
      <ul class="flex flex-col gap-5 p-5 bg-neutral-100 w-full">
        <li>
          <a
            @click="isDropdownOpen = false"
            href="/#leistungen"
            class="active:text-shadow-lg"
            >Leistungen</a
          >
        </li>
        <li>
          <a
            @click="isDropdownOpen = false"
            href="/#überuns"
            class="active:text-shadow-lg"
            >Über uns</a
          >
        </li>
        <li>
          <a
            @click="isDropdownOpen = false"
            href="/#team"
            class="active:text-shadow-lg"
            >Team</a
          >
        </li>
        <li class="m-auto">
          <Button
            @click="isDropdownOpen = false"
            label="Kontakt"
            to="/#kontakt"
            style="height: 30px; width: fit-content"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import imgLogo from "../assets/logo_menschlich.svg";
  import Button from "./UI/Button.vue";

  const isDropdownOpen = ref<boolean>(false);
</script>

<style>
  .burger-toggle,
  .burger-close {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 46px;
    height: 41px;
    cursor: pointer;

    span {
      height: 3px;
      border-radius: 5px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }
  }

  /* Burger → X Transformation */
  .burger-close span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 7px);
  }

  .burger-close span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  .burger-close span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -7px);
  }
</style>

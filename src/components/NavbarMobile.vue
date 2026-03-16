<template>
  <nav>
    <a href="/#page-top">
      <img
        :src="imgLogo.src"
        alt="Logo der Ergotherapie Mensch/ich."
        class="h-20 ps-5"
      />
    </a>
    <input
      type="checkbox"
      class="mobile-menu"
      id="dropdown-active"
      aria-label="Mobile Menü öffnen/schließen"
    />

    <label for="dropdown-active" id="overlay"></label>
    <div class="pe-5 p-2" id="toggle-icons">
      <label for="dropdown-active" class="mobile-icon sm:hidden burger-toggle">
        <span class="bg-neutral-900"></span>
        <span class="bg-neutral-900"></span>
        <span class="bg-neutral-900"></span>
      </label>
    </div>

    <div
      class="dropdown-menu absolute w-full text-center top-22 opacity-0 pointer-events-none transition-all duration-400 z-10"
    >
      <ul class="flex flex-col gap-5 p-5 bg-neutral-100 w-full">
        <li>
          <a href="#leistungen" class="active:text-shadow-lg">Leistungen</a>
        </li>
        <li><a href="#überuns" class="active:text-shadow-lg">Über uns</a></li>
        <li><a href="#team" class="active:text-shadow-lg">Team</a></li>
        <li class="m-auto">
          <Button
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
  import imgLogo from "../assets/logo_menschlich.svg";
  import Button from "./UI/Button.vue";
</script>

<style>
  #dropdown-active {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  .burger-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 26px;
    cursor: pointer;
  }

  .burger-toggle span {
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background: #111;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }

  /* Burger → X Transformation */
  #dropdown-active:checked ~ #toggle-icons .burger-toggle span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  #dropdown-active:checked ~ #toggle-icons .burger-toggle span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  #dropdown-active:checked ~ #toggle-icons .burger-toggle span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  /* Menü-Animation */
  #dropdown-active:checked ~ .dropdown-menu {
    display: flex;
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  #overlay {
    position: fixed;
  }

  #dropdown-active:checked ~ #overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9;
  }
</style>

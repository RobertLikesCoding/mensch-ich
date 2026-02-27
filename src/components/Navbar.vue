<template>
  <nav class="sm:flex hidden justify-center items-center gap-5 md:gap-10 py-2">
    <img
      src="/src/assets/logo_menschlich.svg"
      alt="Logo Ergotherapie Menschlich."
    />
    <ul class="flex gap-5 md:gap-10">
      <li class="hover:text-shadow-2xs">
        <a href="#leistungen">Leistungen</a>
      </li>
      <li class="hover:text-shadow-2xs"><a href="#über">Über uns</a></li>
      <li class="hover:text-shadow-2xs"><a href="#team">Team</a></li>
      <li class="hover:text-shadow-2xs"><a href="#kontakt">Kontakt</a></li>
    </ul>
  </nav>

  <nav
    class="flex justify-between w-full items-center gap-10 sm:hidden relative py-2"
  >
    <img
      src="/src/assets/logo_menschlich.svg"
      alt="Logo Ergotherapie Menschlich."
      class="h-20 ps-3"
    />
    <input type="checkbox" class="mobile-menu" id="dropdown-active" />

    <div class="p-2 pe-3" id="toggle-icons">
      <label for="dropdown-active" class="mobile-icon sm:hidden burger-toggle">
        <span class="bg-neutral-900"></span>
        <span class="bg-neutral-900"></span>
        <span class="bg-neutral-900"></span>
      </label>
    </div>

    <div
      class="dropdown-menu hidden absolute h-auto w-full text-center top-22 opacity-0 transition-all duration-300"
    >
      <ul class="flex flex-col gap-5 p-5 bg-neutral-100 w-full">
        <li class="active:text-shadow-2xs">
          <a href="#leistungen">Leistungen</a>
        </li>
        <li class="active:text-shadow-lg"><a href="#über">Über uns</a></li>
        <li class="active:text-shadow-lg"><a href="#team">Team</a></li>
        <li class="active:text-shadow-lg"><a href="#kontakt">Kontakt</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

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
  }
</style>

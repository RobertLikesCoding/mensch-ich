<template>
  <nav>
    <a href="/#page-top" class="flex-1">
      <img :src="imgLogo.src" :alt="t('nav.logo_alt')" />
    </a>
    <ul class="flex gap-5 md:gap-10 items-center justify-evenly flex-2">
      <li class="hover:underline underline-offset-5">
        <a href="/#leistungen">{{ t("nav.services") }}</a>
      </li>
      <li class="hover:underline underline-offset-5">
        <a href="/#überuns">{{ t("nav.about_us") }}</a>
      </li>
      <li class="hover:underline underline-offset-5">
        <a href="/#team">{{ t("nav.team") }}</a>
      </li>
      <li class="flex items-center gap-2">
        <div class="flex">
          <a href="/"> DE </a>
          /
          <a href="/en"> EN </a>
        </div>
        <LanguageIcon />
      </li>
      <li>
        <Button
          :label="t('nav.button.contact')"
          to="/#kontakt"
          style="height: 30px"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import imgLogo from "../assets/logo_menschlich.svg";
  import Button from "./UI/Button.vue";

  import { useTranslations } from "../i18n/utils";
  import LanguageIcon from "./UI/LanguageIcon.vue";

  const t = useTranslations();
</script>

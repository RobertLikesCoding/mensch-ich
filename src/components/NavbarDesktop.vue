<template>
  <nav>
    <a :href="buildLocalePath(lang, '#page-top')" class="flex-1">
      <img :src="imgLogo.src" :alt="t('nav.logo_alt')" />
    </a>
    <ul
      class="flex gap-5 md:gap-10 items-center justify-evenly flex-2 whitespace-nowrap"
    >
      <li class="hover:underline underline-offset-5">
        <a :href="buildLocalePath(lang, '#leistungen')">{{
          t("nav.services")
        }}</a>
      </li>
      <li class="hover:underline underline-offset-5">
        <a :href="buildLocalePath(lang, '#überuns')">{{ t("nav.about_us") }}</a>
      </li>
      <li class="hover:underline underline-offset-5">
        <a :href="buildLocalePath(lang, '#team')">{{ t("nav.team") }}</a>
      </li>
      <li class="flex items-center">
        <LanguageSwitcher :lang="lang" />
      </li>
      <li>
        <Button
          :label="t('nav.button.contact')"
          :to="buildLocalePath(lang, '#kontakt')"
          style="height: 30px"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import imgLogo from "../assets/logo_menschlich.svg";
  import Button from "./UI/Button.vue";

  import { useTranslations, buildLocalePath } from "../i18n/languageUtils";
  import type { SupportedLanguages } from "../i18n/languageUtils";
  import LanguageSwitcher from "./LanguageSwitcher.vue";

  const props = defineProps<{ lang: SupportedLanguages }>();
  const t = useTranslations(props.lang);
</script>

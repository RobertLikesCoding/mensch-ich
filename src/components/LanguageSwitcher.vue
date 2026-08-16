<template>
  <div class="flex me-1">
    <a href="/" :class="[lang === 'de' && 'underline underline-offset-3']">
      DE
    </a>
    /
    <a href="/en/" :class="[lang === 'en' && 'underline underline-offset-3']">
      EN
    </a>
  </div>
  <LanguageIcon />
</template>

<script setup lang="ts">
  import LanguageIcon from "./UI/LanguageIcon.vue";
  import type { SupportedLanguages } from "../i18n/languageUtils";

  defineProps<{ lang: SupportedLanguages }>();
</script>

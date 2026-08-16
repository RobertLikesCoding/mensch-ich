<template>
  <section id="leistungen" class="flex flex-col lg:items-center fade-in">
    <div class="text-center relative px-3 max-w-5xl">
      <h2 class="text-4xl sm:text-5xl font-bold text-primary-600 mb-3">
        {{ t("services.heading") }}
      </h2>
      <p>
        {{ t("services.intro") }}
      </p>

      <!-- decorative shapes -->
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 -left-64"
        style="
          width: 400px;
          height: 400px;
          background-color: hsl(34.6, 41.9%, 90%);
        "
      ></div>
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 top-84"
        style="
          width: 260px;
          height: 260px;
          right: -10%;
          background-color: hsl(34.6, 41.9%, 90%);
        "
      ></div>
    </div>

    <div
      class="overflow-x-auto"
      tabindex="0"
      role="region"
      aria-label="Leistungen-Karten"
    >
      <div class="px-10 md:px-3 flex gap-3 py-10">
        <ServiceCard
          v-for="service in services"
          :title="service.title"
          :img="service.illustration"
          :alt="service.alt"
        >
          {{ service.description }}
        </ServiceCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import imgGeriatrie from "../assets/Geriatrie.svg";
  import imgOrthopädie from "../assets/Orthopädie.svg";
  import imgPsychatrie from "../assets/Psychiatrie.svg";
  import imgPädiatrie from "../assets/Pädiatrie.svg";
  import {
    useTranslations,
    type SupportedLanguages,
  } from "../i18n/languageUtils";
  import ServiceCard from "./ServiceCard.vue";

  const props = defineProps<{ lang: SupportedLanguages }>();
  const t = useTranslations(props.lang);

  const services = computed(() => {
    return [
      {
        title: t("services.orthopaedie.title"),
        description: t("services.orthopaedie.desc"),
        illustration: imgOrthopädie.src,
        alt: t("services.orthopaedie.alt"),
      },
      {
        title: t("services.paediatrie.title"),
        description: t("services.paediatrie.desc"),
        illustration: imgPädiatrie.src,
        alt: t("services.paediatrie.alt"),
      },
      {
        title: t("services.psychiatrie.title"),
        description: t("services.psychiatrie.desc"),
        illustration: imgPsychatrie.src,
        alt: t("services.psychiatrie.alt"),
      },
      {
        title: t("services.geriatrie.title"),
        description: t("services.geriatrie.desc"),
        illustration: imgGeriatrie.src,
        alt: t("services.geriatrie.alt"),
      },
    ];
  });
</script>

<style scoped>
  section {
    scroll-margin-top: 130px;
  }
</style>

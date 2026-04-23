<template>
  <section id="überuns" class="flex justify-center relative px-3">
    <div class="flex flex-col max-w-5xl gap-1">
      <h2 class="text-4xl sm:text-5xl font-bold text-primary-600 mb-3">
        {{ t("about.heading") }}
      </h2>
      <h3 class="font-bold">
        {{ t("about.subheading") }}
      </h3>
      <br />
      <p>
        {{ t("about.p1") }}
      </p>
      <br />
      <p>
        {{ t("about.p2") }}
      </p>
      <br />
      <p>
        {{ t("about.p3") }}
      </p>
      <br />
      <ul class="mt-3">
        <li class="flex gap-3 py-1 items-center">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>{{ t("about.list.1") }}</span>
        </li>
        <li class="flex gap-3 py-1 items-center">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>{{ t("about.list.2") }}</span>
        </li>
        <li class="flex gap-3 py-1 items-center">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>{{ t("about.list.3") }}</span>
        </li>
        <li class="flex gap-3 py-1 items-center">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>{{ t("about.list.4") }}</span>
        </li>
        <li class="flex gap-3 py-1 items-center">
          <CheckCircleIcon class="h-6 w-6 shrink-0 text-secondary-600" />
          <span>{{ t("about.list.5") }}</span>
        </li>
      </ul>

      <!-- decorative shapes -->
      <div
        class="bg-neutral-300 rounded-full absolute -z-10 -top-20 -left-20"
        style="
          width: 800px;
          height: 800px;
          background-color: hsl(34.6, 41.9%, 90%);
        "
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CheckCircleIcon from "./UI/CheckCircleIcon.vue";
  import { useTranslations } from "../i18n/languageUtils";
  const t = useTranslations();
</script>

<style scoped>
  section {
    scroll-margin-top: 180px;
  }
</style>

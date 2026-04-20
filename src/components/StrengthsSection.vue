<template>
  <section class="flex justify-center px-3 gap-5 relative">
    <div class="max-w-5xl flex flex-col">
      <h3
        class="text-3xl font-bold text-neutral-100 text-center mb-5 text-shadow-lg"
      >
        {{ t("strengths.heading") }}
      </h3>
      <div class="flex flex-wrap justify-center gap-10">
        <div class="text-center text-neutral-100 text-shadow-lg sm:w-72 w-full">
          <h4 class="text-2xl font-bold mb-3">{{ t("strengths.1.title") }}</h4>
          <p>
            {{ t("strengths.1.desc") }}
          </p>
        </div>
        <div class="text-center text-neutral-100 text-shadow-lg sm:w-72 w-full">
          <h4 class="text-2xl font-bold mb-3">{{ t("strengths.2.title") }}</h4>
          <p>
            {{ t("strengths.2.desc") }}
          </p>
        </div>
        <div class="text-center text-neutral-100 text-shadow-lg sm:w-72 w-full">
          <h4 class="text-2xl font-bold mb-3">{{ t("strengths.3.title") }}</h4>
          <p>
            {{ t("strengths.3.desc") }}
          </p>
        </div>
      </div>
    </div>

    <!-- decorative shapes -->
    <div
      class="bg-linear-to-br from-[#5D7E65]/90 via-[#5D7E65] to-[#3A543F]/95 absolute -z-10 md:-top-10 -top-20 -left-20 drop-shadow-xl h-460 md:h-240 sm:h-200 -rotate-3 w-500 max-w-none"
    ></div>
  </section>
</template>

<script setup lang="ts">
  import { useTranslations } from "../i18n/utils";
  const t = useTranslations();
</script>

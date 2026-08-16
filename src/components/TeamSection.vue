<template>
  <section id="team" class="flex justify-center relative px-3">
    <div class="max-w-5xl flex flex-col items-center gap-5">
      <div class="text-neutral-100 text-shadow-lg text-center">
        <h2 class="text-4xl sm:text-5xl font-bold mb-3">
          {{ t("team.heading") }}
        </h2>
        <p>
          {{ t("team.intro") }}
        </p>
      </div>
      <!-- add team cards here -->
      <div class="flex flex-wrap justify-center gap-5">
        <TeamCard
          v-for="member in team"
          :key="member.name"
          :memberInfo="member"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import TeamCard from "./TeamCard.vue";
  import {
    useTranslations,
    type SupportedLanguages,
  } from "../i18n/languageUtils";
  const props = defineProps<{ lang: SupportedLanguages }>();
  const t = useTranslations(props.lang);

  const team = [
    {
      name: t("team.1.name"),
      titel: t("team.1.title"),
      skills: [t("team.1.skills")],
      description: t("team.1.desc"),
      imgPath: "",
    },
    {
      name: t("team.2.name"),
      titel: t("team.2.title"),
      skills: [t("team.2.skills")],
      description: t("team.2.desc"),
      imgPath: "",
    },
  ];
</script>

<style scoped>
  section {
    scroll-margin-top: 150px;
  }
</style>

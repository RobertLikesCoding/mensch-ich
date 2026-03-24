<template>
  <div
    class="flex flex-col w-full sm:w-100 rounded-2xl bg-neutral-100 shadow-lg max-w-80"
  >
    <!-- <img
      :src="imgPath"
      :alt="`Foto von ${name}`"
      class="object-contain rounded-t-2xl"
    /> -->
    <div class="flex flex-col gap-3 p-3 py-5">
      <div>
        <h3 class="text-2xl font-bold text-primary-600">
          {{ memberInfo.name }}
        </h3>
        <h4 class="text-xl">{{ memberInfo.titel }}</h4>
      </div>
      <!-- <div class="flex flex-wrap gap-1">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-secondary-600 text-neutral-100 font-semibold rounded-2xl py-0.5 px-2"
        >
          {{ skill }}
        </span>
      </div> -->
      <p class="text-neutral-900">{{ memberInfo.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface TeamCardProps {
    name: string;
    titel: string;
    skills: string[];
    description: string;
    imgPath: string;
  }

  defineProps<{
    memberInfo: TeamCardProps;
  }>();
</script>

<style lang="css" scoped></style>

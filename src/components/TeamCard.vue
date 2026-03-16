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
      <h3 class="text-2xl font-bold text-primary-600">{{ name }}</h3>
      <div class="flex flex-wrap gap-1">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-secondary-500 text-neutral-100 font-semibold rounded-2xl py-0.5 px-2"
        >
          {{ skill }}
        </span>
      </div>
      <p class="text-neutral-900">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
    skills: string[];
    description: string;
    imgPath: string;
  }>();
</script>

<style lang="css" scoped></style>

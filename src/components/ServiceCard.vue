<template>
  <div
    class="p-5 bg-primary-500 rounded-2xl text-neutral-100 flex flex-col justify-evenly items-center text-center w-64 shrink-0 shadow-xl"
    style="height: 24rem"
  >
    <img :src="props.img" :alt="`Illustration für ${props.title}`" />

    <div class="flex flex-col gap-3">
      <h3 class="text-2xl text-shadow-lg">{{ props.title }}</h3>
      <p><slot /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    img: string;
  }>();
</script>

<style lang="css" scoped></style>

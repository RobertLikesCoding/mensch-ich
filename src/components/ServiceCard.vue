<template>
  <div
    class="px-3 py-5 bg-linear-to-br from-[#5D7E65] via-[#5D7E65] to-[#4A6A52] rounded-2xl text-neutral-100 flex flex-col justify-evenly items-center text-center w-64 shrink-0 shadow-xl gap-5"
    style="height: 24rem"
  >
    <img :src="props.img" :alt="props.alt" class="flex-1" />

    <div class="flex flex-col gap-3 flex-2 shrink">
      <h3 class="text-2xl text-shadow-lg">{{ props.title }}</h3>
      <p><slot /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    img: string;
    alt: string;
  }>();
</script>

<style lang="css" scoped>
  img {
    height: 130px;
  }
</style>

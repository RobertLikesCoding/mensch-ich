<template>
  <a :href="to">
    {{ label }}
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    to: string;
    label: string;
    color?: "primary" | "secondary";
    variant?: "filled" | "hollow";
  }>();
</script>

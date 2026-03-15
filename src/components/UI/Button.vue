<template>
  <a
    :href="to"
    :class="[
      'flex items-center justify-center rounded-full shadow px-3 py-2 font-bold',
      getVariantClasses(),
    ]"
  >
    {{ label }}
  </a>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      to: string;
      label: string;
      color?: "primary" | "secondary";
      variant?: "hollow";
    }>(),
    {
      color: "secondary",
    },
  );

  const getVariantClasses = () => {
    if (props.color === "primary") {
      return props.variant === "hollow"
        ? "border-2 border-primary-600 text-primary-600 hover:bg-primary-100"
        : "bg-primary-600 text-neutral-100 hover:bg-primary-700 active:bg-primary-700";
    }
    return props.variant === "hollow"
      ? "border-2 border-secondary-600 text-secondary-600 bg-neutral-100 hover:bg-secondary-50"
      : "bg-secondary-600 text-neutral-100 hover:bg-secondary-700 active:bg-secondary-700";
  };
</script>

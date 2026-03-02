<template>
  <a :href="to" :class="classes">
    {{ label }}
  </a>
</template>

<script setup lang="ts">
  import { computed } from "vue";

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

  const styles = {
    primary: {
      solid: "bg-primary-600 text-neutral-100",
      hollow: "border-2 border-primary-600 text-primary-600",
    },
    secondary: {
      solid: "bg-secondary-600 text-neutral-100",
      hollow: "border-2 border-secondary-600 text-secondary-600",
    },
  } as const;

  const classes = computed(() => {
    const base =
      "flex items-center justify-center rounded-full shadow px-3 py-2 font-bold";

    const colorKey = props.color ?? "secondary";
    const variantKey = props.variant === "hollow" ? "hollow" : "solid";

    const variantClasses = styles[colorKey][variantKey];

    return [base, variantClasses].join(" ");
  });
</script>

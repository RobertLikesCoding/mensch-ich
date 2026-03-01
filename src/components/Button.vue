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

  const classes = computed(() => {
    const base = "rounded-full shadow px-3 py-2";
    const background =
      props.variant === "hollow" ? "" : `bg-${props.color}-500`;
    const border =
      props.variant === "hollow" ? `border-2 border-${props.color}-500` : "";
    const text =
      props.variant === "hollow"
        ? `text-${props.color}-500`
        : "text-neutral-100";

    return [base, background, border, text].join(" ");
  });
</script>

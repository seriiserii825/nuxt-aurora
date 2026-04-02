<script setup lang="ts">
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
});

const defaultClasses = "flex items-center justify-center text-sm font-semibold gap-2 text-white py-2 mt-8";

const styles = {
  background: props.dark ? "rgba(47, 47, 47, 0.1)" : "rgba(0, 0, 0, 0.1)",
};
</script>

<template>
  <a href="tel:0422411596" :class="defaultClasses" :style="styles">
    <span
      class="flex items-center justify-center w-8 h-8 border rounded-full border-white/50 shrink-0">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    </span>
    0422 411596
  </a>
</template>

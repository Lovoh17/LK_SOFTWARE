<template>
  <svg :width="size" :height="size" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- L -->
    <rect x="4" y="4" width="18" height="42" :fill="color" />
    <!-- K top-right -->
    <rect x="28" y="4" width="18" height="18" :fill="color" />
    <!-- K bottom-right -->
    <rect x="28" y="28" width="18" height="18" :fill="color" />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 40,
  },
  color: {
    type: String,
    default: '#0a0a0a',
  },
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" rx="56" :fill="bg" />
    <g :fill="lines">
      <rect x="64" y="60"  width="116" height="22" rx="4" />
      <rect x="64" y="117" width="84"  height="22" rx="4" />
      <rect x="64" y="174" width="116" height="22" rx="4" />
    </g>
    <circle cx="196" cy="185" r="18" :fill="accent" />
    <path d="M188 185 l6 6 l12 -12" fill="none" :stroke="check"
          stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size:    { type: Number, default: 40 },
  variant: { type: String, default: 'light' }, // 'light' | 'dark'
})

const bg     = computed(() => props.variant === 'dark' ? '#ffffff' : '#0F4C5C')
const lines  = computed(() => props.variant === 'dark' ? '#0F4C5C' : '#F5F2EA')
const accent = computed(() => '#2EC4B6')
const check  = computed(() => props.variant === 'dark' ? '#ffffff' : '#0F4C5C')
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur border-b border-ink/10">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-3">
        <LKLogo :size="36" />
        <div>
          <div class="font-display text-xl leading-none tracking-wider text-ink">LK SOFTWARE</div>
          <div class="text-[9px] tracking-[0.2em] uppercase text-ink/50">Development</div>
        </div>
      </div>

      <!-- Links escritorio -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link text-ink/70 hover:text-ink transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA -->
      <a
        href="#contacto"
        class="bg-ink text-paper px-5 py-2 text-sm font-medium hover:bg-ink/80 transition-colors"
      >
        Comenzar ahora
      </a>
    </div>
  </nav>
</template>

<script setup>
import LKLogo from './LKLogo.vue'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#planes', label: 'Planes' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto', label: 'Contacto' },
]
</script>

<style scoped>
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #0a0a0a;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
</style>
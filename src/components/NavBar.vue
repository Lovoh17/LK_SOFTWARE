<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-etrib-nav/95 backdrop-blur border-b border-paper/10">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-3">
        <LKLogo :size="36" variant="light" />
        <div>
          <div class="font-display text-xl leading-none tracking-wider text-paper">
            e<span class="text-etrib-mint">·</span>trib
          </div>
          <div class="text-[9px] tracking-[0.2em] uppercase text-paper/50">Plataforma Empresarial · SV</div>
        </div>
      </div>

      <!-- Links escritorio -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link text-paper/70 hover:text-paper transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA -->
      <a
        href="#contacto"
        class="bg-etrib-teal text-paper px-5 py-2 text-sm font-medium hover:bg-etrib-deep transition-colors"
      >
        Comenzar ahora
      </a>
    </div>
  </nav>
</template>

<script setup>
import LKLogo from './LKLogo.vue'

const navLinks = [
  { href: '#nosotros',       label: 'Nosotros' },
  { href: '#beneficios',     label: 'Módulos' },
  { href: '#planes',         label: 'Tiers' },
  { href: '#como-funciona',  label: 'Cómo funciona' },
  { href: '#contacto',       label: 'Contacto' },
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
  background: var(--etrib-mint);
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
</style>

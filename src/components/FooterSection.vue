<template>
  <footer class="border-t border-ink/10 py-10 bg-paper">
    <div class="max-w-6xl mx-auto px-6">

      <div class="grid md:grid-cols-3 gap-10 mb-10">

        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <LKLogo :size="32" />
            <div>
              <div class="font-display text-lg leading-none tracking-wider text-ink">LK SOFTWARE</div>
              <div class="text-[8px] tracking-[0.2em] uppercase text-ink/40">Development</div>
            </div>
          </div>
          <p class="text-ink/50 text-sm leading-relaxed">
            Sistema de Facturación Electrónica certificado para empresas salvadoreñas.
          </p>
        </div>

        <!-- Links -->
        <div>
          <div class="font-display tracking-wider text-ink mb-4">NAVEGACIÓN</div>
          <ul class="space-y-2">
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-ink/50 hover:text-ink transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contacto rápido -->
        <div>
          <div class="font-display tracking-wider text-ink mb-4">CONTACTO</div>
          <ul class="space-y-3 text-sm text-ink/50">
            <li v-for="item in contactInfo" :key="item.label" class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0 text-ink/40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path v-if="item.icon === 'location'" stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                <path v-if="item.icon === 'phone'" stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                <path v-if="item.icon === 'clock'" stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-ink/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ink/40">
        <span>© {{ currentYear }} LK Software Development. Todos los derechos reservados.</span>
        <span>Sistema DTE · Ministerio de Hacienda El Salvador</span>
      </div>

    </div>
  </footer>
</template>

<script setup>
import LKLogo from './LKLogo.vue'

const currentYear = new Date().getFullYear()

const contactInfo = [
  { icon: 'location', text: 'San Miguel, El Salvador' },
  { icon: 'phone',    text: '+503 6037-6783' },
  { icon: 'clock',    text: 'Lun – Vie · 8am – 6pm' },
]

const footerLinks = [
  { href: '#planes',        label: 'Planes' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto',      label: 'Contacto' },
]
</script>
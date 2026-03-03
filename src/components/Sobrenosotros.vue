<template>
  <section id="nosotros" class="py-16 md:py-28 bg-ink text-paper overflow-hidden relative">

    <!-- Decoración tipográfica de fondo -->
    <div class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <div class="font-display text-[20rem] leading-none text-paper/[0.02] whitespace-nowrap">LK</div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        <!-- Columna izquierda: texto -->
        <div>
          <span class="bg-paper text-ink badge mb-6 inline-block">Sobre nosotros</span>
          <h2 class="font-display text-4xl md:text-6xl leading-none mb-6 md:mb-8">
            SOFTWARE<br />A LA<br /><span class="text-paper/25">MEDIDA</span>
          </h2>
          <p class="text-paper/65 leading-relaxed mb-6">
            En <strong class="text-paper font-semibold">LK Software Development</strong> somos una empresa salvadoreña
            especializada en el desarrollo de software personalizado para negocios de todos los tamaños.
            Desde sistemas de facturación hasta plataformas empresariales completas, construimos
            soluciones que se adaptan a tus procesos, no al revés.
          </p>
          <p class="text-paper/65 leading-relaxed mb-10">
            Con base en San Miguel, conocemos de cerca las necesidades del empresario local.
            Nuestro equipo combina experiencia técnica con visión de negocio para entregarte
            productos robustos, escalables y fáciles de mantener.
          </p>

          <!-- Valores clave -->
          <div class="space-y-3">
            <div
              v-for="valor in valores"
              :key="valor"
              class="flex items-center gap-3 text-sm text-paper/70"
            >
              <span class="w-1.5 h-1.5 bg-paper rounded-full flex-shrink-0"></span>
              {{ valor }}
            </div>
          </div>
        </div>

        <!-- Columna derecha: servicios -->
        <div class="space-y-4">
          <div class="mb-6">
            <div class="text-xs text-paper/40 uppercase tracking-widest mb-1">Lo que hacemos</div>
            <div class="w-8 h-0.5 bg-paper/30"></div>
          </div>

          <div
            v-for="servicio in servicios"
            :key="servicio.nombre"
            class="servicio-item border border-paper/15 p-4 md:p-5 group hover:border-paper/50 transition-colors"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 border border-paper/20 flex items-center justify-center flex-shrink-0 group-hover:border-paper/50 transition-colors">
                <svg class="w-4 h-4 text-paper/50 group-hover:text-paper transition-colors" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path :d="servicio.iconPath" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div class="font-display tracking-wider text-base mb-1">{{ servicio.nombre }}</div>
                <div class="text-paper/45 text-xs leading-relaxed">{{ servicio.desc }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const valores = [
  'Desarrollo 100% personalizado a tus necesidades',
  'Código limpio, escalable y bien documentado',
  'Acompañamiento antes, durante y después del proyecto',
  'Equipo local con atención directa y sin intermediarios',
]

const servicios = [
  {
    nombre: 'SISTEMAS DE FACTURACIÓN DTE',
    desc: 'Emisión electrónica certificada por el Ministerio de Hacienda para todo tipo de empresa.',
    iconPath: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z',
  },
  {
    nombre: 'SOFTWARE EMPRESARIAL A MEDIDA',
    desc: 'ERPs, CRMs, sistemas de inventario y gestión adaptados exactamente a tu modelo de negocio.',
    iconPath: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
  },
  {
    nombre: 'APLICACIONES WEB Y MÓVIL',
    desc: 'Plataformas modernas, responsivas y de alto rendimiento para tu negocio en línea.',
    iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 0a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75m-3 0v3m3-3v3m0 3H10.5',
  },
  {
    nombre: 'CONSULTORÍA E INTEGRACIÓN',
    desc: 'Conectamos tus sistemas existentes entre sí y asesoramos en transformación digital.',
    iconPath: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244',
  },
]
</script>

<style scoped>
.servicio-item {
  transition: transform 0.2s ease;
}
.servicio-item:hover {
  transform: translateX(4px);
}
</style>
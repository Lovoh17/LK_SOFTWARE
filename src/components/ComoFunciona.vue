<template>
  <section id="como-funciona" class="py-16 md:py-24 bg-ink text-paper">
    <div class="max-w-6xl mx-auto px-6">

      <div class="mb-12 md:mb-16">
        <span class="bg-paper text-ink badge mb-4 inline-block">Proceso simple</span>
        <h2 class="font-display text-4xl md:text-6xl leading-none">
          CÓMO<br /><span class="text-paper/25">FUNCIONA</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(paso, index) in pasos"
          :key="paso.title"
          class="group"
        >
          <div class="font-display text-6xl md:text-7xl text-paper/10 group-hover:text-paper/20 transition-colors leading-none mb-4">
            0{{ index + 1 }}
          </div>
          <h3 class="font-display text-2xl tracking-wider mb-3">{{ paso.title }}</h3>
          <p class="text-paper/50 text-sm leading-relaxed">{{ paso.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const pasos = [
  {
    title: 'REGISTRO',
    desc: 'Crea tu cuenta y configura los datos fiscales de tu empresa en minutos.',
  },
  {
    title: 'CONFIGURACIÓN',
    desc: 'Conectamos tu sistema con el Ministerio de Hacienda de forma automática.',
  },
  {
    title: 'EMISIÓN',
    desc: 'Genera facturas y documentos DTE desde la plataforma web o vía API REST.',
  },
  {
    title: 'REPORTE',
    desc: 'Consulta historial, descarga PDF/JSON y genera informes fiscales mensuales.',
  },
]
</script>
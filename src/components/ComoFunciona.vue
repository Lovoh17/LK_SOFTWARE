<template>
  <section id="como-funciona" class="py-16 md:py-24 bg-etrib-deep text-paper">
    <div class="max-w-6xl mx-auto px-6">

      <div class="mb-12 md:mb-16">
        <span class="bg-etrib-mint text-etrib-deep badge mb-4 inline-block">Proceso simple</span>
        <h2 class="font-display text-4xl md:text-6xl leading-none">
          CÓMO<br /><span class="text-etrib-mint/30">FUNCIONA</span>
        </h2>
        <p class="text-paper/45 mt-4 max-w-md text-sm leading-relaxed">
          Desde el registro hasta la operación completa de tu empresa, todo en cuatro pasos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
        <div
          v-for="(paso, index) in pasos"
          :key="paso.title"
          class="group"
        >
          <div class="font-display text-6xl md:text-7xl text-etrib-mint/10 group-hover:text-etrib-mint/25 transition-colors leading-none mb-4">
            0{{ index + 1 }}
          </div>
          <h3 class="font-display text-2xl tracking-wider mb-3">{{ paso.title }}</h3>
          <p class="text-paper/50 text-sm leading-relaxed">{{ paso.desc }}</p>
        </div>
      </div>

      <!-- Barra de tiers dentro de cómo funciona -->
      <div class="border border-paper/10 p-6">
        <div class="text-xs text-paper/40 uppercase tracking-widest mb-5">Escalabilidad por tier</div>
        <div class="space-y-3">
          <div v-for="tier in tiersInfo" :key="tier.num" class="flex items-center gap-4">
            <div class="font-display text-xs text-etrib-mint flex-shrink-0 w-5">{{ tier.num }}</div>
            <div class="flex-1 h-px relative">
              <div class="absolute inset-0 bg-paper/10"></div>
              <div
                class="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-etrib-mint/60 to-etrib-mint/20 transition-all duration-500"
                :style="{ width: tier.fill }"
              ></div>
            </div>
            <div class="text-sm text-paper/60 flex-shrink-0 w-44">{{ tier.label }}</div>
            <div
              class="text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 flex-shrink-0"
              :class="tier.active ? 'bg-etrib-mint text-etrib-deep' : 'bg-paper/10 text-paper/40'"
            >
              {{ tier.active ? 'Activo' : 'Roadmap' }}
            </div>
          </div>
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
    desc: 'Conectamos tu sistema al Ministerio de Hacienda de forma automática.',
  },
  {
    title: 'OPERACIÓN',
    desc: 'Emite DTE, gestiona inventario y opera tu POS desde una sola plataforma.',
  },
  {
    title: 'ESCALA',
    desc: 'Activa nuevos módulos cuando los necesites: Inventario, POS, ERP completo.',
  },
]

const tiersInfo = [
  { num: '01', label: 'DTE Básico — Facturación electrónica',       fill: '33%',  active: true  },
  { num: '02', label: 'Inventario + POS — Operaciones completas',   fill: '66%',  active: false },
  { num: '03', label: 'ERP Completo — Contabilidad, RRHH y BI',     fill: '100%', active: false },
]
</script>

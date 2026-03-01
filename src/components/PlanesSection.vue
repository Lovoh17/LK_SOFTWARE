<template>
  <section id="planes" class="py-24 bg-paper">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Encabezado -->
      <div class="mb-16">
        <span class="badge mb-4 inline-block">Precios transparentes</span>
        <h2 class="font-display text-6xl text-ink leading-none">
          PLANES DE<br />FACTURACIÓN
        </h2>
        <p class="text-ink/50 mt-4 max-w-md">
          Elige el plan que se adapta al volumen de documentos que tu empresa necesita emitir.
        </p>
      </div>

      <!-- Toggle anual / mensual -->
      <div class="flex items-center gap-4 mb-12">
        <span :class="!anual ? 'text-ink font-semibold' : 'text-ink/40'" class="text-sm transition-colors">
          Mensual
        </span>
        <button
          @click="anual = !anual"
          class="w-12 h-6 rounded-full border-2 border-ink relative transition-colors"
          :class="anual ? 'bg-ink' : 'bg-transparent'"
          aria-label="Cambiar ciclo de facturación"
        >
          <span
            class="absolute top-0.5 w-4 h-4 border border-ink rounded-full transition-all duration-300"
            :class="anual ? 'left-6 bg-paper' : 'left-0.5 bg-ink'"
          ></span>
        </button>
        <span :class="anual ? 'text-ink font-semibold' : 'text-ink/40'" class="text-sm transition-colors">
          Anual <span class="badge ml-1 text-[9px]">Ahorra</span>
        </span>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(plan, index) in planes"
          :key="plan.name"
          class="plan-card border-2 border-ink p-8"
          :class="index === 1 ? 'bg-ink text-paper' : 'bg-paper text-ink'"
        >
          <!-- Cabecera -->
          <div class="flex items-start justify-between mb-8">
            <div>
              <div class="font-display text-3xl tracking-wider">{{ plan.name }}</div>
              <div class="text-sm mt-1" :class="index === 1 ? 'text-paper/50' : 'text-ink/40'">
                Hasta {{ plan.dte }} DTE / mes
              </div>
            </div>
            <span v-if="index === 1" class="bg-paper text-ink badge text-[9px]">Popular</span>
          </div>

          <!-- Precio -->
          <div class="mb-8">
            <div class="font-display text-5xl leading-none">
              {{ anual ? plan.costoAnual : plan.costoMensual }}
            </div>
            <div class="text-sm mt-1" :class="index === 1 ? 'text-paper/50' : 'text-ink/40'">
              {{ anual ? 'pago anual' : 'por mes' }}
            </div>
            <Transition name="fade">
              <div
                v-if="anual"
                class="text-sm mt-2 font-semibold"
                :class="index === 1 ? 'text-green-400' : 'text-green-600'"
              >
                Ahorro de {{ plan.ahorro }} al año
              </div>
            </Transition>
          </div>

          <!-- Features -->
          <ul class="space-y-3 mb-10">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-3 text-sm"
              :class="index === 1 ? 'text-paper/80' : 'text-ink/70'"
            >
              <span class="mt-0.5 flex-shrink-0">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <a
            href="#contacto"
            class="block text-center py-3 text-sm font-medium transition-colors border-2"
            :class="
              index === 1
                ? 'border-paper text-ink bg-paper hover:bg-transparent hover:text-paper'
                : 'border-ink text-paper bg-ink hover:bg-transparent hover:text-ink'
            "
          >
            Contratar plan
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const anual = ref(true)

const planes = [
  {
    name: 'BÁSICO',
    dte: '500',
    costoAnual: '$230',
    costoMensual: '$21.99',
    ahorro: '$34',
    features: [
      'Hasta 500 DTE mensuales',
      'Facturas de consumidor final',
      'Crédito fiscal electrónico',
      'Panel de administración',
      'Soporte por email',
    ],
  },
  {
    name: 'MEDIO',
    dte: '1,000',
    costoAnual: '$340',
    costoMensual: '$29.99',
    ahorro: '$40',
    features: [
      'Hasta 1,000 DTE mensuales',
      'Todos los documentos del plan Básico',
      'Notas de remisión',
      'Reportes avanzados',
      'Soporte prioritario',
    ],
  },
  {
    name: 'PRO',
    dte: '1,500',
    costoAnual: '$500',
    costoMensual: '$44.99',
    ahorro: '$40',
    features: [
      'Hasta 1,500 DTE mensuales',
      'Todos los tipos de DTE',
      'API de integración',
      'Multi-usuario',
      'Soporte telefónico dedicado',
    ],
  },
]
</script>

<style scoped>
.plan-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}
.plan-card:hover {
  transform: translateY(-6px);
  box-shadow: 8px 8px 0px #0a0a0a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

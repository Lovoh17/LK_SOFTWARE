<template>
  <section class="hero-grid pt-20 pb-16 md:pt-32 md:pb-24 min-h-screen flex flex-col justify-center">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

        <!-- Texto principal -->
        <div class="animate-fade-up">
          <span class="badge mb-6 inline-block">El Salvador · DTE · Inventario · ERP</span>
          <h1 class="font-display text-5xl md:text-7xl lg:text-6xl leading-none text-ink mb-6">
            PLATAFORMA<br />
            <span class="text-etrib-teal/25">EMPRESARIAL</span><br />
            ESCALABLE
          </h1>
          <p class="text-ink/60 text-lg leading-relaxed mb-4 max-w-md">
            Desde la emisión de Documentos Tributarios Electrónicos hasta un ERP completo con
            inventario, POS y contabilidad — todo en un solo sistema que crece con tu empresa.
          </p>
          <p class="text-ink/40 text-sm mb-10 max-w-md">
            Certificado por el Ministerio de Hacienda de El Salvador.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#planes" class="bg-etrib-teal text-paper px-8 py-4 text-sm font-medium text-center hover:bg-etrib-deep transition-colors">
              Ver tiers y planes →
            </a>
            <a href="#como-funciona" class="border-2 border-etrib-teal text-etrib-teal px-8 py-4 text-sm font-medium text-center hover:bg-etrib-teal hover:text-paper transition-colors">
              Cómo funciona
            </a>
          </div>
        </div>

        <!-- Visual de marca + stats -->
        <div class="animate-fade-up delay-200 flex flex-col gap-6">

          <!-- Lockup del producto -->
          <div class="flex justify-center md:justify-start">
            <img
              src="../img/etrib-lockup-h.svg"
              alt="e·trib – Plataforma Empresarial"
              class="w-full max-w-sm md:max-w-full h-auto"
            />
          </div>

          <!-- Stats -->
          <div class="border-2 border-etrib-teal/30 p-6 bg-paper relative">
            <div class="absolute -top-3 left-6 badge">Plataforma</div>
            <div class="grid grid-cols-2 gap-4 md:gap-6 mt-4">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="border-b border-etrib-teal/15 pb-4"
              >
                <div class="font-display text-3xl md:text-4xl text-etrib-teal">{{ stat.value }}</div>
                <div class="text-xs text-ink/50 uppercase tracking-widest mt-1">{{ stat.label }}</div>
              </div>
            </div>
            <div class="mt-5 pt-5 border-t border-etrib-teal/15 flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-etrib-mint animate-pulse"></div>
              <span class="text-sm text-ink/60">Sistema activo · San Miguel, El Salvador</span>
            </div>
          </div>

          <!-- Tier progress indicator -->
          <div class="border border-etrib-teal/20 p-4 bg-paper/60">
            <div class="text-xs text-ink/40 uppercase tracking-widest mb-3">Progresión de tiers</div>
            <div class="flex items-center gap-2">
              <div
                v-for="(tier, i) in tiers"
                :key="tier.label"
                class="flex items-center gap-2"
              >
                <div class="flex flex-col items-center gap-1">
                  <div
                    class="w-8 h-8 flex items-center justify-center text-xs font-display border-2 transition-colors"
                    :class="tier.active ? 'bg-etrib-teal border-etrib-teal text-paper' : 'border-etrib-teal/30 text-ink/40'"
                  >
                    {{ String(i + 1).padStart(2, '0') }}
                  </div>
                  <div class="text-[9px] text-ink/40 uppercase tracking-wide whitespace-nowrap">{{ tier.label }}</div>
                </div>
                <div v-if="i < tiers.length - 1" class="w-6 h-px mt-0 mb-4" :class="tier.active ? 'bg-etrib-teal/40' : 'bg-etrib-teal/15'"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '3',  label: 'Tiers disponibles' },
  { value: '7',  label: 'Módulos de gestión' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '100%', label: 'Cumplimiento MH' },
]

const tiers = [
  { label: 'DTE Básico', active: true },
  { label: 'Inv + POS',  active: false },
  { label: 'ERP',        active: false },
]
</script>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(rgba(15, 76, 92, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 76, 92, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease forwards;
}
.delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>

<template>
  <section class="hero-grid pt-20 pb-16 md:pt-32 md:pb-20 min-h-screen flex flex-col justify-center">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        <!-- Texto principal -->
        <div class="animate-fade-up">
          <span class="badge mb-6 inline-block">El Salvador · DTE Certificado</span>
          <h1 class="font-display text-5xl md:text-7xl lg:text-5xl leading-none text-ink mb-6">
            FACTURACIÓN<br />
            <span class="text-etrib-teal/30">ELECTRÓNICA</span><br />
            SIMPLE
          </h1>
          <p class="text-ink/60 text-lg leading-relaxed mb-10 max-w-md">
            Sistema de emisión de Documentos Tributarios Electrónicos (DTE) para empresas
            salvadoreñas. Rápido, seguro y en cumplimiento con el Ministerio de Hacienda.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#planes" class="bg-etrib-teal text-paper px-8 py-4 text-sm font-medium text-center hover:bg-etrib-deep transition-colors">
              Ver planes →
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
              alt="e·trib – Facturación Electrónica"
              class="w-full max-w-sm md:max-w-full h-auto"
            />
          </div>

          <!-- Stats -->
          <div class="border-2 border-etrib-teal/30 p-6 bg-paper relative">
            <div class="absolute -top-3 left-6 badge">Datos clave</div>
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

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '3',    label: 'Planes disponibles' },
  { value: '1500', label: 'DTE máx / mes' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '100%', label: 'Cumplimiento MH' },
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

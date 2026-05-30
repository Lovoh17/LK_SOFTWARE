<template>
  <section id="beneficios" class="py-16 md:py-28 bg-paper overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Encabezado -->
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-end mb-16 md:mb-20">
        <div>
          <span class="badge mb-4 inline-block">Por qué elegirnos</span>
          <h2 class="font-display text-4xl md:text-6xl text-ink leading-none">
            UNA PLATAFORMA<br /><span class="text-etrib-teal/25">QUE CRECE</span><br />CONTIGO
          </h2>
        </div>
        <p class="text-ink/50 text-base leading-relaxed md:mb-2">
          Diseñado para el ecosistema empresarial y tributario salvadoreño. Comienza con DTE
          y escala hacia inventario, POS, contabilidad y ERP completo — sin migrar de sistema.
        </p>
      </div>

      <!-- Cards principales -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div
          v-for="(beneficio, index) in beneficios"
          :key="beneficio.titulo"
          class="beneficio-card border-2 border-etrib-teal/20 p-6 md:p-8 group relative overflow-hidden"
          :class="index === 0 ? 'md:col-span-2' : ''"
        >
          <div class="absolute right-6 top-4 font-display text-7xl md:text-8xl text-etrib-teal/5 group-hover:text-etrib-teal/10 transition-colors leading-none select-none">
            0{{ index + 1 }}
          </div>

          <div class="relative z-10">
            <div class="w-10 h-10 md:w-12 md:h-12 border-2 border-etrib-teal/40 flex items-center justify-center mb-6 group-hover:bg-etrib-teal group-hover:border-etrib-teal transition-colors">
              <svg class="w-5 h-5 text-etrib-teal group-hover:text-paper transition-colors" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path :d="beneficio.iconPath" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <h3 class="font-display text-xl md:text-2xl tracking-wider text-ink mb-3">{{ beneficio.titulo }}</h3>
            <p class="text-ink/55 text-sm leading-relaxed max-w-lg">{{ beneficio.descripcion }}</p>

            <div class="mt-6 inline-flex items-center gap-2 text-xs text-ink/40 border border-etrib-teal/20 px-3 py-1">
              <span class="w-1.5 h-1.5 rounded-full bg-etrib-mint inline-block"></span>
              {{ beneficio.tag }}
            </div>
          </div>
        </div>
      </div>

      <!-- Módulos grid (visual de qué hay en la plataforma) -->
      <div class="border-2 border-etrib-teal/15 p-6 md:p-8">
        <div class="text-xs text-ink/40 uppercase tracking-widest mb-6">Módulos de la plataforma</div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="modulo in modulos"
            :key="modulo.nombre"
            class="flex flex-col gap-2 p-4 border border-etrib-teal/15 group hover:border-etrib-teal/40 transition-colors"
          >
            <div
              class="text-[9px] uppercase tracking-widest font-semibold px-1.5 py-0.5 inline-self-start w-fit"
              :class="modulo.disponible ? 'bg-etrib-mint text-etrib-deep' : 'bg-ink/8 text-ink/40'"
            >
              {{ modulo.disponible ? 'Disponible' : 'Próximamente' }}
            </div>
            <div class="font-display tracking-wider text-sm text-ink">{{ modulo.nombre }}</div>
            <div class="text-xs text-ink/40 leading-relaxed">{{ modulo.desc }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const beneficios = [
  {
    titulo: 'CUMPLIMIENTO TOTAL CON HACIENDA',
    descripcion:
      'Nuestro sistema está homologado y actualizado conforme a las disposiciones del Ministerio de Hacienda de El Salvador. Emite DTEs válidos en tiempo real, sin riesgo de rechazo o sanciones fiscales. Nos encargamos de mantenernos al día con cada cambio normativo.',
    tag: 'Normativa actualizada · MH El Salvador',
    iconPath:
      'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
  {
    titulo: 'ARQUITECTURA MODULAR ESCALABLE',
    descripcion:
      'Comienza con Tier 1 (DTE básico) y activa Inventario, POS, Contabilidad o ERP cuando tu negocio lo necesite. Sin migraciones, sin pérdida de datos. Todos los módulos comparten la misma base de datos y flujo de trabajo.',
    tag: 'Tier 1 → Tier 2 → Tier 3 · Sin fricciones',
    iconPath:
      'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
  },
  {
    titulo: 'SOPORTE TÉCNICO LOCAL',
    descripcion:
      'Equipo presencial en San Miguel y sus alrededores. Resolvemos incidencias rápido, sin call centers lejanos. Soporte directo con el equipo de desarrollo.',
    tag: 'San Miguel · Presencial y remoto',
    iconPath:
      'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  },
]

const modulos = [
  { nombre: 'Facturación DTE',   desc: 'FCF, CCF, NR, NC, ND, CR certificados por Hacienda', disponible: true  },
  { nombre: 'Gestión Clientes',  desc: 'CRM básico integrado con emisión de documentos',      disponible: true  },
  { nombre: 'Catálogo Productos',desc: 'Variantes, combos, precios y unidades de medida',     disponible: true  },
  { nombre: 'Proveedores',       desc: 'Órdenes de compra, cuentas por pagar, historial',     disponible: false },
  { nombre: 'Inventario',        desc: 'Lotes, multi-bodega, movimientos y alertas stock',    disponible: false },
  { nombre: 'POS / Caja',        desc: 'Punto de venta táctil con emisión DTE integrada',     disponible: false },
  { nombre: 'Contabilidad',      desc: 'Asientos automáticos, estados financieros, libros',   disponible: false },
  { nombre: 'RRHH y Planilla',   desc: 'Planilla legal SV, AFP/ISSS, boletas PDF',            disponible: false },
]
</script>

<style scoped>
.beneficio-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.beneficio-card:hover {
  transform: translateY(-4px);
  box-shadow: 6px 6px 0px #0F4C5C;
}
</style>

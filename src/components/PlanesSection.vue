<template>
  <section id="planes" class="py-16 md:py-28 bg-paper">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Encabezado -->
      <div class="mb-12 md:mb-20">
        <span class="badge mb-4 inline-block">Arquitectura de tiers</span>
        <div class="grid md:grid-cols-2 gap-6 items-end">
          <h2 class="font-display text-4xl md:text-6xl text-ink leading-none">
            ELIGE EL NIVEL<br />DE TU EMPRESA
          </h2>
          <p class="text-ink/50 leading-relaxed md:mb-2">
            Comienza con facturación electrónica y escala hacia un ERP completo sin cambiar de plataforma.
            Cada tier incluye todo el anterior.
          </p>
        </div>
      </div>

      <!-- Toggle anual / mensual (solo aplica a Tier 1) -->
      <div class="flex items-center gap-4 mb-12">
        <span :class="!anual ? 'text-ink font-semibold' : 'text-ink/40'" class="text-sm transition-colors">
          Mensual
        </span>
        <button
          @click="anual = !anual"
          class="w-12 h-6 rounded-full border-2 border-etrib-teal relative transition-colors"
          :class="anual ? 'bg-etrib-teal' : 'bg-transparent'"
          aria-label="Cambiar ciclo de facturación"
        >
          <span
            class="absolute top-0.5 w-4 h-4 border border-etrib-teal rounded-full transition-all duration-300"
            :class="anual ? 'left-6 bg-paper' : 'left-0.5 bg-etrib-teal'"
          ></span>
        </button>
        <span :class="anual ? 'text-ink font-semibold' : 'text-ink/40'" class="text-sm transition-colors">
          Anual <span class="badge ml-1 text-[9px]">Ahorra</span>
        </span>
      </div>

      <!-- Tier Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        <!-- TIER 1 — DTE BÁSICO -->
        <div class="tier-card border-2 border-etrib-teal/25 p-6 md:p-8 bg-paper flex flex-col">
          <div class="mb-6">
            <div class="flex items-center justify-between mb-3">
              <span class="tier-status-active">Disponible</span>
              <span class="font-display text-5xl text-etrib-teal/10 leading-none">01</span>
            </div>
            <div class="font-display text-2xl md:text-3xl tracking-wider text-ink mb-1">DTE BÁSICO</div>
            <div class="text-sm text-ink/40">Sistema completo de facturación electrónica</div>
          </div>

          <!-- Precio -->
          <div class="border-t border-b border-etrib-teal/15 py-5 mb-6">
            <div class="font-display text-4xl md:text-5xl text-ink leading-none">
              {{ anual ? '$230' : '$21.99' }}
            </div>
            <div class="text-sm text-ink/40 mt-1">{{ anual ? 'pago anual' : 'por mes' }}</div>
            <Transition name="fade">
              <div v-if="anual" class="text-sm mt-2 font-semibold text-etrib-teal">
                Ahorro de $34 al año
              </div>
            </Transition>
          </div>

          <!-- Features -->
          <ul class="space-y-2.5 mb-8 flex-1">
            <li
              v-for="f in tier1Features"
              :key="f"
              class="flex items-start gap-3 text-sm text-ink/65"
            >
              <span class="mt-0.5 flex-shrink-0 text-etrib-teal font-bold">✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <a
            href="#contacto"
            class="block text-center py-3.5 text-sm font-medium transition-colors border-2 border-etrib-teal text-paper bg-etrib-teal hover:bg-transparent hover:text-etrib-teal"
          >
            Comenzar con Tier 1 →
          </a>
        </div>

        <!-- TIER 2 — INVENTARIO + POS -->
        <div class="tier-card border-2 border-etrib-teal bg-etrib-teal text-paper p-6 md:p-8 flex flex-col relative overflow-hidden">
          <!-- bg decorativo -->
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-end justify-end overflow-hidden pr-4 pb-4">
            <img src="../img/etrib-mark.svg" alt="" class="w-48" />
          </div>

          <div class="mb-6 relative z-10">
            <div class="flex items-center justify-between mb-3">
              <span class="tier-status-soon">Próximamente</span>
              <span class="font-display text-5xl text-paper/10 leading-none">02</span>
            </div>
            <div class="font-display text-2xl md:text-3xl tracking-wider mb-1">INVENTARIO + POS</div>
            <div class="text-sm text-paper/50">Incluye todo el Tier 1 más:</div>
          </div>

          <!-- Precio -->
          <div class="border-t border-b border-paper/20 py-5 mb-6 relative z-10">
            <div class="font-display text-3xl md:text-4xl text-paper leading-none">Consultar precio</div>
            <div class="text-sm text-paper/50 mt-1">contacta al equipo de ventas</div>
          </div>

          <!-- Módulos con features -->
          <div class="space-y-4 mb-8 flex-1 relative z-10">
            <div v-for="modulo in tier2Modulos" :key="modulo.nombre" class="tier-module border border-paper/15 p-3">
              <div class="text-xs uppercase tracking-widest text-etrib-mint mb-2 font-semibold">{{ modulo.nombre }}</div>
              <ul class="space-y-1.5">
                <li v-for="f in modulo.features" :key="f" class="flex items-start gap-2 text-xs text-paper/70">
                  <span class="mt-0.5 flex-shrink-0 text-etrib-mint">✓</span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="#contacto"
            class="block text-center py-3.5 text-sm font-medium transition-colors border-2 border-paper text-etrib-teal bg-paper hover:bg-transparent hover:text-paper relative z-10"
          >
            Consultar Tier 2 →
          </a>
        </div>

        <!-- TIER 3 — ERP COMPLETO -->
        <div class="tier-card border-2 border-etrib-deep bg-etrib-deep text-paper p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div class="absolute inset-0 opacity-[0.04] pointer-events-none select-none flex items-end justify-end overflow-hidden pr-4 pb-4">
            <img src="../img/etrib-mark.svg" alt="" class="w-48" />
          </div>

          <div class="mb-6 relative z-10">
            <div class="flex items-center justify-between mb-3">
              <span class="tier-status-roadmap">Roadmap</span>
              <span class="font-display text-5xl text-paper/10 leading-none">03</span>
            </div>
            <div class="font-display text-2xl md:text-3xl tracking-wider mb-1">ERP COMPLETO</div>
            <div class="text-sm text-paper/45">Incluye todo el Tier 2 más:</div>
          </div>

          <!-- Precio -->
          <div class="border-t border-b border-paper/15 py-5 mb-6 relative z-10">
            <div class="font-display text-3xl md:text-4xl text-paper leading-none">Consultar precio</div>
            <div class="text-sm text-paper/45 mt-1">solución empresarial a medida</div>
          </div>

          <!-- Módulos con features -->
          <div class="space-y-4 mb-8 flex-1 relative z-10">
            <div v-for="modulo in tier3Modulos" :key="modulo.nombre" class="tier-module border border-paper/10 p-3">
              <div class="text-xs uppercase tracking-widest text-etrib-mint mb-2 font-semibold">{{ modulo.nombre }}</div>
              <ul class="space-y-1.5">
                <li v-for="f in modulo.features" :key="f" class="flex items-start gap-2 text-xs text-paper/60">
                  <span class="mt-0.5 flex-shrink-0 text-etrib-mint">✓</span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="#contacto"
            class="block text-center py-3.5 text-sm font-medium transition-colors border-2 border-etrib-mint text-etrib-deep bg-etrib-mint hover:bg-transparent hover:text-etrib-mint relative z-10"
          >
            Consultar Tier 3 →
          </a>
        </div>

      </div>

      <!-- Nota de progresión -->
      <div class="mt-8 border border-etrib-teal/15 p-5 bg-etrib-teal/3 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="w-2 h-2 rounded-full bg-etrib-mint animate-pulse"></div>
          <span class="text-xs text-ink/50 uppercase tracking-widest">Arquitectura modular</span>
        </div>
        <p class="text-sm text-ink/50 leading-relaxed">
          Cada tier incluye completamente el anterior. Migra de Tier 1 a Tier 2 o 3 sin pérdida de datos,
          sin cambiar de plataforma y sin reentrenamiento de usuarios.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const anual = ref(true)

const tier1Features = [
  'Autenticación y gestión de usuarios',
  'Gestión de clientes y contactos',
  'Catálogo de productos (variantes y combos)',
  'Emisión DTE: FCF, CCF, NR, NC, ND, CR',
  'Filtros, búsqueda y paginación avanzada',
  'Panel de administración web',
  'Soporte por correo electrónico',
]

const tier2Modulos = [
  {
    nombre: 'Proveedores',
    features: [
      'CRUD proveedores con NIT/NRC',
      'Órdenes de compra con recepción de mercancía',
      'Cuentas por pagar y vencimientos',
      'Historial de compras por proveedor',
    ],
  },
  {
    nombre: 'Inventario avanzado',
    features: [
      'Lotes con número y fecha de vencimiento',
      'Stock por múltiples bodegas y transferencias',
      'Registro de movimientos (entradas, salidas, ajustes)',
      'Inventario físico con ajuste automático',
      'Alertas de stock mínimo',
    ],
  },
  {
    nombre: 'Caja / POS',
    features: [
      'Apertura y cierre de caja por cajero',
      'Pantalla POS con búsqueda por código/barcode',
      'Efectivo, tarjeta y transferencia; cálculo de cambio',
      'Emisión DTE directo desde el POS',
      'Arqueo, cierre y reporte de turno',
    ],
  },
]

const tier3Modulos = [
  {
    nombre: 'Contabilidad',
    features: [
      'Plan de cuentas configurable',
      'Asientos automáticos desde facturas y compras',
      'Libro diario, mayor y balanza de comprobación',
      'Estado de resultados y balance general',
      'Conciliación bancaria con extracto importado',
    ],
  },
  {
    nombre: 'Fiscal El Salvador',
    features: [
      'Libro de ventas y compras (F-07)',
      'Generación del borrador mensual F-07',
      'Retenciones ISR renta (F-14)',
      'Cuentas por cobrar con antigüedad de saldos',
    ],
  },
  {
    nombre: 'RRHH y Planilla',
    features: [
      'Empleados con AFP/ISSS y cargo',
      'Planilla mensual con deducciones legales SV',
      'Control de vacaciones y permisos',
      'Boletas de pago en PDF por empleado',
    ],
  },
  {
    nombre: 'BI / Analítica',
    features: [
      'Dashboard ejecutivo con KPIs',
      'Rentabilidad por producto (margen y rotación)',
      'Proyecciones y tendencias de ventas',
      'Exportación a Power BI / Looker / Excel',
    ],
  },
]
</script>

<style scoped>
.tier-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.tier-card:hover {
  transform: translateY(-6px);
  box-shadow: 8px 8px 0px #0F4C5C;
}

.tier-module {
  transition: border-color 0.2s ease;
}

.tier-status-active {
  @apply bg-etrib-mint text-etrib-deep text-[9px] font-semibold tracking-[0.12em] uppercase px-2 py-0.5;
}
.tier-status-soon {
  @apply bg-paper/15 text-paper text-[9px] font-semibold tracking-[0.12em] uppercase px-2 py-0.5;
}
.tier-status-roadmap {
  @apply bg-etrib-mint/20 text-etrib-mint text-[9px] font-semibold tracking-[0.12em] uppercase px-2 py-0.5;
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

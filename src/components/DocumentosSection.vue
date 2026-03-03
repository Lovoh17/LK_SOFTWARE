<template>
  <section class="py-16 md:py-24 docs-grid">
    <div class="max-w-6xl mx-auto px-6">

      <div class="mb-12 md:mb-16">
        <span class="badge mb-4 inline-block">Documentos soportados</span>
        <h2 class="font-display text-4xl md:text-6xl text-ink leading-none">
          TIPOS DE<br />DOCUMENTOS
        </h2>
        <p class="text-ink/50 mt-4 max-w-full md:max-w-md">
          Todos los Documentos Tributarios Electrónicos exigidos por el Ministerio de Hacienda de El Salvador.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="doc in documentos"
          :key="doc.nombre"
          class="doc-card border border-ink p-4 md:p-6 group cursor-default"
        >
          <div class="font-display text-base md:text-lg tracking-wider text-ink group-hover:text-paper transition-colors">
            {{ doc.nombre }}
          </div>
          <div class="text-xs text-ink/40 group-hover:text-paper/60 mt-1 transition-colors">
            {{ doc.codigo }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const documentos = [
  { nombre: 'Factura de Consumidor Final', codigo: 'FCF' },
  { nombre: 'Crédito Fiscal',              codigo: 'CCF' },
  { nombre: 'Nota de Remisión',            codigo: 'NR'  },
  { nombre: 'Nota de Crédito',             codigo: 'NC'  },
  { nombre: 'Nota de Débito',              codigo: 'ND'  },
  { nombre: 'Comprobante de Retención',    codigo: 'CR'  },
]
</script>

<style scoped>
.docs-grid {
  background-image:
    linear-gradient(rgba(10, 10, 10, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 10, 10, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}

.doc-card {
  transition: background-color 0.25s ease, transform 0.25s ease;
}
.doc-card:hover {
  background-color: #0a0a0a;
  transform: translateY(-3px);
}
</style>
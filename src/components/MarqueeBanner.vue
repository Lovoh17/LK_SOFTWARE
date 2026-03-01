<template>
  <div class="bg-ink py-4 overflow-hidden border-y border-ink">
    <div class="marquee-track">
      <span
        v-for="i in 14"
        :key="i"
        class="font-display text-paper/30 text-xl tracking-widest flex-shrink-0"
      >
        DTE &nbsp;·&nbsp; FACTURA ELECTRÓNICA &nbsp;·&nbsp; CRÉDITO FISCAL &nbsp;·&nbsp;
        NOTA DE REMISIÓN &nbsp;·&nbsp; COMPROBANTE &nbsp;&nbsp;
      </span>
    </div>
  </div>
</template>

<script setup>
// Sin lógica adicional – puramente presentacional
</script>

<style scoped>
.marquee-track {
  display: flex;
  gap: 0;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>

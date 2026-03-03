He ajustado las clases para que la vista sea completamente responsiva, optimizando la visualización en dispositivos móviles, tablets y escritorio. Los cambios principales incluyen:
<template>
  <section id="beneficios" class="py-16 md:py-28 bg-paper overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Encabezado -->
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-end mb-20">
        <div>
          <span class="badge mb-4 inline-block">Por qué elegirnos</span>
          <h2 class="font-display text-4xl md:text-6xl text-ink leading-none">
            BENEFICIOS DE<br /><span class="text-ink/25">NUESTRO SISTEMA</span>
          </h2>
        </div>
        <p class="text-ink/50 text-base leading-relaxed md:mb-2">
          Diseñado específicamente para el ecosistema tributario salvadoreño, nuestro sistema
          te da las herramientas para operar con confianza y sin fricciones.
        </p>
      </div>

      <!-- Cards de beneficios -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(beneficio, index) in beneficios"
          :key="beneficio.titulo"
          class="beneficio-card border-2 border-ink p-6 md:p-8 group relative overflow-hidden"
          :class="index === 0 ? 'md:col-span-2' : ''"
        >
          <!-- Número de fondo decorativo -->
          <div class="absolute right-6 top-4 font-display text-7xl md:text-8xl text-ink/5 group-hover:text-ink/10 transition-colors leading-none select-none">
            0{{ index + 1 }}
          </div>

          <div class="relative z-10">
            <!-- Icono -->
            <div class="w-10 h-10 md:w-12 md:h-12 border-2 border-ink flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-paper transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path :d="beneficio.iconPath" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <h3 class="font-display text-xl md:text-2xl tracking-wider text-ink mb-3">{{ beneficio.titulo }}</h3>
            <p class="text-ink/55 text-sm leading-relaxed max-w-lg">{{ beneficio.descripcion }}</p>

            <!-- Tag decorativo -->
            <div class="mt-6 inline-flex items-center gap-2 text-xs text-ink/40 border border-ink/15 px-3 py-1">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              {{ beneficio.tag }}
            </div>
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
      'Nuestro sistema está homologado y actualizado conforme a las disposiciones del Ministerio de Hacienda de El Salvador. Emite DTEs válidos en tiempo real, sin riesgo de rechazo o sanciones fiscales. Nos encargamos de mantenernos al día con cada cambio normativo para que tú no tengas que preocuparte.',
    tag: 'Normativa actualizada · MH El Salvador',
    iconPath:
      'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
  {
    titulo: 'RESPALDO SEGURO EN LA NUBE',
    descripcion:
      'Todos tus documentos tributarios son almacenados con cifrado de extremo a extremo en infraestructura cloud de alta disponibilidad. Accede a tu historial completo en cualquier momento, desde cualquier dispositivo, con copias de seguridad automáticas diarias.',
    tag: 'Cifrado · Alta disponibilidad · Backup diario',
    iconPath:
      'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z',
  },
  {
    titulo: 'INTERFAZ INTUITIVA Y FÁCIL DE USAR',
    descripcion:
      'Desarrollada pensando en el usuario final, no en el técnico. Emite facturas en segundos, consulta reportes con un clic y gestiona clientes sin necesidad de capacitación extensa. Compatible con computadoras, tablets y smartphones.',
    tag: 'UX optimizado · Multi-dispositivo',
    iconPath:
      'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3',
  },
  {
    titulo: 'SOPORTE TÉCNICO LOCAL',
    descripcion:
      'Contamos con equipo de soporte presencial en San Miguel y sus alrededores. Resolvemos incidencias en tiempo record, sin depender de call centers lejanos. Para nosotros, la cercanía con el cliente es parte del servicio.',
    tag: 'San Miguel · Presencial y remoto',
    iconPath:
      'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  },
]
</script>

<style scoped>
.beneficio-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.beneficio-card:hover {
  transform: translateY(-4px);
  box-shadow: 6px 6px 0px #0a0a0a;
}
</style>

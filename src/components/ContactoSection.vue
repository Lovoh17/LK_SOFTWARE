<template>
  <section id="contacto" class="py-16 md:py-24 bg-ink text-paper">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        <!-- Info de contacto -->
        <div>
          <span class="bg-paper text-ink badge mb-4 md:mb-6 inline-block">Contáctanos</span>
          <h2 class="font-display text-4xl md:text-6xl leading-none mb-4 md:mb-6">
            HABLEMOS<br /><span class="text-paper/25">HOY</span>
          </h2>
          <p class="text-paper/50 mb-6 md:mb-10 leading-relaxed">
            ¿Tienes dudas sobre qué plan es el adecuado para tu empresa? Nuestro equipo está
            listo para asesorarte sin compromiso.
          </p>

          <div class="space-y-4 md:space-y-5">
            <div
              v-for="item in contactInfo"
              :key="item.label"
              class="flex items-center gap-4 border-b border-paper/10 pb-4 md:pb-5"
            >
              <div class="w-10 h-10 border border-paper/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-paper/60" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path v-if="item.icon === 'location'" stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                  <path v-if="item.icon === 'phone'" stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                  <path v-if="item.icon === 'clock'" stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </div>
              <div>
                <div class="text-xs text-paper/40 uppercase tracking-widest">{{ item.label }}</div>
                <div class="font-medium mt-0.5">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="border border-paper/20 p-6 md:p-8">
          <h3 class="font-display text-2xl tracking-wider mb-6">SOLICITAR INFORMACIÓN</h3>

          <form @submit.prevent="enviarFormulario" class="space-y-5">

            <div>
              <label class="text-xs text-paper/40 uppercase tracking-widest block mb-1">Empresa</label>
              <input v-model="form.empresa" type="text" placeholder="Nombre de tu empresa" required class="input-field"/>
            </div>

            <div>
              <label class="text-xs text-paper/40 uppercase tracking-widest block mb-1">Correo electrónico</label>
              <input v-model="form.email" type="email" placeholder="correo@empresa.com" required class="input-field"/>
            </div>

            <div>
              <label class="text-xs text-paper/40 uppercase tracking-widest block mb-1">Teléfono</label>
              <input v-model="form.telefono" type="tel" placeholder="+503 0000-0000" class="input-field"/>
            </div>

            <div>
              <label class="text-xs text-paper/40 uppercase tracking-widest block mb-1">Plan de interés</label>
              <select v-model="form.plan" class="input-field bg-ink">
                <option value="" disabled>Seleccionar plan</option>
                <option>Básico – 500 DTE</option>
                <option>Medio – 1,000 DTE</option>
                <option>Pro – 1,500 DTE</option>
              </select>
            </div>

            <div>
              <label class="text-xs text-paper/40 uppercase tracking-widest block mb-1">Mensaje</label>
              <textarea v-model="form.mensaje" rows="3" placeholder="Cuéntanos sobre tu negocio..." class="input-field resize-none"></textarea>
            </div>

            <button
              type="submit"
              :disabled="enviando"
              class="w-full bg-paper text-ink py-3 md:py-4 font-medium text-sm hover:bg-paper/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg v-if="enviando" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              <span>{{ enviando ? 'Enviando...' : 'Enviar solicitud →' }}</span>
            </button>

            <Transition name="slide-up">
              <div v-if="estado === 'ok'" class="text-center py-3 border border-green-500/30 bg-green-500/5 text-green-400 text-sm">
                ✓ ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            </Transition>

            <Transition name="slide-up">
              <div v-if="estado === 'error'" class="text-center py-3 border border-red-500/30 bg-red-500/5 text-red-400 text-sm">
                ✗ Ocurrió un error. Intenta de nuevo o escríbenos directamente.
              </div>
            </Transition>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const EMAILJS_PUBLIC_KEY  = 'UkCo_r_FR6MBs_By-'    
const EMAILJS_SERVICE_ID  = 'service_2o1ds9k'  
const EMAILJS_TEMPLATE_ID = 'template_grknwlb' 
// ─────────────────────────────────────────────────────────────────

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
  script.onload = () => window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  document.head.appendChild(script)
})

const enviando = ref(false)
const estado   = ref(null) // null | 'ok' | 'error'

const form = reactive({
  empresa:  '',
  email:    '',
  telefono: '',
  plan:     '',
  mensaje:  '',
})

const contactInfo = [
  { icon: 'location', label: 'Ubicación',     value: 'San Miguel, El Salvador' },
  { icon: 'phone',    label: 'Teléfono',       value: '+503 6037-6783' },
  { icon: 'clock',    label: 'Disponibilidad', value: 'Lunes – Viernes · 8am – 6pm' },
]

async function enviarFormulario() {
  enviando.value = true
  estado.value   = null

  try {
    await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        empresa:  form.empresa,
        email:    form.email,
        telefono: form.telefono || 'No indicado',
        plan:     form.plan     || 'No seleccionado',
        mensaje:  form.mensaje  || 'Sin mensaje',
        to_email: 'lovoh17@gmail.com',
      }
    )
    Object.assign(form, { empresa: '', email: '', telefono: '', plan: '', mensaje: '' })
    estado.value = 'ok'

  } catch (err) {
    console.error('EmailJS error:', err)
    estado.value = 'error'

  } finally {
    enviando.value = false
    setTimeout(() => { estado.value = null }, 6000)
  }
}
</script>

<style scoped>
.input-field {
  @apply w-full bg-transparent border border-paper/20 px-4 py-3 text-paper placeholder-paper/30
         focus:outline-none focus:border-paper text-sm transition-colors;
}
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.35s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(8px); }
</style>
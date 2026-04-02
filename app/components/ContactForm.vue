<script setup lang="ts">
const props = defineProps<{
  formType: 'hero' | 'contact'
  darkBg?: boolean
}>()

const form = reactive({
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  tipologia: '',
  indirizzo: '',
  messaggio: '',
  privacy: false,
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

async function submit() {
  if (!form.privacy) {
    error.value = 'Devi accettare la privacy policy per continuare.'
    return
  }
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/send', {
      method: 'POST',
      body: { ...form, formType: props.formType },
    })
    success.value = true
    Object.assign(form, { nome: '', cognome: '', email: '', telefono: '', tipologia: '', indirizzo: '', messaggio: '', privacy: false })
  } catch {
    error.value = 'Errore durante l\'invio. Riprova più tardi.'
  } finally {
    loading.value = false
  }
}

const inputClass = computed(() =>
  props.darkBg
    ? 'bg-transparent border-b border-white/50 text-white placeholder-white/60 focus:border-white focus:outline-none py-2 px-1 w-full text-sm'
    : 'bg-[#1a1a2e]/60 border border-white/20 text-white placeholder-white/50 focus:border-white/60 focus:outline-none rounded py-2 px-3 w-full text-sm'
)
</script>

<template>
  <form @submit.prevent="submit" class="space-y-3">
    <!-- Nome + Cognome -->
    <div class="grid grid-cols-2 gap-3">
      <input v-model="form.nome" :class="inputClass" type="text" placeholder="Nome" required />
      <input v-model="form.cognome" :class="inputClass" type="text" placeholder="Cognome" />
    </div>

    <!-- Email + Telefono -->
    <div class="grid grid-cols-2 gap-3">
      <input v-model="form.email" :class="inputClass" type="email" placeholder="Email" required />
      <input v-model="form.telefono" :class="inputClass" type="tel" placeholder="Telefono" />
    </div>

    <!-- Tipologia + Indirizzo (solo form contatto) -->
    <div v-if="formType === 'contact'" class="grid grid-cols-2 gap-3">
      <select v-model="form.tipologia" :class="inputClass">
        <option value="" disabled>Tipologia di Immobile</option>
        <option>Residenziale</option>
        <option>Commerciale</option>
        <option>Terreno</option>
      </select>
      <input v-model="form.indirizzo" :class="inputClass" type="text" placeholder="Indirizzo dell'Immobile" />
    </div>

    <!-- Messaggio -->
    <textarea
      v-model="form.messaggio"
      :class="inputClass + ' resize-none'"
      rows="4"
      placeholder="Descrivi brevemente il tuo immobile (metratura, numero locali, stato, ecc.)"
      required
    />

    <!-- Privacy + Submit -->
    <div class="flex items-center justify-between gap-3 flex-wrap">
      <label class="flex items-start gap-2 cursor-pointer">
        <input v-model="form.privacy" type="checkbox" class="mt-0.5 accent-[#d32f2f]" />
        <span class="text-xs" :class="darkBg ? 'text-white/70' : 'text-white/60'">
          Cliccando su invia dichiari di aver preso visione e di accettare la nostra
          <a href="/privacy" class="underline hover:text-white">privacy policy</a>
        </span>
      </label>
      <button
        type="submit"
        :disabled="loading"
        class="flex items-center gap-2 bg-[#d32f2f] hover:bg-[#b71c1c] disabled:opacity-60 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors whitespace-nowrap"
      >
        {{ loading ? 'Invio...' : 'Invia' }}
        <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
      </button>
    </div>

    <p v-if="error" class="text-red-300 text-sm">{{ error }}</p>
    <p v-if="success" class="text-green-300 text-sm font-semibold">Messaggio inviato con successo!</p>
  </form>
</template>

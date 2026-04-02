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
    ? 'form-field field-dark'
    : 'form-field field-hero'
)
</script>

<template>
  <form @submit.prevent="submit" class="space-y-2.5">
    <!-- Nome + Cognome -->
    <div class="grid grid-cols-2 gap-2.5">
      <input v-model="form.nome" :class="inputClass" type="text" placeholder="Nome" required />
      <input v-model="form.cognome" :class="inputClass" type="text" placeholder="Cognome" />
    </div>

    <!-- Email + Telefono -->
    <div class="grid grid-cols-2 gap-2.5">
      <input v-model="form.email" :class="inputClass" type="email" placeholder="Email" required />
      <input v-model="form.telefono" :class="inputClass" type="text" inputmode="tel" placeholder="Telefono" />
    </div>

    <!-- Tipologia + Indirizzo (solo form contatto) -->
    <div v-if="formType === 'contact'" class="grid grid-cols-2 gap-2.5">
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
      rows="3"
      placeholder="Descrivi brevemente il tuo immobile (metratura, numero locali, stato, ecc.)"
      required
    />

    <!-- Privacy + Submit -->
    <div class="flex items-center justify-between gap-3 flex-wrap pt-1">
      <label class="flex items-center gap-2.5 cursor-pointer">
        <input v-model="form.privacy" type="radio" class="custom-radio" :value="true" />
        <span class="text-xs leading-tight" :class="darkBg ? 'text-white/70' : 'text-white/60'">
          Cliccando su invia dichiari di aver preso visione e di accettare la nostra
          <a href="/privacy" class="underline hover:text-white">privacy policy</a>
        </span>
      </label>
      <button
        type="submit"
        :disabled="loading"
        class="submit-btn"
      >
        {{ loading ? 'Invio...' : 'Invia' }}
        <span class="submit-icon">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </span>
      </button>
    </div>

    <p v-if="error" class="text-red-300 text-xs">{{ error }}</p>
    <p v-if="success" class="text-green-300 text-sm font-semibold">Messaggio inviato con successo!</p>
  </form>
</template>

<style scoped>
.form-field {
  width: 100%;
  font-size: 0.8125rem;
  outline: none;
  transition: border-color 0.15s;
}

.field-hero {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  padding: 8px 12px;
  border-radius: 2px;
}
.field-hero::placeholder { color: rgba(255,255,255,0.45); }
.field-hero:focus { border-color: rgba(255,255,255,0.35); }

.field-dark {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.4);
  color: #fff;
  padding: 6px 4px;
  border-radius: 0;
}
.field-dark::placeholder { color: rgba(255,255,255,0.5); }
.field-dark:focus { border-bottom-color: rgba(255,255,255,0.8); }

/* Custom radio */
.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255,255,255,0.55);
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
}
.custom-radio::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.15s;
}
.custom-radio:checked::after {
  background: #fff;
}

/* Submit button */
.submit-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #d32f2f;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 700;
  padding: 7px 16px 7px 20px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}
.submit-btn:hover { background: #b71c1c; }
.submit-btn:disabled { opacity: 0.6; cursor: default; }

.submit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0,0,0,0.25);
  flex-shrink: 0;
}
</style>

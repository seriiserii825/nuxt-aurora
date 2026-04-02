<script setup lang="ts">
import { z } from "zod";

const props = defineProps<{
  formType: "hero" | "contact";
  darkBg?: boolean;
}>();

const baseSchema = z.object({
  nome: z.string().min(1, "Il nome è obbligatorio"),
  cognome: z.string().min(1, "Il cognome è obbligatorio"),
  email: z.string().min(1, "L'email è obbligatoria").email("Email non valida"),
  telefono: z
    .string()
    .min(1, "Il telefono è obbligatorio")
    .refine((v) => /^[+\d\s\-().]{6,20}$/.test(v), "Numero non valido"),
  messaggio: z.string().min(1, "Il messaggio è obbligatorio"),
  privacy: z.literal(true, { errorMap: () => ({ message: "Devi accettare la privacy policy" }) }),
});

const contactSchema = baseSchema.extend({
  tipologia: z.string().min(1, "La tipologia è obbligatoria"),
  indirizzo: z.string().min(1, "L'indirizzo è obbligatorio"),
});

const form = reactive({
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  tipologia: "",
  indirizzo: "",
  messaggio: "",
  privacy: false,
});

const fieldErrors = reactive<Record<string, string>>({});
const loading = ref(false);
const success = ref(false);
const submitError = ref("");

async function submit() {
  Object.keys(fieldErrors).forEach((k) => delete fieldErrors[k]);
  submitError.value = "";

  const schema = props.formType === "contact" ? contactSchema : baseSchema;
  const result = schema.safeParse({ ...form, privacy: form.privacy });

  if (!result.success) {
    result.error.issues.forEach((e) => {
      const field = e.path[0] as string;
      if (!fieldErrors[field]) fieldErrors[field] = e.message;
    });
    return;
  }

  loading.value = true;
  try {
    await $fetch("/api/send", {
      method: "POST",
      body: { ...form, formType: props.formType },
    });
    success.value = true;
    Object.assign(form, {
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      tipologia: "",
      indirizzo: "",
      messaggio: "",
      privacy: false,
    });
  } catch {
    submitError.value = "Errore durante l'invio. Riprova più tardi.";
  } finally {
    loading.value = false;
  }
}

const inputClass = computed(() =>
  props.darkBg ? "form-field field-dark" : "form-field field-hero",
);

const dropdownOpen = ref(false);
const tipologiaOptions = ["Residenziale", "Commerciale", "Terreno"];

function selectTipologia(val: string) {
  form.tipologia = val;
  dropdownOpen.value = false;
}

onMounted(() => {
  document.addEventListener("click", (e) => {
    const el = document.querySelector(".custom-select-wrap");
    if (el && !el.contains(e.target as Node)) dropdownOpen.value = false;
  });
});

defineExpose({ submit });
</script>

<template>
  <div class="space-y-2.5">
    <!-- Nome + Cognome -->
    <div class="grid grid-cols-2 gap-2.5">
      <div class="flex flex-col gap-0.5">
        <input v-model="form.nome" :class="inputClass" type="text" name="nome" placeholder="Nome" />
        <span v-if="fieldErrors.nome" class="field-error">{{ fieldErrors.nome }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <input v-model="form.cognome" :class="inputClass" type="text" name="cognome" placeholder="Cognome" />
        <span v-if="fieldErrors.cognome" class="field-error">{{ fieldErrors.cognome }}</span>
      </div>
    </div>

    <!-- Email + Telefono -->
    <div class="grid grid-cols-2 gap-2.5">
      <div class="flex flex-col gap-0.5">
        <input v-model="form.email" :class="inputClass" type="email" name="email" placeholder="Email" />
        <span v-if="fieldErrors.email" class="field-error">{{ fieldErrors.email }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <input
          v-model="form.telefono"
          :class="inputClass"
          type="text"
          name="telefono"
          inputmode="tel"
          placeholder="Telefono" />
        <span v-if="fieldErrors.telefono" class="field-error">{{ fieldErrors.telefono }}</span>
      </div>
    </div>

    <!-- Tipologia + Indirizzo (solo form contatto) -->
    <div v-if="formType === 'contact'" class="grid grid-cols-2 gap-2.5">
      <!-- Custom dropdown -->
      <div class="flex flex-col gap-0.5">
      <div class="custom-select-wrap" :class="darkBg ? 'field-dark' : 'field-hero'">
        <button
          type="button"
          class="custom-select-trigger"
          :class="form.tipologia ? '' : 'placeholder'"
          @click="dropdownOpen = !dropdownOpen">
          {{ form.tipologia || "Tipologia di Immobile" }}
          <svg
            class="chevron"
            :class="{ open: dropdownOpen }"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <ul v-if="dropdownOpen" class="custom-select-dropdown">
          <li
            v-for="opt in tipologiaOptions"
            :key="opt"
            class="custom-select-option"
            :class="{ selected: form.tipologia === opt }"
            @click="selectTipologia(opt)">
            {{ opt }}
          </li>
        </ul>
      </div>
      <span v-if="fieldErrors.tipologia" class="field-error">{{ fieldErrors.tipologia }}</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <input
          v-model="form.indirizzo"
          :class="inputClass"
          type="text"
          name="indirizzo"
          placeholder="Indirizzo dell'Immobile" />
        <span v-if="fieldErrors.indirizzo" class="field-error">{{ fieldErrors.indirizzo }}</span>
      </div>
    </div>

    <!-- Messaggio -->
    <div class="flex flex-col gap-0.5">
      <textarea
        v-model="form.messaggio"
        :class="inputClass + ' resize-none'"
        name="messaggio"
        rows="3"
        placeholder="Descrivi brevemente il tuo immobile (metratura, numero locali, stato, ecc.)" />
      <span v-if="fieldErrors.messaggio" class="field-error">{{ fieldErrors.messaggio }}</span>
    </div>

    <!-- Privacy + Submit -->
    <div class="flex items-center justify-between gap-3 flex-wrap pt-1">
      <div class="flex flex-col gap-0.5">
        <label class="flex items-center gap-2.5 cursor-pointer">
          <input v-model="form.privacy" type="radio" name="privacy" class="custom-radio" :value="true" />
          <span class="text-xs leading-tight" :class="darkBg ? 'text-white/70' : 'text-white/60'">
            Cliccando su invia dichiari di aver preso visione e di accettare la nostra
            <a href="/privacy" class="underline hover:text-white">privacy policy</a>
          </span>
        </label>
        <span v-if="fieldErrors.privacy" class="field-error">{{ fieldErrors.privacy }}</span>
      </div>
      <button type="submit" :disabled="loading" class="submit-btn">
        {{ loading ? "Invio..." : "Invia" }}
        <span class="submit-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9975 6.61382 17.0485 4.3261 15.3612 2.63882C13.6739 0.95154 11.3862 0.00251984 9 0ZM12.9513 9.48981L10.1821 12.259C10.0522 12.3889 9.87602 12.4619 9.69231 12.4619C9.5086 12.4619 9.33241 12.3889 9.2025 12.259C9.0726 12.1291 8.99962 11.9529 8.99962 11.7692C8.99962 11.5855 9.0726 11.4093 9.2025 11.2794L10.7905 9.69231H5.53846C5.35485 9.69231 5.17876 9.61937 5.04893 9.48953C4.9191 9.3597 4.84616 9.18361 4.84616 9C4.84616 8.81639 4.9191 8.6403 5.04893 8.51046C5.17876 8.38063 5.35485 8.30769 5.53846 8.30769H10.7905L9.2025 6.72058C9.0726 6.59067 8.99962 6.41448 8.99962 6.23077C8.99962 6.04705 9.0726 5.87086 9.2025 5.74096C9.33241 5.61105 9.5086 5.53808 9.69231 5.53808C9.87602 5.53808 10.0522 5.61105 10.1821 5.74096L12.9513 8.51019C13.0157 8.57449 13.0668 8.65084 13.1016 8.73489C13.1365 8.81893 13.1544 8.90902 13.1544 9C13.1544 9.09098 13.1365 9.18107 13.1016 9.26511C13.0668 9.34916 13.0157 9.42551 12.9513 9.48981Z"
              fill="white" />
          </svg>
        </span>
      </button>
    </div>

    <p v-if="submitError" class="text-red-300 text-xs">{{ submitError }}</p>
    <p v-if="success" class="text-green-300 text-sm font-semibold">
      Messaggio inviato con successo!
    </p>
  </div>
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
  border: 1px solid transparent;
  color: #fff;
  padding: 8px 12px;
  border-radius: 2px;
}
.field-hero::placeholder {
  color: rgba(255, 255, 255, 0.45);
}
.field-hero:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}

.field-dark {
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 6px 4px;
  background: rgba(47, 47, 47, 0.1);
  border-radius: 0;
}
.field-dark::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.field-dark:focus {
  border-bottom-color: rgba(255, 255, 255, 0.8);
}

/* Custom dropdown */
.custom-select-wrap {
  position: relative;
  cursor: pointer;
}
.custom-select-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.8125rem;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  outline: none;
}
.custom-select-trigger.placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.chevron {
  width: 10px;
  height: 6px;
  flex-shrink: 0;
  transition: transform 0.15s;
  opacity: 0.7;
}
.chevron.open {
  transform: rotate(180deg);
}
.custom-select-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: rgba(47, 47, 47, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  z-index: 50;
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
}
.custom-select-option {
  padding: 8px 12px;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.1s;
}
.custom-select-option:hover {
  background: rgba(255, 255, 255, 0.1);
}
.custom-select-option.selected {
  color: #fff;
  font-weight: 600;
}

/* Custom radio */
.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
}
.custom-radio::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.15s;
}
.custom-radio:checked::after {
  background: #fff;
}

/* Field errors */
.field-error {
  font-size: 0.7rem;
  color: rgba(252, 165, 165, 0.9);
  line-height: 1;
}

/* Submit button */
.submit-btn {
  display: flex;
  align-items: center;
  gap: 8px;
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
.submit-btn:hover {
  background: #b71c1c;
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.submit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
}
</style>

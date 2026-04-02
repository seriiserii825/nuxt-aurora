<script setup lang="ts">
import PhoneNumber from "./PhoneNumber.vue";
</script>

<template>
  <!-- ═══ CONTATTACI ═══ -->
  <section id="contattaci" class="grid grid-cols-1 lg:grid-cols-2">
    <!-- Mappa -->
    <div class="h-[500px] lg:h-auto min-h-[400px] bg-gray-200">
      <ClientOnly>
        <MapLeaflet />
      </ClientOnly>
    </div>

    <!-- Form -->
    <div class="bg-[#d32f2f] p-8 lg:p-12 flex flex-col justify-center">
      <h2 class="mb-2 text-3xl font-bold text-white">Contattaci</h2>
      <p class="mb-8 text-sm text-white/80">Compila il modulo per chiedere maggiori informazioni</p>
      <ContactForm form-type="contact" dark-bg />
      <PhoneNumber :dark="true" />
    </div>
  </section>
</template>

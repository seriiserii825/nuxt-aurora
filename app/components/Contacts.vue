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
      <h2 class="text-white text-3xl font-bold mb-2">Contattaci</h2>
      <p class="text-white/80 mb-8 text-sm">Compila il modulo per chiedere maggiori informazioni</p>
      <ContactForm form-type="contact" dark-bg />
    </div>
  </section>
</template>

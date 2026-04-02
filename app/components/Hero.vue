<template>
  <!-- ═══ HERO ═══ -->
  <section class="relative flex items-center justify-center min-h-screen overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 bg-gray-600">
      <img :src="'/img/hero.jpg'" alt="Immobile" class="object-cover w-full h-full" />
    </div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/35" />

    <!-- Watermark AURORA — huge centered letters -->
    <div
      class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <img
        :src="'/img/logo.svg'"
        alt=""
        class="opacity-[0.06] w-[90%] max-w-[900px]"
        style="filter: brightness(10)" />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center w-full max-w-5xl px-6 py-16 mx-auto text-center">
      <h2 class="w-full mb-4 text-4xl font-black leading-tight text-white lg:text-5xl">
        Hai un immobile o un terreno da vendere?
      </h2>
      <p class="w-full mb-6 text-base text-white/80">
        Trasformiamo il potenziale del tuo immobile in un'opportunità concreta. Contattaci per una
        valutazione.
      </p>

      <!-- Dark panel: CTA + Form -->
      <div
        id="hero-form"
        class="w-full max-w-3xl p-5 rounded-sm"
        style="background: rgba(47, 47, 47, 0.8)">
        <!-- CTA row (prima riga del pannello) -->
        <div class="grid grid-cols-2 gap-2.5 mb-2.5">
          <a
            href="#hero-form"
            class="bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold px-6 py-2.5 rounded transition-colors text-sm">
            Richiedi una valutazione gratuita
          </a>
          <PhoneNumber />
        </div>

        <!-- Form fields -->
        <ContactForm form-type="hero" />
      </div>
    </div>
  </section>
</template>

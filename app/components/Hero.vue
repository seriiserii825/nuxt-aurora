<template>
  <!-- ═══ HERO ═══ -->
  <section class="relative flex items-center justify-center overflow-hidden min-h-screen">
    <!-- Background image -->
    <div class="absolute inset-0 bg-gray-600">
      <img :src="'/img/hero.jpg'" alt="Immobile" class="w-full h-full object-cover" />
    </div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/35" />

    <!-- Watermark AURORA — huge centered letters -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <img
        :src="'/img/logo.svg'"
        alt=""
        class="opacity-[0.06] w-[90%] max-w-[900px]"
        style="filter: brightness(10)" />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
      <h2 class="text-white text-4xl lg:text-5xl font-black leading-tight mb-4 w-full">
        Hai un immobile o un terreno da vendere?
      </h2>
      <p class="text-white/80 text-base mb-6 w-full">
        Trasformiamo il potenziale del tuo immobile in un'opportunità concreta. Contattaci per una
        valutazione.
      </p>

      <!-- Dark panel: CTA + Form -->
      <div
        id="hero-form"
        class="w-full max-w-3xl rounded-sm p-5"
        style="background: rgba(47, 47, 47, 0.8)">
        <!-- CTA row (prima riga del pannello) -->
        <div class="grid grid-cols-2 gap-2.5 mb-2.5">
          <a
            href="#hero-form"
            class="bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold px-6 py-2.5 rounded transition-colors text-sm">
            Richiedi una valutazione gratuita
          </a>
          <a
            href="tel:0422411596"
            class="flex items-center justify-center gap-2 text-white font-semibold text-sm hover:text-white/80"
            style="background: rgba(255, 255, 255, 0.1)">
            <span
              class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            0422 411596
          </a>
        </div>

        <!-- Form fields -->
        <ContactForm form-type="hero" />
      </div>
    </div>
  </section>
</template>

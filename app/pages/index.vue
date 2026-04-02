<script setup lang="ts">
useHead({
  title: 'Aurora Immobiliare – Vendi il tuo immobile',
  meta: [
    { name: 'description', content: 'Trasformiamo il potenziale del tuo immobile in un\'opportunità concreta. Valutazione gratuita, esperienza dal 1970.' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">

    <!-- ═══ HEADER ═══ -->
    <header class="bg-[#d32f2f] py-3 flex items-center justify-center">
      <img :src="'/img/logo.svg'" alt="Aurora" class="h-8" />
    </header>

    <!-- ═══ HERO ═══ -->
    <section class="relative flex items-center justify-center overflow-hidden min-h-screen">
      <!-- Background image -->
      <div class="absolute inset-0 bg-gray-600">
        <img
          :src="'/img/hero.jpg'"
          alt="Immobile"
          class="w-full h-full object-cover"
          @error="($event.target as HTMLImageElement).style.display='none'"
        />
      </div>

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/35" />

      <!-- Watermark AURORA — huge centered letters -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <img
          :src="'/img/logo.svg'"
          alt=""
          class="opacity-[0.06] w-[90%] max-w-[900px]"
          style="filter: brightness(10)"
        />
      </div>

      <!-- Content -->
      <div class="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <h2 class="text-white text-4xl lg:text-5xl font-black leading-tight mb-4 w-full">
          Hai un immobile o un terreno da vendere?
        </h2>
        <p class="text-white/80 text-base mb-6 w-full">
          Trasformiamo il potenziale del tuo immobile in un'opportunità concreta. Contattaci per una valutazione.
        </p>

        <!-- Dark panel: CTA + Form -->
        <div id="hero-form" class="w-full rounded-sm p-5" style="background: rgba(10, 13, 28, 0.88)">
          <!-- CTA row (prima riga del pannello) -->
          <div class="flex items-center gap-3 mb-4 flex-wrap">
            <a
              href="#hero-form"
              class="bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold px-6 py-2.5 rounded transition-colors text-sm"
            >
              Richiedi una valutazione gratuita
            </a>
            <a href="tel:0422411596" class="flex items-center gap-2 text-white font-semibold text-sm hover:text-white/80">
              <span class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              </span>
              0422 411596
            </a>
          </div>

          <!-- Form fields -->
          <ContactForm form-type="hero" />
        </div>
      </div>
    </section>

    <!-- ═══ PERCHÉ SCEGLIERCI ═══ -->
    <section class="bg-[#d32f2f] py-4">
      <h2 class="text-white text-center font-bold text-xl tracking-wide">Perché Sceglierci</h2>
    </section>
    <section class="py-8 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded">
          <!-- Card 1 -->
          <div class="p-8 flex flex-col gap-4">
            <div class="w-12 h-12 text-[#d32f2f]">
              <!-- Clipboard icon -->
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="28" height="34" rx="3"/>
                <path d="M18 8v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
                <path d="M16 22h16M16 30h10"/>
                <circle cx="33" cy="33" r="7" fill="white" stroke-width="2"/>
                <path d="M30 33l2 2 4-4"/>
              </svg>
            </div>
            <p class="font-semibold text-gray-800">Valutazione Gratuita</p>
          </div>
          <!-- Card 2 -->
          <div class="p-8 flex flex-col gap-4">
            <div class="w-12 h-12 text-[#d32f2f]">
              <!-- Experience icon -->
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="20" r="10"/>
                <path d="M24 10 C20 10 16 14 16 20"/>
                <path d="M14 32 C14 38 34 38 34 32" stroke-linecap="round"/>
                <circle cx="24" cy="20" r="3" fill="currentColor"/>
              </svg>
            </div>
            <p class="font-semibold text-gray-800">Esperienza dal 1970</p>
          </div>
          <!-- Card 3 -->
          <div class="p-8 flex flex-col gap-4">
            <div class="w-12 h-12 text-[#d32f2f]">
              <!-- 360 icon -->
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24 C8 14 14 8 24 8" stroke-linecap="round"/>
                <path d="M40 24 C40 34 34 40 24 40" stroke-linecap="round"/>
                <path d="M4 20 L8 24 L12 20" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44 28 L40 24 L36 28" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="font-semibold text-gray-800">Consulenza a 360°</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ COSA TRATTIAMO ═══ -->
    <section class="py-12 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-[#d32f2f] text-center font-bold text-2xl mb-8">Cosa trattiamo</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
          <!-- Card 1 -->
          <div class="relative h-64 overflow-hidden group cursor-pointer">
            <div class="absolute inset-0 bg-gray-500">
              <img :src="'/img/residenziale.jpg'" alt="Immobili residenziali" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" @error="($event.target as HTMLImageElement).style.display='none'" />
            </div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div class="absolute inset-0 flex items-end p-6">
              <span class="text-white font-semibold text-lg drop-shadow">Immobili residenziali</span>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="relative h-64 overflow-hidden group cursor-pointer">
            <div class="absolute inset-0 bg-gray-600">
              <img :src="'/img/commerciale.jpg'" alt="Immobili ad uso commerciale" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" @error="($event.target as HTMLImageElement).style.display='none'" />
            </div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div class="absolute inset-0 flex items-end p-6">
              <span class="text-white font-semibold text-lg drop-shadow">Immobili ad uso commerciale</span>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="relative h-64 overflow-hidden group cursor-pointer">
            <div class="absolute inset-0 bg-gray-700">
              <img :src="'/img/terreni.jpg'" alt="Terreni di varia tipologia" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" @error="($event.target as HTMLImageElement).style.display='none'" />
            </div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div class="absolute inset-0 flex items-end p-6">
              <span class="text-white font-semibold text-lg drop-shadow">Terreni di varia tipologia</span>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <!-- ═══ FOOTER ═══ -->
    <footer class="bg-white border-t border-gray-200 py-6 px-6">
      <div class="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <span>P.IVA 01118530268</span>
        <a href="tel:0422411596" class="flex items-center gap-2 font-semibold text-gray-800 hover:text-[#d32f2f]">
          <span class="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center text-xs">☏</span>
          0422 411596
        </a>
      </div>
    </footer>

  </div>
</template>

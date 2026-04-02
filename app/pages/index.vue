<script setup lang="ts">
useHead({
  title: 'Aurora Immobiliare – Vendi il tuo immobile',
  meta: [
    { name: 'description', content: 'Trasformiamo il potenziale del tuo immobile in un\'opportunità concreta. Valutazione gratuita, esperienza dal 1970.' },
  ],
})

const heroFormVisible = ref(false)

function scrollToContact() {
  document.getElementById('contattaci')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">

    <!-- ═══ HEADER ═══ -->
    <header class="bg-[#d32f2f] py-3 flex items-center justify-center">
      <h1 class="text-white tracking-[0.3em] font-bold text-2xl font-[Georgia,serif]">AURORA</h1>
    </header>

    <!-- ═══ HERO ═══ -->
    <section class="relative min-h-[600px] flex items-center overflow-hidden">
      <!-- Background image placeholder -->
      <div class="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500">
        <img
          :src="'/img/hero.jpg'"
          alt="Immobile"
          class="w-full h-full object-cover opacity-60"
          @error="($event.target as HTMLImageElement).style.display='none'"
        />
      </div>

      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <!-- Watermark AURORA -->
      <span class="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[180px] font-bold leading-none select-none hidden lg:block">AURORA</span>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        <div class="max-w-xl">
          <h2 class="text-white text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Hai un immobile<br>o un terreno<br>da vendere?
          </h2>
          <p class="text-white/80 text-lg mb-8">
            Trasformiamo il potenziale del tuo immobile in un'opportunità concreta.<br>
            Contattaci per una valutazione.
          </p>

          <!-- CTA bar -->
          <div class="flex items-center gap-4 mb-8 flex-wrap">
            <button
              @click="heroFormVisible = !heroFormVisible"
              class="bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              Richiedi una valutazione gratuita
            </button>
            <a href="tel:0422411596" class="flex items-center gap-2 text-white font-semibold text-sm hover:text-white/80">
              <span class="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-xs">☏</span>
              0422 411596
            </a>
          </div>

          <!-- Inline form -->
          <div class="bg-black/40 backdrop-blur-sm rounded-lg p-6">
            <ContactForm form-type="hero" />
          </div>
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

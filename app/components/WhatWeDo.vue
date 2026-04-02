<template>
  <!-- ═══ COSA TRATTIAMO ═══ -->
  <section class="py-12 px-6">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-[#d32f2f] text-center font-bold text-2xl mb-8">Cosa trattiamo</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
        <!-- Card 1 -->
        <div class="relative h-64 overflow-hidden group cursor-pointer">
          <div class="absolute inset-0 bg-gray-500">
            <img
              :src="'/img/residenziale.jpg'"
              alt="Immobili residenziali"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
          </div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div class="absolute inset-0 flex items-end p-6">
            <span class="text-white font-semibold text-lg drop-shadow">Immobili residenziali</span>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="relative h-64 overflow-hidden group cursor-pointer">
          <div class="absolute inset-0 bg-gray-600">
            <img
              :src="'/img/commerciale.jpg'"
              alt="Immobili ad uso commerciale"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
          </div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div class="absolute inset-0 flex items-end p-6">
            <span class="text-white font-semibold text-lg drop-shadow">
              Immobili ad uso commerciale
            </span>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="relative h-64 overflow-hidden group cursor-pointer">
          <div class="absolute inset-0 bg-gray-700">
            <img
              :src="'/img/terreni.jpg'"
              alt="Terreni di varia tipologia"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
          </div>
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div class="absolute inset-0 flex items-end p-6">
            <span class="text-white font-semibold text-lg drop-shadow">
              Terreni di varia tipologia
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

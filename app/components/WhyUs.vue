<template>
  <div class="bg-aurora-red text-white pt-16">
    <section>
      <h2 class="text-white text-center font-bold text-2xl tracking-wide">Perché Sceglierci</h2>
    </section>
    <section class="py-8 px-6">
      <div class="container mx-auto max-w-6xl">
        <div
          class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded">
          <!-- Card 1 -->
          <div class="p-8 flex flex-col gap-4 bg-white h-52 justify-between">
            <div class="w-12 h-12 text-aurora-red">
              <!-- Clipboard icon -->
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="28" height="34" rx="3" />
                <path d="M18 8v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                <path d="M16 22h16M16 30h10" />
                <circle cx="33" cy="33" r="7" fill="white" stroke-width="2" />
                <path d="M30 33l2 2 4-4" />
              </svg>
            </div>
            <p class="text-gray-800">Valutazione Gratuita</p>
          </div>
          <!-- Card 2 -->
          <div class="p-8 flex flex-col gap-4 bg-white h-52 justify-between">
            <div class="w-12 h-12 text-aurora-red">
              <!-- Experience icon -->
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="20" r="10" />
                <path d="M24 10 C20 10 16 14 16 20" />
                <path d="M14 32 C14 38 34 38 34 32" stroke-linecap="round" />
                <circle cx="24" cy="20" r="3" fill="currentColor" />
              </svg>
            </div>
            <p class="text-gray-800">Esperienza dal 1970</p>
          </div>
          <!-- Card 3 -->
          <div class="p-8 flex flex-col gap-4 bg-white h-52 justify-between">
            <div class="w-12 h-12 text-aurora-red">
              <!-- 360 icon -->
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M8 24 C8 14 14 8 24 8" stroke-linecap="round" />
                <path d="M40 24 C40 34 34 40 24 40" stroke-linecap="round" />
                <path d="M4 20 L8 24 L12 20" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M44 28 L40 24 L36 28" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="text-gray-800">Consulenza a 360°</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Aurora Immobiliare – Vendi il tuo immobile",
  meta: [
    {
      name: "description",
      content:
        "Trasformiamo il potenziale del tuo immobile in un'opportunità concreta. Valutazione gratuita, esperienza dal 1970.",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- ═══ HEADER ═══ -->
    <header class="bg-[#d32f2f] py-3 flex items-center justify-center">
      <img :src="'/img/logo.svg'" alt="Aurora" class="h-8" />
    </header>

    <Hero />
    <WhyUs />
    <WhatWeDo />
    <Contacts />
    <Footer />
  </div>
</template>

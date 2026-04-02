<script setup lang="ts">
// Адрес: Via Roma, Treviso (примерные координаты, уточнить при необходимости)
const LAT = 45.6669
const LNG = 12.2430

onMounted(async () => {
  const L = await import('leaflet')
  await import('leaflet/dist/leaflet.css')

  // Fix default marker icons
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })

  const map = L.map('leaflet-map', { zoomControl: true, scrollWheelZoom: false }).setView([LAT, LNG], 16)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map)

  L.marker([LAT, LNG]).addTo(map).bindPopup('<strong>Aurora Immobiliare</strong><br>Via Roma, Treviso').openPopup()
})
</script>

<template>
  <div id="leaflet-map" class="w-full h-full min-h-[400px]" />
</template>

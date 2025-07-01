<!-- Sección para pintar los botones en el Home -->
<template>
    <div @click="$emit('click')" class="...">
        <div
          class="w-full border border-yellow-500 rounded-full py-3 px-6 text-center transform transition duration-200 ease-out hover:scale-105 hover:bg-yellow-500/10 cursor-crosshair"
        >
          <span v-if="icon" class="mr-2 text-lg">{{ icon }}</span>
          <div class="font-bold text-white">{{ title }}</div>
          <div class="text-sm text-yellow-300">{{ priceCOP }} COP – ${{ priceUSD }} USD</div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    priceCOP: String,
    priceUSD: String,
  },
}
</script>

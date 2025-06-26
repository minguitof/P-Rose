<!-- src/components/ServiceCard.vue -->
<template>
  <div
    class="bg-gradient-to-br from-yellow-500 to-yellow-400 text-black rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300 w-full max-w-sm"
  >
    <h3 class="text-lg font-bold">{{ title }}</h3>
    <p class="text-sm">{{ priceCOP }} COP – {{ priceUSD }} USD</p>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: String,
    priceCOP: String,
    priceUSD: String,
  },
};
</script>

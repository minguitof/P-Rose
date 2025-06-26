<template>
  <div class="bg-black text-white min-h-screen flex flex-col items-center p-6">
    <div class="flex flex-col items-center">
      <img
        src="@/assets/profile.jpg"
        alt="Andres Felipe Hernandez"
        class="w-72 h-72 rounded-full object-cover mb-4 border-4 border-yellow-500"
      />
      <h1 class="text-2xl font-bold">Andres Felipe Hernandez</h1>
      <p class="text-sm text-gray-300">EL ARTISTA DE LAS ESTRELLAS ⭐</p>

      <div class="flex space-x-4 mt-4 text-xl text-white">
        <a href="#" target="#" rel="#">
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="#" target="#" rel="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" target="#" rel="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" target="#" rel="#">
          <i class="fab fa-x-twitter"></i>
        </a>
        <a href="#" target="#" rel="#">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" target="#" rel="#">
          <i class="fab fa-pinterest"></i>
        </a>
      </div>

    </div>

    <div class="mt-10 w-full max-w-md">
      <h2 class="text-center text-yellow-500 font-bold text-lg mb-2">SERVICIOS DESTACADOS</h2>
      <div class="flex justify-center text-yellow-500 mb-6">
        <span>⭐⭐⭐⭐⭐</span>
      </div>

      <div class="space-y-4">
        <ServiceButton title="CORTE" priceCOP="40.000" priceUSD="10.00" />
        <ServiceButton title="CORTE Y BARBA" priceCOP="50.000" priceUSD="13.00" />
        <ServiceButton title="SOLO BARBA" priceCOP="25.000" priceUSD="7.00" />
        <ServiceButton title="DEPILACIÓN DE NARIZ" priceCOP="20.000" priceUSD="5.00" />
        <ServiceButton title="DEPILACIÓN DE OIDOS" priceCOP="20.000" priceUSD="5.00" />
        <!-- <ServiceButton title="SERVICIO V.I.P ⚡" icon="🦅" priceCOP="500.000" priceUSD="120.00" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ServiceButton from './ServiceButton.vue'

export default {
  components: {
    ServiceButton
  }
}
</script>

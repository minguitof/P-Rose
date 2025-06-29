<!-- Componente Profile imagen y sus redes sociales -->
<template>
  <div class="bg-black text-white min-h-screen flex flex-col items-center p-6">
    <div class="flex flex-col items-center">
      <img
        src="@/assets/profile.jpg"
        alt="Andres Felipe Hernandez"
        class="w-96 h-96 rounded-full object-cover mb-4 border-4 border-yellow-500"
      />
      <h1 class="text-2xl font-bold">Andres Felipe Hernandez</h1>
      <p class="text-md text-gray-300">REFLEJÁ TU MEJOR VERSIÓN ⭐</p>
      <br>
      <p class="text-sm text-gray-300 italic tracking-wide">Tu look habla por vos. Asegurate de que diga lo correcto.</p>

      <div class="flex space-x-4 mt-4 text-xl text-white">
        <a href="https://wa.me/573045840264?text=Hola,%20estoy%20interesado%20en%20tus%20productos%20y%20servicios." target="_blank" rel="noopener noreferrer" class="hover:text-green-500 transition duration-300">
          <i class="fab fa-whatsapp text-white text-2xl transition-transform duration-300 hover:scale-125 hover:text-green-500"></i>
        </a>
        <a href="#" target="#" rel="#" class="transition-transform duration-300 hover:scale-125 group">
          <i class="fab fa-tiktok text-white fab fa-tiktok text-white text-2xl group-hover:text-pink-500"></i>
        </a>
        <a href="https://www.instagram.com/pipehp_/" target="_blank" rel="noopener noreferrer" class="rounded-full transition-transform duration-300 hover:scale-125 group">
          <i class="fab fa-instagram text-white text-2xl group-hover:text-pink-500"></i>
        </a>
        <a href="#" target="#" rel="#" class="rounded-full transition-transform duration-300 hover:scale-125 group">
          <i class="fab fa-facebook text-white text-2xl group-hover:text-blue-500"></i>
        </a>
        <a href="#" target="#" rel="#" class="rounded-full transition-transform duration-300 hover:scale-125 group">
          <i class="fab fa-x-twitter text-white text-2xl group-hover:text-neutral-400"></i>
        </a>
        <a href="#" target="#" rel="#" class="rounded-full transition-transform duration-300 hover:scale-125 group">
          <i class="fab fa-pinterest text-white text-2xl group-hover:text-red-500"></i>
        </a>
      </div>

    </div>

    <div class="mt-10 w-full max-w-md">
      <!-- <h2 class="text-center text-yellow-500 font-bold text-lg mb-2">SERVICIOS DESTACADOS</h2> -->
      <h2 class="text-center text-yellow-500 font-bold text-lg mb-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              SERVICIOS DESTACADOS
      </h2>
      <!-- <div class="flex justify-center text-yellow-500 mb-6">
        <span>⭐⭐⭐⭐⭐</span>
      </div> -->
      <div class="flex justify-center text-yellow-500 mb-6 space-x-1">
        <span class="text-2xl star-bounce" style="animation-delay: 0s;">⭐</span>
        <span class="text-2xl star-bounce" style="animation-delay: 0.1s;">⭐</span>
        <span class="text-2xl star-bounce" style="animation-delay: 0.2s;">⭐</span>
        <span class="text-2xl star-bounce" style="animation-delay: 0.3s;">⭐</span>
        <span class="text-2xl star-bounce" style="animation-delay: 0.4s;">⭐</span>
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
  },
  methods: {
    goToAbout() {
      this.$router.push({ name: 'About' })
    }
  }
}
</script>

<style scoped>

/* animación a las estrellas en profile */
@keyframes wave-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.star-bounce {
  display: inline-block;
  animation: wave-bounce 1s ease-in-out infinite;
}


</style>
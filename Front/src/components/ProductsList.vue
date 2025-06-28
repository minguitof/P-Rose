<template>
<div class="mt-10 w-full max-w-md">
      <!-- <h2 class="text-center text-yellow-500 font-bold text-lg mb-2">PRODUCTOS</h2> -->
       <div class="mt-10 w-full max-w-md">
          <h2 class="text-center text-yellow-500 font-bold text-lg mb-2">PRODUCTOS</h2>
          <div class="flex justify-center text-yellow-500 text-xl mb-6">
            <span>⋆⁺₊✧༚━━━༺✨༻━━━༚✧₊⁺⋆</span>
          </div>
        </div>
    </div>

    <!-- Swiper con navegación -->
    <div class="relative w-full py-10 bg-black overflow-hidden">

<!-- Botón Anterior (sin rotación, flecha real hacia la izquierda) -->
<div class="productos-prev absolute top-1/2 left-0 z-30 w-12 h-12 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center hover:bg-yellow-500 transition duration-300 -translate-y-1/2 group">
  <svg class="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M12.293 4.293a1 1 0 010 1.414L8.414 10l3.879 4.293a1 1 0 01-1.586 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.586 0z" clip-rule="evenodd" />
  </svg>
</div>



<!-- Botón Siguiente -->
<div class="productos-next absolute top-1/2 right-0 z-30 w-12 h-12 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center hover:bg-yellow-500 transition duration-300 -translate-y-1/2 group">
  <svg class="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M7.707 15.707a1 1 0 010-1.414L11.586 10 7.707 6.707a1 1 0 011.586-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.586 0z" clip-rule="evenodd" />
  </svg>
</div>



      <!-- Swiper -->
      <Swiper
        class="z-10 overflow-visible"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.productos-next',
          prevEl: '.productos-prev'
        }"
        :slides-per-view="1.1"
        :space-between="16"
        :centeredSlides="true"
        :loop="true"
        :breakpoints="{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 }
        }"
        :pagination="true"
      >
        <SwiperSlide
          v-for="product in products"
          :key="product.id"
          class="overflow-visible"
        >
          <div class="bg-gradient-to-b from-black via-gray-900 to-black border border-yellow-400 rounded-2xl shadow-lg text-white p-6 text-center transition duration-300 ease-in-out hover:scale-[1.03] origin-center">
            <img :src="product.image" alt="" class="mx-auto h-36 mb-4 object-contain rounded-md" />
            <h3 class="font-bold text-lg mb-1">{{ product.name }}</h3>
            <p class="text-yellow-300 font-semibold">{{ product.price }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const products = [
  { id: 1, name: 'Shampoo', price: '$100.000 COP', image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg' },
  { id: 2, name: 'Laca', price: '$120.000 COP', image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg' },
  { id: 3, name: 'Kit', price: '$95.000 COP', image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg' },
  { id: 4, name: 'Aceite', price: '$130.000 COP', image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg' },
  { id: 5, name: 'Aceite', price: '$130.000 COP', image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/a321a2a3-4cd5-4b8c-853c-ade4d6e2a330/Derivates/885d4ee3-4751-4921-a6d5-7f0f0c9638a3.jpg' },
]

</script>

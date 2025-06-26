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
    <div class="w-full py-10 bg-black relative overflow-visible">

      <!-- Botones de navegación (z-30 para que estén al frente) -->
      <div class="swiper-button-prev productos-prev absolute top-1/2 -left-4 z-30 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition -translate-y-1/2">
        
      </div>
      <div class="swiper-button-next productos-next absolute top-1/2 -right-4 z-30 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition -translate-y-1/2">
        
      </div>

      <!-- Swiper -->
      <Swiper
        class="z-10 overflow-visible"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.productos-next',
          prevEl: '.productos-prev'
        }"
        :slides-per-view="1.2"
        :space-between="16"
        :centeredSlides="true"
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

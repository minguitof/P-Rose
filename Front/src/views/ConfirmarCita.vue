<template>
    <div class="flex justify-center space-x-4 mt-6">
      <button @click="mostrarAgendamiento" class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-md transition">
        ✂️ Agendar cita
      </button>
      <a href="https://wa.me/573045840264?text=Hola%2C%20quiero%20agendar%20una%20cita%20contigo." target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition">
        💬 Hablar por WhatsApp
      </a>
    </div>
    <div class="flex justify-center space-x-4 mt-6">
        <button @click="goToHome" class="bg-yellow-400 hover:yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-md transition">
          🏠 Regresar al Inicio
        </button>
    </div>
</template>

<script>
export default {
  name: 'ConfirmarCita', // ← nombre válido de componente
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}

</script>
<!-- src/views/About.vue -->
<template>
  <div>
    <h1>Sobre Nosotros</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView', // ← nombre válido de componente
    methods: {
    goHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

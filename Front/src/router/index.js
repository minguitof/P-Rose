import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import AgendarCita from '@/views/ConfirmarCita.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/agendar', name: 'AgendarCita', component: AgendarCita }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
<template>
    <div class="bg-black min-h-screen text-white flex flex-col items-center px-4">
        <ProfileCard />
        <ProductsList />
        <SatisfiedCustomers />
        <PRose />
    </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import ProductsList from '@/components/ProductsList.vue'
import SatisfiedCustomers from '@/components/SatisfiedCustomers.vue'
import PRose from '@/components/icons/P_rose.vue'

export default {
  name: 'HomeView',
  components: {
    ProfileCard,
    ProductsList,
    SatisfiedCustomers,
    PRose,
  }
}
</script>
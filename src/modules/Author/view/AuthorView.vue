<template>
  <BaseBanner text="Author"></BaseBanner>
  <div class="container">
    <!-- <TheBanner></TheBanner> -->
    <TheProfile></TheProfile>
    <TheProducts></TheProducts>
  </div>
</template>


<script setup lang="ts">
// import TheBanner from '../components/TheBanner.vue'
import BaseBanner from '@/components/base/banner/BaseBanner.vue';
import TheProducts from '../components/TheProducts.vue'
import TheProfile from '../components/TheProfile.vue';
</script>

<style scoped></style>

<template>

  <div class="container">
    <HomeBanner></HomeBanner>
    <TopSeller></TopSeller>
    <TodayPick></TodayPick>
    <PopularCollection></PopularCollection>
    <CreatAndSell></CreatAndSell>
  </div>

</template>

<script setup lang="ts">
  import HomeBanner from '../components/HomeBanner.vue'
  import TodayPick from '../components/TodayPick.vue'
  import TopSeller from '../components/TopSeller.vue'
  import PopularCollection from '../components/PopularCollection.vue';
  import CreatAndSell from '../components/CreatAndSell.vue';

  // import BaseButton from '@/components/base/button/BaseButton.vue'
</script>

<style scoped></style>

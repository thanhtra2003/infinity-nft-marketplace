<script setup lang="ts">
import CardItem from '@/components/card/CardItem.vue';
</script>

<template>
  <div class=" text-white">
    <div class="mt-[80px] flex items-center justify-between mb-[36px]">
      <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize">Today's Picks</h2>
      <h3 class="font-bold text-sub-heading-2 leading-[20px] border-b-[1px] cursor-pointer uppercase" style="border-color: #4B50E6;">Explore more</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-x-[30px] gap-y-[44px]">
      <CardItem></CardItem>
    </div>
    <!-- <BaseButton icon="" text="Load More" class="m-auto"></BaseButton> -->
     <button class="border m-auto flex items-center justify-center w-[154px] h-[54px] rounded-[30px] text-[15px] leading-[22px] font-bold hover:bg-white hover:text-black cursor-pointer">Load More</button>
  </div>
</template>

<style scoped lang="css"></style>

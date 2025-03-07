<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  id: number | string
}>()
</script>

<template>
  <div class="bg-items h-[442px] w-full rounded-[20px] p-[20px] relative group transition-all duration-300 ease-in-out hover:-translate-y-2 ">
    <div
      class="bg-product relative  h-[292px] rounded-[20px] cursor-pointer "
      @click="$router.push(`/detail/${id}`)"
    >
      <button
        class="absolute top-[14px] left-[214px] flex h-[28px] w-[64px] cursor-pointer items-center justify-center gap-[5px] rounded-[10px] bg-black
         sm:left-[180px] sm:h-[24px] sm:w-[58px]
        lg:left-[214px] lg:h-[28px] lg:w-[64px]"
      >
        <img src="/logo/wislist.svg" alt="loading"  />
        <p class="sm:text-[12px] lg:text-[14px]">100</p>
      </button>
    </div>
    <div class="mt-[20px]">
      <div class="mb-[17px] flex justify-between">
        <h2 class="text-lg leading-[26px] font-bold text-white capitalize transition duration-700 ease-in-out cursor-pointer hover:text-primary">
          <router-link :to="`/detail/${id}`">Name product</router-link>
        </h2>
        <button class="bg-primary h-[24px] w-[49px] rounded-[10px] text-xs font-bold tracking-[1.2px] text-white uppercase">
          BSC
        </button>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-[12px]">
          <div class="bg-product h-[44px] w-[44px] rounded-[15px]"></div>
          <div>
            <p class="text-name text-[13px] leading-[20px] font-normal not-italic">Owned By</p>
            <h3 class="text-[15px] leading-[22px] font-bold not-italic transition duration-700 ease-in-out cursor-pointer hover:text-primary">Thanh Trà</h3>
          </div>
        </div>
        <div>
          <p class="text-name text-[13px] leading-[20px] font-normal not-italic">current</p>
          <h3 class="text-[18px] leading-[26px] font-bold capitalize not-italic">4.87 ETH</h3>
        </div>
      </div>

    </div>
    <div class="mt-[20px] flex items-center justify-between absolute top-[141px] left-[95px]  opacity-0 group-hover:opacity-100 transition-all duration-[0.8s] ease-in-out">
        <BaseButton icon="cart" text="Place Bid" class="cursor-pointer !bg-white !text-black !border-none hover:!bg-primary hover:!text-white"></BaseButton>
      </div>
  </div>
</template>

<style scoped></style>

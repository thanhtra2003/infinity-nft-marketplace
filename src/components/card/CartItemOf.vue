<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps<{
    id: number | string
  }>()
</script>

<template>
  <div
    class="bg-items h-[504px] w-[330px] rounded-[20px] p-[20px] transition-all duration-300 ease-in-out hover:-translate-y-2 sm:h-[450px] sm:w-[280px] sm:p-[15px] lg:h-[504px] lg:w-[330px] lg:p-[20px]"
  >
    <div
      class="bg-product relative flex h-[290px] w-[290px] cursor-pointer items-center justify-center rounded-[20px] sm:h-[230px] sm:w-[250px] lg:h-[290px] lg:w-[290px]"
      @click="$router.push(`/detail/${id}`)"
    >
      <button
        class="absolute top-[14px] left-[214px] flex h-[28px] w-[64px] cursor-pointer items-center justify-center gap-[5px] rounded-[10px] bg-black sm:left-[180px] sm:h-[24px] sm:w-[58px] lg:left-[214px] lg:h-[28px] lg:w-[64px]"
      >
        <img src="/logo/wislist.svg" alt="loading" class="sm:w-[14px] lg:w-[16px]" />
        <p class="sm:text-[12px] lg:text-[14px]">100</p>
      </button>
    </div>

    <div class="mt-[20px]">
      <div class="mb-[17px] flex justify-between">
        <h2
          class="hover:text-primary cursor-pointer text-lg leading-[26px] font-bold text-white capitalize transition duration-700 ease-in-out sm:text-[16px] sm:leading-[22px]"
        >
          <router-link :to="`/detail/${id}`">Name product</router-link>
        </h2>
        <button
          class="bg-primary h-[24px] w-[49px] rounded-[10px] text-xs font-bold tracking-[1.2px] text-white uppercase sm:h-[22px] sm:w-[45px] sm:text-[10px]"
        >
          BSC
        </button>
      </div>

      <div class="mb-[20px] flex justify-between">
        <div class="flex gap-[12px]">
          <div class="bg-product h-[44px] w-[44px] rounded-[15px] sm:h-[38px] sm:w-[38px]"></div>
          <div>
            <p class="text-name text-[13px] leading-[20px] font-normal sm:text-[12px]">Owned By</p>
            <h3
              class="hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out sm:text-[14px] sm:leading-[20px]"
            >
              Thanh Trà
            </h3>
          </div>
        </div>
      </div>

      <div class="mt-[20px] flex items-center justify-between">
        <BaseButtonText
          text="Off market"
          class="cursor-pointer !p-[10px] hover:bg-white hover:text-black sm:!p-[8px] sm:text-[14px]"
        ></BaseButtonText>
        <div class="flex cursor-pointer gap-2 transition duration-500 ease-in-out">
          <img src="/logo/change.svg" alt="loading" class="sm:w-[14px] lg:w-[16px]" />
          <p
            class="text-name hover:text-primary text-[18px] leading-[26px] font-bold transition duration-500 ease-in-out sm:text-[15px] sm:leading-[22px]"
          >
            View History
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

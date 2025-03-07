<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps<{
    id: number | string
  }>()
</script>
<template>
  <div
    class="bg-items group relative h-[504px] w-[330px] rounded-[20px] p-[20px] transition-all duration-300 ease-in-out hover:-translate-y-2
    sm:w-[280px] sm:h-[450px] sm:p-[15px]
      lg:w-[330px] lg:h-[504px] lg:p-[20px]  "
  >
    <div
      class="bg-product relative flex h-[290px] w-[290px] cursor-pointer items-center justify-center rounded-[20px]  sm:w-[250px] sm:h-[230px]
      lg:w-[290px] lg:h-[290px]"
      @click="$router.push(`/detail/${id}`)"
    >
      <button
        class="absolute top-[14px] left-[214px] flex h-[28px] w-[64px] cursor-pointer items-center justify-center gap-[5px] rounded-[10px] bg-black  sm:right-0
        sm:left-[180px] sm:h-[24px] sm:w-[58px]
        lg:left-[214px] lg:h-[28px] lg:w-[64px]"
      >
        <img src="/logo/wislist.svg" alt="loading" class="sm:w-[14px] lg:w-[16px]" />
        <p class="sm:text-[12px] lg:text-[14px]">100</p>
      </button>
    </div>
    <div class="mt-[20px]">
      <div>
        <h2
          class="hover:text-primary cursor-pointer text-lg leading-[26px] font-bold text-white capitalize transition duration-700 ease-in-out"
        >
          <router-link :to="`/detail/${id}`">Name product</router-link>
        </h2>
      </div>
      <div class="flex items-center justify-between border-b border-black pt-[17px] pb-[19px]">
        <div class="flex gap-[12px]">
          <div class="bg-product h-[44px] w-[44px] rounded-[15px]"></div>
          <div>
            <p class="text-name text-[13px] leading-[20px] font-normal not-italic">Owned By</p>
            <h3
              class="hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold not-italic transition duration-700 ease-in-out"
            >
              Thanh Trà
            </h3>
          </div>
        </div>

        <button class="bg-primary h-[24px] w-[49px] rounded-[10px] text-xs font-bold tracking-[1.2px] text-white uppercase">
          BSC
        </button>
      </div>
      <div class="flex items-center justify-between pt-[15px] pb-[17px]">
        <div>
          <p class="text-name text-[13px] leading-[20px] font-normal not-italic">Current Bid</p>
          <span class="text-[18px] leading-[26px] font-bold capitalize not-italic">4.87 ETH</span> &nbsp;<span
            class="text-name text-[13px] leading-[20px] font-normal"
            >= $12.246</span
          >
        </div>
        <div class="flex cursor-pointer gap-2 transition duration-500 ease-in-out">
          <img src="/logo/change.svg" alt="loading" />
          <p
            class="text-name hover:text-primary cursor-pointer text-[18px] leading-[26px] font-bold transition-all duration-500 ease-in-out"
          >
            View History
          </p>
        </div>
      </div>
    </div>
    <div
      class="absolute top-[141px] left-[95px] mt-[20px] flex items-center justify-between opacity-0 transition-all duration-[0.8s] ease-in-out group-hover:opacity-100"
    >
      <BaseButton
        icon="cart"
        text="Place Bid"
        class="hover:!bg-primary cursor-pointer !border-none !bg-white !text-black hover:!text-white"
      ></BaseButton>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>

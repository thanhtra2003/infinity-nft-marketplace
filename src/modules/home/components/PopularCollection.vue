<script setup lang="ts">
  const products = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    name: `product ${i + 1}`,
    text: `People ${i + 1}`,
    price: (Math.random() * 200).toFixed(2)
  }))
</script>

<template>
  <div class="text-white">
    <div class="mt-[80px] mb-[38px] flex items-center justify-between">
      <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize">Popular Collection</h2>
      <h3
        class="text-sub-heading-2 cursor-pointer border-b-[2px] border-[#4b50e6] bg-[#fff] bg-clip-text leading-[20px] font-bold text-transparent uppercase transition-all duration-500 hover:bg-[linear-gradient(-45deg,#E250E5,#4B50E6,#E250E5,#4B50E6)]"
      >
        Explore more
      </h3>
    </div>
    <div
      class="grid grid-cols-3 grid-rows-1 justify-between gap-x-[30px] sm:grid-cols-1 sm:grid-rows-3 sm:gap-y-[30px] lg:grid-cols-1 lg:grid-rows-3 lg:gap-y-[30px] xl:grid-cols-3"
    >
      <div class="bg-items rounded-[10px] p-[20px]" v-for="product in products" :key="product.id">
        <div class="relative flex">
          <div class="bg-name relative mr-[10px] h-[64px] w-[64px] rounded-[15px]">
            <div
              class="bg-primary absolute top-[46px] left-[46px] flex h-[18px] w-[18px] items-center justify-center rounded-[50%]"
            >
              <img src="/logo/check.svg" alt="check" />
            </div>
          </div>
          <div class="mr-[63px] justify-center">
            <h2
              class="hover:text-primary cursor-pointer text-[20px] leading-[26px] font-bold transition duration-500 ease-in-out"
            >
              {{ product.name }}
            </h2>
            <span class="text-name text-[13px] leading-[20px] font-normal">Created by</span>&nbsp;<span
              class="hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out"
              >{{ product.text }}</span
            >
          </div>
          <button
            class="absolute right-[0px] flex h-[28px] w-[64px] items-center justify-center gap-[5px] rounded-[20px] bg-black"
          >
            <img src="/logo/wislist.svg" alt="loading" />
            <p>100</p>
          </button>
        </div>
        <div class="mt-[18px] flex gap-[9px]">
          <div class="h-[272px] w-[192px] cursor-pointer rounded-[15px] bg-black sm:w-full lg:w-full "></div>
          <div>
            <div class="flex gap-[10px]">
              <div class="bg-name h-[100px] w-[100px] cursor-pointer rounded-[15px]"></div>
              <div class="bg-product h-[100px] w-[100px] cursor-pointer rounded-[15px]"></div>
            </div>
            <div class="mt-[10px] h-[162px] w-[210px] cursor-pointer rounded-[15px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>

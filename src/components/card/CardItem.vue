<script setup lang="ts">
// import BaseButton from '../base/button/BaseButton.vue';
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `product ${i + 1}`,
    text:`Hello Việt Nam ${i+1}`,
    price: (Math.random() * 200).toFixed(2)
  }))
  // const router = useRoute();
</script>
<template>
  <div class="bg-items h-[504px] w-[330px] rounded-[20px] mb-[40px]" v-for="product in products" :key="product.id">
    <div class="relative bg-product mt-[20px] mr-[20px] ml-[20px] flex h-[290px] w-[290px] items-center justify-center rounded-[20px]">
      <button class="flex w-[64px] h-[28px] rounded-[10px] cursor-pointer bg-black items-center justify-center gap-[5px] absolute top-[14px] left-[214px]">
        <img src="/logo/wislist.svg" alt="loading">
        <p>100</p>
      </button>
    </div>
    <div class="p-[20px]">
      <div class="mb-[17px] flex justify-between">
        <h2 class="text-lg leading-[26px] font-bold text-white capitalize" >{{ product.name }}</h2>
        <RouterLink to="/"></RouterLink>
        <button class="bg-primary h-[24px] w-[49px] rounded-[10px] text-xs font-bold tracking-[1.2px] text-white uppercase">
          BSC
        </button>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-[12px]">
          <div class="bg-product h-[44px] w-[44px] rounded-[15px]"></div>
          <div>
            <p class="text-name text-[13px] leading-[20px] font-normal not-italic">Owned By</p>
            <h3 class="text-[15px] leading-[22px] font-bold not-italic">{{ product.text }}</h3>
          </div>
        </div>
        <div>
          <p class="text-name text-[13px] leading-[20px] font-normal not-italic">current</p>
          <h3 class="text-[18px] leading-[26px] font-bold capitalize not-italic">{{product.price}}ETH</h3>
        </div>
      </div>
      <div class="mt-[20px] flex items-center justify-between">
        <BaseButton icon="cart" text="Place Bid" class="hover:bg-white hover:text-black cursor-pointer"></BaseButton>
        <div class="flex gap-2">
          <img src="/logo/change.svg" alt="loading" />
          <p class="text-name text-[18px] leading-[26px] font-bold">View History</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>

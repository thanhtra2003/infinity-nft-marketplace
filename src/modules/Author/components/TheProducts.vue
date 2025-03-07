<script setup lang="ts">
  import CartItemAuthor from '@/components/card/CartItemAuthor.vue'

  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `product ${i + 1}`,
    text: `Hello Việt Nam ${i + 1}`,
    price: (Math.random() * 200).toFixed(2)
  }))
</script>

<template>
  <!-- <div class="mt-[60px] grid grid-cols-4 grid-rows-2 gap-x-[30px] gap-y-[40px] sm:grid-cols-1 lg:grid-cols-2"> -->
    <div class="mt-[60px] grid gap-x-[30px] gap-y-[40px] grid-cols-4 xs:!grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 xl:grid-cols-4">

    <CartItemAuthor v-for="product in products" :key="product.id" :id="product.id"></CartItemAuthor>
  </div>
  <button
    class="m-auto mt-[40px] mb-[80px] flex h-[54px] w-[154px] cursor-pointer items-center justify-center rounded-[30px] border-2 text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out hover:bg-white hover:text-black"
  >
    Load More
  </button>
</template>

<style scoped></style>

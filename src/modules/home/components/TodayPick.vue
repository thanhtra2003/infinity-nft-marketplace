<script setup lang="ts">
  import CardItem from '@/components/card/CardItem.vue'

  // const products = Array.from({ length: 8 }, (_, i) => ({
  //   id: i + 1,
  //   name: `product ${i + 1}`,
  //   text: `Hello Việt Nam ${i + 1}`,
  //   price: (Math.random() * 200).toFixed(2)
  // }))

  const products = [
    { id: 1, name: 'Laptop', owner: 'Thanh Trà', baseButtonType: 'Off Market' },
    { id: 2, name: 'Smartphone', owner: 'Thanh Trà', baseButtonType: 'Buy Now' },
    { id: 3, name: 'Tablet', owner: 'Thanh Trà', baseButtonType: 'Buy Now' },
    { id: 4, name: 'Headphones', owner: 'Thanh Trà', baseButtonType: 'List for sale' },
    { id: 5, name: 'Camera', owner: 'Hiếu Thứ Hai', baseButtonType: 'Off Market' },
    { id: 6, name: 'Keyboard', owner: 'Bạch Kính Đình', baseButtonType: 'Remove from Sale' },
    { id: 7, name: 'Mouse', owner: 'Tang Diên', baseButtonType: 'List for sale' },
    { id: 8, name: 'Smartwatch', owner: 'Anh Jack', baseButtonType: 'Remove from Sale' },
    { id: 9, name: 'Monitor', owner: 'Ôn Dĩ Phàm', baseButtonType: 'Buy now' },
    { id: 10, name: 'Speaker', owner: 'Sơn Tùng', baseButtonType: 'List for sale' }
  ]
</script>

<template>
  <div class="text-white">
    <div class="mt-[80px] mb-[36px] flex items-center justify-between">
      <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize">Today's Picks</h2>
      <h3
        class="text-sub-heading-2 cursor-pointer border-b-[2px] border-[#4b50e6] bg-[#fff] bg-clip-text leading-[20px] font-bold text-transparent uppercase transition-all duration-500 hover:bg-[linear-gradient(-45deg,#E250E5,#4B50E6,#E250E5,#4B50E6)]"
      >
        Explore more
      </h3>
    </div>
    <div>
      <div
        class="xs:grid-cols-1 grid grid-cols-4 gap-x-[30px] gap-y-[44px] sm:grid-cols-1 sm:gap-x-[20px] sm:gap-y-[30px] lg:grid-cols-2 xl:grid-cols-3"
      >
        <CardItem v-for="item in products.slice(0, 8)" :key="item.id" v-bind="item" />
      </div>
    </div>

    <button
      class="m-auto mt-[40px] mb-[80px] flex h-[54px] w-[154px] cursor-pointer items-center justify-center rounded-[30px] border-2 text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out hover:bg-white hover:text-black"
    >
      Load More
    </button>
  </div>
</template>

<style scoped lang="css"></style>

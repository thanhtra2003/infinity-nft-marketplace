<script setup lang="ts">
  import { ref } from 'vue'
  import { Carousel, Pagination as CarouselPagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  import CartItemHover from '@/components/card/CartItemHover.vue'

  const config = {
    height: 500,
    itemsToShow: 4,
    gap: 20,
    wrapAround: true,
    breakpoints: {
      1200: { itemsToShow: 4 },
      1023: { itemsToShow: 3 },
      767: { itemsToShow: 2 }, 
      374: { itemsToShow: 1 } // <= 640px → 1 sản phẩm
    }
  }
  const myCarousel = ref()
  const nextSlide = () => {
    myCarousel.value?.next()
  }
  const prevSlide = () => {
    myCarousel.value?.prev()
  }
  const products = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    text: `Hello Việt Nam ${i + 1}`,
    price: (Math.random() * 200).toFixed(2)
  }))
</script>

<template>
  <div class="mt-[80px] mb-[36px] flex items-center justify-between">
    <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize">Live Auctions</h2>
    <h3
      class="text-sub-heading-2 cursor-pointer border-b-[2px] border-[#4b50e6] bg-[#fff] bg-clip-text leading-[20px] font-bold text-transparent uppercase transition-all duration-500 hover:bg-[linear-gradient(-45deg,#E250E5,#4B50E6,#E250E5,#4B50E6)]"
    >
      Explore more
    </h3>
  </div>
  <div class="relative">
    <Carousel v-bind="config" ref="myCarousel">
      <Slide v-for="product in products" :key="product.id">
        <CartItemHover :id="product.id"></CartItemHover>
      </Slide>
      <template #addons>
        <div class="xs:hidden absolute left-1/2 flex -translate-x-1/2 transform items-center gap-[150px]">
          <button
            @click="prevSlide"
            class="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white text-white transition"
          >
            <img src="/logo/previous.svg" alt="Previous" class="h-4 w-4" />
          </button>
          <!-- <font-awesome-icon :icon="['fat', 'arrow-right']" class="text-white bg-black" /> -->
          <CarouselPagination class="custom-pagination" />
          <button
            @click="nextSlide"
            class="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white text-white transition"
          >
            <img src="/logo/previous.svg" alt="Next" class="h-4 w-4 rotate-180" />
          </button>
        </div>
      </template>
    </Carousel>
  </div>
</template>
<style scoped lang="scss">
  .carousel {
    --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
    --vc-pgn-active-color: rgba(255, 255, 255, 1);
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
    --vc-pgn-border-radius: 5px;
    --vc-pgn-height: 10px;
    --vc-pgn-width: 10px;
  }
  .title:hover {
    color: aquamarine;
  }
</style>

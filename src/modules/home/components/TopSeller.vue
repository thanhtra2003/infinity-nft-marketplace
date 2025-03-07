<script setup lang="ts">
  import { ref } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  const sellers = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Seller ${i + 1}`,
    sales: (Math.random() * 200).toFixed(2)
  }))

  // const itemsToShow = ref(window.innerWidth <= 767 ? 3 : 5)

  // watchEffect(() => {
  //   window.addEventListener('resize', () => {
  //     itemsToShow.value = window.innerWidth <= 767 ? 3 : 5
  //   })
  // })

  // const itemsToShow = ref(getItemsToShow())

  // function getItemsToShow() {
  //   const width = window.innerWidth
  //   if (width <= 767) return 3
  //   if (width <= 1023) return 5
  //   if (width <= 1200) return 7
  //   return 9
  // }

  // watchEffect(() => {
  //   const updateItemsToShow = () => {
  //     itemsToShow.value = getItemsToShow()
  //   }
  //   window.addEventListener('resize', updateItemsToShow)

  //   return () => {
  //     window.removeEventListener('resize', updateItemsToShow)
  //   }
  // })

  // const config = computed(() => ({
  //   itemsToShow: itemsToShow.value,
  //   wrapAround: true,
  //   transition: 500
  // }))
  const config = {
    height: 200,
    itemsToShow: 9,
    gap: 41,
    wrapAround: true,
    breakpoints: {
      1400: { itemsToShow: 9 }, // >= 1536px → 5 sản phẩm
      1200: { itemsToShow: 4 }, // >= 1280px → 4 sản phẩm
      1023: { itemsToShow: 3 }, // >= 1024px → 3 sản phẩm
      767: { itemsToShow: 2 }, // >= 768px → 2 sản phẩm
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
</script>
<template>
  <div class="text-center text-white">
    <div class="mb-[36px] flex items-center justify-between">
      <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize">Top Seller</h2>
      <div class="flex gap-[16px] sm:hidden">
        <button
          @click="prevSlide"
          class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[30px] border border-solid border-[#5142fc] bg-transparent"
        >
          <img src="/logo/previous.svg" alt="Previous" />
        </button>
        <button
          @click="nextSlide"
          class="flex h-[40px] w-[40px] rotate-[180deg] transform-gpu cursor-pointer items-center justify-center rounded-[30px] border border-solid border-[#5142fc] bg-transparent"
        >
          <img src="/logo/previous.svg" alt="Next" />
        </button>
      </div>
    </div>

    <Carousel v-bind="config" ref="myCarousel">
      <Slide v-for="seller in sellers" :key="seller.id">
        <div class="seller-card w-full text-center">
          <div class="image-placeholder relative h-[120px] w-full overflow-hidden rounded-[50px] bg-white">
            <img
              src="https://themesflat.co/html/axiesv/assets/images/avatar/avt-author-tab.jpg"
              alt=""
              class="absolute top-0 left-0 h-full w-full object-cover"
            />
          </div>
          <div
            class="bg-primary absolute top-[94px] left-[94px] flex h-[26px] w-[26px] items-center justify-center rounded-[50%]"
          >
            <img src="/logo/check.svg" alt="check" />
          </div>
          <h3
            class="seller-name text-body-1 hover:text-primary mt-[17px] cursor-pointer text-center leading-[26px] font-bold capitalize transition duration-500 ease-in-out"
          >
            {{ seller.name }}
          </h3>
          <p class="seller-sales text-subtitle font-bold">{{ seller.sales }} ETH</p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<!-- <template>
  <div class="px-4 text-center text-white sm:px-2">
    <div class="mb-9 flex items-center justify-between">
      <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize sm:text-2xl">Top Seller</h2>
      <div class="flex gap-4 sm:hidden lg:hidden">
        <button
          @click="prevSlide"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[#5142fc] bg-transparent"
        >
          <img src="/logo/previous.svg" alt="Previous" />
        </button>
        <button
          @click="nextSlide"
          class="flex h-10 w-10 rotate-180 items-center justify-center rounded-full border border-solid border-[#5142fc] bg-transparent"
        >
          <img src="/logo/previous.svg" alt="Next" />
        </button>
      </div>
    </div>

    <Carousel v-bind="config" ref="myCarousel">
      <Slide v-for="seller in sellers" :key="seller.id">
        <div class="seller-card w-full p-4 text-center sm:p-2">
          <div class="lg:h-150px relative h-[120px] w-full rounded-2xl bg-white sm:h-[100px]">
            <div
              class="bg-primary absolute top-[94px] left-[94px] flex h-6 w-6 items-center justify-center rounded-full sm:top-[80px] sm:left-[80px]"
            >
              <img src="/logo/check.svg" alt="check" class="h-4 w-4" />
            </div>
          </div>
          <h3 class="mt-4 text-lg leading-6 font-bold capitalize sm:text-base">{{ seller.name }}</h3>
          <p class="text-md font-bold sm:text-sm">{{ seller.sales }} ETH</p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template> -->

<style scoped></style>

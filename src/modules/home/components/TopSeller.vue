<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const sellers = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Seller ${i + 1}`,
  sales: (Math.random() * 200).toFixed(2),
}));

const config = {
  height: 200,
  itemsToShow: 9,
  gap: 41,
  wrapAround: true,
};

const myCarousel = ref(null);
const nextSlide = () => {
  if (myCarousel.value) {
    myCarousel.value.next();
  }
};
const prevSlide = () => {
  if (myCarousel.value) {
    myCarousel.value.prev();
  }
};
</script>

<template>
  <div class="text-center text-white">
    <div class="mb-[36px] flex items-center justify-between">
      <h2 class="title text-left text-4xl leading-[44px] font-bold capitalize">Top Seller</h2>
      <div class="flex gap-[16px]">
        <button
          @click="prevSlide"
          class="flex h-[40px] w-[40px] items-center justify-center rounded-[30px] border border-solid border-[#5142fc] bg-transparent cursor-pointer"
        >
          <img src="/logo/previous.svg" alt="Previous" />
        </button>
        <button
          @click="nextSlide"
          class="flex h-[40px] w-[40px] items-center justify-center rounded-[30px] border border-solid border-[#5142fc] bg-transparent cursor-pointer rotate-[180deg] transform-gpu"
        >
          <img src="/logo/previous.svg" alt="Next" />
        </button>
      </div>
    </div>

    <Carousel v-bind="config" ref="myCarousel">
      <Slide v-for="seller in sellers" :key="seller.id">
        <div class="seller-card w-full text-center">
          <div class="image-placeholder w-full h-[120px] bg-white rounded-[50px] relative">
            <div
              class="w-[26px] h-[26px] rounded-[50%] flex items-center justify-center absolute top-[94px] left-[94px] bg-primary"
            >
              <img src="/logo/check.svg" alt="check" />
            </div>
          </div>
          <h3 class="seller-name text-body-1 mt-[17px] text-center leading-[26px] font-bold capitalize">
            {{ seller.name }}
          </h3>
          <p class="seller-sales text-subtitle font-bold">{{ seller.sales }} ETH</p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped></style>

<template>
  <div class="banner-home flex justify-between ">
    <div class="left relative sm:m-auto">
      <h2 class="text-heading-2 font-bold mt-33.25">Discover, find,</h2>
      <h2 class="gradient-text text-heading-2 font-bold">Sell extraordinary</h2>
      <!-- <img src="/logo/outline.svg" alt=""> -->
      <h2 class="text-heading-2 font-bold">Monster NFTs</h2>
      <p class="text-heading-6 font-bold mt-7.5 mb-11 capitalize">
        Marketplace for monster character cllections non fungible token NFTs
      </p>
      <div class="flex gap-4">
        <BaseButton icon="rocket" text="Explode" class="btn gap-[2.68px] text-white hover:bg-white"></BaseButton>
        <BaseButton icon="note" text="Create" class="btn text-white *:gap-[2.68px] hover:bg-white"></BaseButton>
      </div>
      <!-- <img src="/logo/color.svg" alt="">  -->
    </div>
    <div class="right relative mt-9.75 flex sm:hidden lg:hidden">
      <img src="/logo/outline2.svg" alt="" class="img1" />
      <img src="/logo/image.svg" alt="" class="img2" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .right {
    .img2 {
      position: absolute;
      left: 250px;
      top: 50px;
    }
  }

  .btn:hover {
    color: #000;
  }
  .gradient-text {
    color: #14141f;
    background: linear-gradient(-45deg, #E250E5, #4B50E6, #E250E5, #4B50E6);
    background-size: 100% 100%;
    -webkit-background-clip: text;
    -webkit-text-stroke: 3px transparent;
  }
</style>

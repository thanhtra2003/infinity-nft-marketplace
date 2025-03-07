<script setup lang="ts">
  import { ref } from 'vue'

  const activeIndex = ref(0)

  const selectMenu = (index: number) => {
    activeIndex.value = index
  }
</script>

<template>
  <div>
    <div class="profile relative flex p-[40px] sm:grid sm:p-[20px]">
      <div class=" h-auto w-auto rounded-[20px]">
        <img src="https://themesflat.co/html/axiesv/assets/images/avatar/avt-author-tab.jpg" alt="">
      </div>
      <div class="ml-[31px] sm:mr-0 sm:ml-0 sm:pt-[20px]">
        <p class="font-display text-secondary text-lg leading-[28px] font-normal">Author Profile</p>
        <h1 class="text-4xl leading-[44px] font-bold capitalize">Trista Francis</h1>
        <p class="text-secondary mb-[24px] text-justify text-sm leading-[22px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
          deleniti asperiores sit.
        </p>
        <button class="text-product flex h-[36px] w-[190px] items-center justify-center rounded-[50px] bg-white">
          DdzFFzCqrhshMSx....
          <img src="/logo/file.svg" alt="" />
        </button>
      </div>
      <div class="mt-[28px] flex gap-[12px] sm:absolute sm:top-0 sm:right-[10px] sm:grid lg:flex-row-reverse">
        <div class="hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-white">
          <img src="/logo/fb.svg" alt="fb" class="fill-black" />
        </div>

        <div class="hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-white">
          <img src="/logo/twitter.svg" alt="twitter" class="fill-black hover:fill-white" />
        </div>
        <div class="hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-white">
          <img src="/logo/gg.svg" alt="gg" class="fill-black" />
        </div>
        <div class="hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-white">
          <img src="/logo/chat.svg" alt="chat" class="fill-black" />
        </div>
        <button
          class="h-[40px] w-[97px] rounded-[20px] border-2 text-sm leading-[22px] font-bold transition duration-500 ease-out hover:bg-white hover:text-black"
        >
          Follow
        </button>
      </div>
    </div>
    <div class="menu p-[24px] sm:p-[15px]">
      <ul class="ml-[414px] flex gap-[135px] uppercase sm:ml-0 sm:justify-center sm:gap-[30px] lg:ml-0 lg:justify-center lg:gap-[50px] xl:ml-0 xxl:ml-0 xxl:justify-center">
        <li
          v-for="(item, index) in ['All', 'Art', 'Music', 'Collectibles', 'Sports']"
          :key="index"
          @click="selectMenu(index)"
          class="relative cursor-pointer"
        >
          {{ item }}

          <img
            src="/logo/hover.svg"
            alt="hover"
            v-if="activeIndex === index"
            class="absolute top-full left-1/2 mt-[14px] -translate-x-1/2 sm:mt-[5px]"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .profile {
    border-radius: 12px 12px 0px 0px;
    background: rgba(57, 53, 53, 0.6);
  }
  .menu {
    border-radius: 0px 0px 12px 12px;
    background: var(--Background-second, #343444);
    li {
      color: var(--On-Surface, #fff);
      font-family: Urbanist;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
    }
  }
  .fill-black,
  fill-white {
    filter: brightness(0);
  }
  li {
    position: relative;
  }
  // @media screen and (max-width: 768px){
  //   li{
  //     font-size: 15px;
  //   }
  // }
</style>

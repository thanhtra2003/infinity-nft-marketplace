<script setup lang="ts">
  const peoples = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    text: `People ${i + 1}`,
    price: (Math.random() * 200).toFixed(2)
  }))
  const activeTab = ref('Bid History')

  const tabs = ['Bid History', 'Info', 'Provenance']
</script>
<template>
  <div class="mt-[80px] flex gap-[80px] sm:grid sm:grid-cols-1">
    <div class="relative h-[500px] w-[500px] rounded-[10px] bg-name overflow-hidden">
    <img
      src="https://themesflat.co/html/axiesv/assets/images/avatar/avt-author-tab.jpg"
      alt="loading"
      class="absolute top-0 left-0 h-full w-full object-cover"
    />
  </div>
    <div class="right">
      <h1 class="mb-[16px] text-4xl leading-[44px] font-bold capitalize">“The Fantasy Flower illustration ”</h1>
      <div class="mb-[24px] flex items-center justify-between">
        <div class="flex justify-between gap-[12px]">
          <button class="bg-items flex items-center justify-center gap-[6px] rounded-[40px] p-[12px] outline-0 hover:bg-[#26262f]">
            <img src="/logo/view.svg" alt="loading" />
            <p>100</p>
          </button>
          <button class="bg-items flex cursor-pointer items-center justify-center gap-[5px] rounded-[40px] p-[12px] hover:bg-[#26262f]">
            <img src="/logo/wislist.svg" alt="loading" />
            <p>100</p>
          </button>
        </div>
        <div class="flex gap-[12px]">
          <div class="bg-items flex h-[36px] w-[36px] items-center justify-center rounded-[50%] hover:bg-[#26262f] cursor-pointer">
            <img src="/logo/muiten.svg" alt="" />
          </div>
          <img src="/logo/cham.svg" alt="" class="cursor-pointer">
        </div>
      </div>
      <div class="flex gap-[30px] sm:grid sm:grid-cols-1">
        <div class="bg-items flex items-center gap-[12px] rounded-[16px] p-[12px]">
          <div class="bg-product h-[44px] w-[44px] rounded-[10px]"></div>
          <div>
            <h2 class="text-name text-[13px] leading-[20px] font-normal not-italic">Owned By</h2>
            <h1
              class="not-itali hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out"
            >
              Ralph Trà dfgh
            </h1>
          </div>
        </div>
        <div class="bg-items flex items-center gap-[12px] rounded-[16px] p-[12px]">
          <div class="bg-product h-[44px] w-[44px] rounded-[10px]"></div>
          <div>
            <h2 class="text-name text-[13px] leading-[20px] font-normal not-italic">Owned By</h2>
            <h1
              class="not-itali hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out"
            >
              Ralph Trà dfgh
            </h1>
          </div>
        </div>
      </div>
      <div>
        <p class="mt-[16px] mb-[20px] text-justify text-sm leading-[22px] font-normal">
          Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna
          amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget.
          Facilisi lobortisal morbi fringilla urna amet sed ipsum
        </p>
      </div>

      <div class="bg-product mt-[20px] flex h-[50px] w-[295px] items-center justify-center gap-[20px] rounded-[8px]">
        <p class="text-[15px] leading-[26px] font-semibold">Current Price</p>
        <div>
          <span class="text-lg leading-[26px] font-bold">4.89 ETH</span>&nbsp;
          <span class="text-[13px] leading-[20px] font-normal">= $12.246</span>
        </div>
      </div>
      <div>
        <BaseButton icon="cart" text="Buy Now" class="mt-[32px] mb-[32px] w-full justify-center cursor-pointer border-white border-2"></BaseButton>
      </div>
      <div>
        <div class="border-line mb-[21px] flex gap-[50px] border-b">
          <h2
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="cursor-pointer text-[15px] leading-[26px] font-semibold"
            :class="{
              'text-primary border-primary border-b-2': activeTab === tab,
              'text-white': activeTab !== tab
            }"
          >
            {{ tab }}
          </h2>
        </div>
        <div class="grid h-[178px] overflow-x-auto pr-[60px]">
          <div class="flex" v-for="people in peoples" :key="people.id">
            <div class="">
              <div class="image-placeholder bg-product relative mr-[12px] h-[44px] w-[44px] cursor-pointer rounded-[10px]">
                <div
                  class="bg-primary absolute top-[32px] left-[32px] flex h-[12px] w-[12px] items-center justify-center rounded-[50%]"
                >
                  <img src="/logo/check.svg" alt="check" />
                </div>
              </div>
            </div>
            <div class="border-line flex w-full justify-between border-b pb-[14px]">
              <div>
                <span
                  class="hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out"
                  >Mason Woodward</span
                >&nbsp;<span class="text-[13px] leading-[20px] font-normal">place a bid</span>
                <p class="text-[13px] leading-[20px] font-normal">8 hours ago</p>
              </div>
              <h2>
                <span class="text-[14px] leading-[22px] font-bold">4.89 ETH</span><br /><span
                  class="text-[13px] leading-[20px] font-normal"
                  >= $12.246</span
                >
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #2b2b3d;
    border-radius: 10px;
  }


  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }
</style>

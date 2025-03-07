<script setup lang="ts">
  // import CardItem from '@/components/card/CardItem.vue'
</script>

<template>
  <div class="mb-[80px] flex grid-cols-1 gap-[80px] sm:grid lg:grid">
    <div>
      <h1 class="mb-[20px] text-[20px] leading-[26px] font-bold">Preview item</h1>
      <div
        class="bg-items h-[504px] w-[330px] rounded-[20px] p-[20px] transition-all duration-300 ease-in-out hover:-translate-y-2 sm:h-[450px] sm:w-[280px] sm:p-[15px] lg:h-[504px] lg:w-[330px] lg:p-[20px]"
      >
        <div
          class="bg-product relative flex h-[290px] w-[290px] cursor-pointer items-center justify-center rounded-[20px] sm:h-[230px] sm:w-[250px] lg:h-[290px] lg:w-[290px]"
        >
          <button
            class="absolute top-[14px] left-[214px] flex h-[28px] w-[64px] cursor-pointer items-center justify-center gap-[5px] rounded-[10px] bg-black sm:left-[180px] sm:h-[24px] sm:w-[58px] lg:left-[214px] lg:h-[28px] lg:w-[64px]"
          >
            <img src="/logo/wislist.svg" alt="loading" class="sm:w-[14px] lg:w-[16px]" />
            <p class="sm:text-[12px] lg:text-[14px]">100</p>
          </button>
        </div>

        <div class="mt-[20px]">
          <div class="mb-[17px] flex justify-between">
            <h2
              class="hover:text-primary cursor-pointer text-lg leading-[26px] font-bold text-white capitalize transition duration-700 ease-in-out sm:text-[16px] sm:leading-[22px]"
            >
              Name Product
            </h2>
            <button
              class="bg-primary h-[24px] w-[49px] rounded-[10px] text-xs font-bold tracking-[1.2px] text-white uppercase sm:h-[22px] sm:w-[45px] sm:text-[10px]"
            >
              BSC
            </button>
          </div>

          <div class="mb-[20px] flex justify-between">
            <div class="flex gap-[12px]">
              <div class="bg-product h-[44px] w-[44px] rounded-[15px] sm:h-[38px] sm:w-[38px]"></div>
              <div>
                <p class="text-name text-[13px] leading-[20px] font-normal sm:text-[12px]">Owned By</p>
                <h3
                  class="hover:text-primary cursor-pointer text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out sm:text-[14px] sm:leading-[20px]"
                >
                  Thanh Trà
                </h3>
              </div>
            </div>
            <div>
              <p class="text-name text-[13px] leading-[20px] font-normal sm:text-[12px]">Price</p>
              <h3 class="text-[18px] leading-[26px] font-bold sm:text-[16px] sm:leading-[22px]">4.87 BNB</h3>
            </div>
          </div>

          <div class="mt-[20px] flex items-center justify-between">
            <BaseButton
              icon="cart"
              text="Buy Now"
              class="cursor-pointer !p-[10px] hover:bg-white hover:text-black sm:!p-[8px] sm:text-[14px]"
            ></BaseButton>
            <div class="flex cursor-pointer gap-2 transition duration-500 ease-in-out">
              <img src="/logo/change.svg" alt="loading" class="sm:w-[14px] lg:w-[16px]" />
              <p
                class="text-name hover:text-primary text-[18px] leading-[26px] font-bold transition duration-500 ease-in-out sm:text-[15px] sm:leading-[22px]"
              >
                View History
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-full">
      <h1 class="mb-[20px] text-[20px] leading-[26px] font-bold">Upload file</h1>
      <div class="relative">
        <input
          type="text"
          placeholder="PNG, JPG, GIF, WEBP or MP4. Max 200mb."
          class="border-items w-full rounded-[8px] border p-[40px]"
        />
        <button
          class="absolute top-[27px] right-[60px] h-[48px] w-[152px] rounded-full border-2 text-sm leading-[22px] font-bold hover:bg-white hover:text-black"
        >
          Upload File
        </button>
      </div>
      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Select method</h1>
      <div class="flex items-center justify-between gap-[6px]">
        <BaseButtonText
          icon="fix"
          text="Fixed price"
          class="hover:!text-primary flex h-[46px] w-[320px] items-center justify-center !rounded-[8px]"
        ></BaseButtonText>
      </div>
      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Price</h1>
      <input type="text" placeholder="Enter price " class="border-items w-full rounded-[8px] border p-[12px]" />

      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Title</h1>
      <input type="text" placeholder="Item Name" class="border-items w-full rounded-[8px] border p-[12px]" />

      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Description</h1>
      <textarea
        placeholder="e.g. “This is very limited item”"
        class="border-items w-full rounded-[8px] border pt-[12px] pl-[20px]"
      ></textarea>
      <div>
        <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Royalties</h1>
        <input
          type="text"
          placeholder="5%"
          class="border-items h-[46px] w-[320px] rounded-[8px] border p-[12px] sm:w-[200px] lg:w-full"
        />
      </div>

      <div>
        <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Collection</h1>
        <!-- <input type="text" placeholder="5%" class="border-items h-[46px] w-[320px] rounded-[8px] border p-[12px]" /> -->
        <select
          class="border-items font-display text-name h-[46px] w-[320px] rounded-[8px] border p-[12px] sm:w-[210px] lg:w-full"
        >
          <option disabled selected hidden>Abstraction</option>
          <option value="art">Art</option>
          <option value="music">Music</option>
          <option value="domain">Domain Names</option>
          <option value="virtual">Virtual World</option>
          <option value="card">Trading Cards</option>
          <option value="sports">Sports</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .relative:hover button {
    background-color: #fff;
    border: none;
    color: blue;
    transition: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  option {
    color: white;
    background: #14141f;
    border-bottom: blue;
  }
  input::placeholder {
    color: #8a8aa0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
</style>

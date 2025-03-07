<script setup lang="ts">
  import CardItem from '@/components/card/CardItem.vue'
</script>

<template>
  <div class="mb-[80px] flex grid-cols-1 gap-[80px] sm:grid lg:grid">
    <div>
      <h1 class="mb-[20px] text-[20px] leading-[26px] font-bold">Preview item</h1>
      <CardItem class="sm:m-auto lg:m-auto"></CardItem>
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
        <BaseButton
          icon="fix"
          text="Fixed price"
          class="hover:!text-primary flex h-[46px] w-[320px] items-center justify-center !rounded-[8px]"
        ></BaseButton>
        <BaseButton
          icon="time"
          text="FTime auctions"
          class="hover:!text-primary flex h-[46px] w-[320px] items-center justify-center !rounded-[8px]"
        ></BaseButton>
        <BaseButton
          icon="group"
          text="Open for bids"
          class="items-center] hover:!text-primary flex h-[46px] w-[320px] justify-center !rounded-[8px]"
        ></BaseButton>
      </div>
      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Price</h1>
      <input type="text" placeholder="Enter price for one item (ETH)" class="border-items w-full rounded-[8px] border p-[12px]" />

      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Title</h1>
      <input type="text" placeholder="Item Name" class="border-items w-full rounded-[8px] border p-[12px]" />

      <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Description</h1>
      <textarea
        placeholder="e.g. “This is very limited item”"
        class="border-items w-full rounded-[8px] border pt-[12px] pl-[20px]"
      ></textarea>
      <div class="flex justify-between sm:w-full lg:grid lg:grid-cols-1 lg:grid-rows-3 ">
        <div>
          <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Royalties</h1>
          <input
            type="text"
            placeholder="5%"
            class="border-items h-[46px] w-[320px] rounded-[8px] border p-[12px] sm:w-[200px] lg:w-full"
          />
        </div>
        <div>
          <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Size</h1>
          <input
            type="text"
            placeholder="e.g. “size”"
            class="border-items h-[46px] w-[320px] rounded-[8px] border p-[12px] sm:w-[200px] lg:w-full"
          />
        </div>
        <div>
          <h1 class="mt-[24px] mb-[20px] text-[20px] leading-[26px] font-bold">Collection</h1>
          <!-- <input type="text" placeholder="5%" class="border-items h-[46px] w-[320px] rounded-[8px] border p-[12px]" /> -->
          <select class="border-items font-display text-name h-[46px] w-[320px] rounded-[8px] border p-[12px] sm:w-[210px] lg:w-full">
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

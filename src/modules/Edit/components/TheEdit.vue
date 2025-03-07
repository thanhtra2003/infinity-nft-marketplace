<script setup lang="ts"></script>
<template>
  <div class="mb-[80px] flex gap-[80px] sm:grid sm:w-full sm:grid-cols-1 lg:grid lg:grid-cols-1 xl:gap-[40px] ">
    <div class="bg-items h-[462px] w-[330px] rounded-[20px] p-[20px] sm:w-full lg:m-auto ">
      <div class="bg-product flex h-[290px] w-[290px] cursor-pointer items-center justify-center rounded-[20px] sm:w-full"></div>
      <div class="">
        <button
          class="border-primary mt-[20px] flex h-[48px] w-full cursor-pointer items-center justify-center rounded-full border-2 text-[14px] leading-[22px] font-bold capitalize transition duration-500 ease-in-out hover:border-none hover:bg-white hover:text-black"
        >
          Upload New Photo
        </button>
        <button
          class="border-primary mt-[16px] flex h-[48px] w-full cursor-pointer items-center justify-center rounded-full border-2 text-[14px] leading-[22px] font-bold capitalize transition duration-500 ease-in-out hover:border-none hover:bg-white hover:text-black"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="xl:max-w-[600px] xxl:max-w-[750px]">
      <h1 class="mb-[20px] text-[20px] leading-[26px] font-bold">Choice your Cover image</h1>
      <div class="flex justify-between gap-y-[15px] sm:grid sm:w-full sm:grid-cols-1 sm:grid-rows-2 lg:gap-[10px] xl:gap-[20px] xxl:gap-[20px] ">
        <div class="border-items flex h-[102px] w-[320px] items-center justify-center rounded-[8px] border sm:w-full">
          <button
            class="h-[48px] w-[152px] rounded-full border-2 text-sm leading-[22px] font-bold transition duration-500 ease-in-out hover:bg-white hover:text-black"
          >
            Upload File
          </button>
        </div>
        <div
          class="h-[102px] w-[320px] rounded-[8px] p-[3px] sm:w-full"
          style="background: linear-gradient(216.56deg, #e250e5 5.32%, #4b50e6 94.32%)"
        >
          <div class="bg-name h-full w-full rounded-[8px]"></div>
        </div>
        <div
          class="h-[102px] w-[320px] rounded-[8px] p-[2px] sm:w-full"
          style="background: linear-gradient(216.56deg, #e250e5 5.32%, #4b50e6 94.32%)"
        >
          <div class="bg-name h-full w-full rounded-[8px]"></div>
        </div>
      </div>
      <div class="flex gap-[40px] sm:grid lg:mt-[20px]">
        <div class="w-full">
          <h1 class="mb-[20px] text-[20px] leading-[26px] font-bold sm:mt-[30px]">Account info</h1>
          <label class="font-display text-sm leading-[22px] font-normal" for="">Display name</label>
          <input type="text" placeholder="Trista Francis" class="border-items w-full rounded-[8px] border p-[12px]" />
          <label class="font-display text-sm leading-[22px] font-normal">Custom URL</label>
          <input type="text" placeholder="Axies.Trista Francis.com/" class="border-items w-full rounded-[8px] border p-[12px]" />
          <label class="font-display text-sm leading-[22px] font-normal">Email</label>
          <input type="text" placeholder="Enter your email" class="border-items w-full rounded-[8px] border p-[12px]" />
          <label for="bio" class="font-display text-sm leading-[22px] font-normal">Bio</label>
          <textarea class="border-items w-full rounded-[8px] border pt-[12px] pl-[20px]"></textarea>
        </div>
        <div class="w-full">
          <h1 class="mb-[20px] text-[20px] leading-[26px] font-bold">Your Social media</h1>
          <label class="font-display text-sm leading-[22px] font-normal">Facebook</label>
          <input type="text" placeholder="Facebook username" class="border-items w-full rounded-[8px] border p-[12px]" />
          <BaseButton
            icon="fb"
            text="Connect to face book"
            class="!bg-primary !mb-[24px] h-[40px] w-[219px] !border-none !text-white hover:!bg-[#292376]"
          ></BaseButton>
          <label class="font-display text-sm leading-[22px] font-normal">Twitter</label>
          <input type="text" placeholder="Twitter username" class="border-items w-full rounded-[8px] border p-[12px]" />
          <BaseButton
            icon="twitter"
            text="Connect to Twitter"
            class="!bg-primary !mb-[24px] h-[40px] w-[219px] !border-none !text-white hover:!bg-[#292376]"
          ></BaseButton>
          <label class="font-display text-sm leading-[22px] font-normal">Discord</label>
          <input type="text" placeholder="Discord username" class="border-items w-full rounded-[8px] border p-[12px]" />
          <BaseButton
            icon="discord"
            text="Connect to Discord"
            class="!bg-primary !mb-[24px] h-[40px] w-[219px] !border-none !text-white hover:!bg-[#292376]"
          ></BaseButton>
        </div>
      </div>
      <button
        class="h-[48px] w-[152px] rounded-full border text-sm leading-[22px] font-bold transition duration-500 ease-in-out hover:bg-white hover:text-black"
      >
        Update Profile
      </button>
    </div>
  </div>
</template>
<style scoped>
  input {
    margin-bottom: 24px;
  }
  input::placeholder {
    color: var(--Secondary---white, #7a798a);

    /* Caption 01 */
    font-family: Urbanist;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
</style>

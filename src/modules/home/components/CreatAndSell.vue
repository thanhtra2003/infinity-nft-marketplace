<script setup lang="ts"></script>

<template>
  <div>
    <div class="mt-[80px] mb-[38px]">
      <h2 class="title mb-[40px] text-left text-4xl leading-[44px] font-bold capitalize">Create and sell your NFTs</h2>
      <div class="flex gap-[39px] sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:gap-y-[20px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-[20px] lg:gap-x-[20px] lg:grid">
        <div class="content">
          <img src="/logo/wallet.svg" alt="" />
          <h3
            class="hover:text-primary mt-[28px] mb-[10px] cursor-pointer text-[24px] leading-[30px] font-bold capitalize transition duration-300 ease-linear"
          >
            Set up your wallet
          </h3>
          <p class="text-justify text-[14px] leading-[22px] font-normal">
            Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually
            set up to buy an NFT.
          </p>
        </div>
        <div class="content">
          <img src="/logo/app.svg" alt="" />
          <h3
            class="hover:text-primary mt-[28px] mb-[10px] cursor-pointer text-[24px] leading-[30px] font-bold capitalize transition duration-300 ease-linear"
          >
            Create your collection
          </h3>
          <p class="text-justify text-[14px] leading-[22px] font-normal">
            Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first
            collection
          </p>
        </div>
        <div class="content">
          <img src="/logo/img.svg" alt="" />
          <h3
            class="hover:text-primary mt-[28px] mb-[10px] cursor-pointer text-[24px] leading-[30px] font-bold capitalize transition duration-300 ease-linear"
          >
            Add your NFTs
          </h3>
          <p class="text-justify text-[14px] leading-[22px] font-normal">
            Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
          </p>
        </div>
        <div class="content">
          <img src="/logo/save.svg" alt="" />
          <h3
            class="hover:text-primary mt-[28px] mb-[10px] cursor-pointer text-[24px] leading-[30px] font-bold capitalize transition duration-300 ease-linear"
          >
            List them for sale
          </h3>
          <p class="text-justify text-[14px] leading-[22px] font-normal">
            Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your
            NFTs!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
  img {
    transition: transform 0.8s ease-in-out;
  }
  .content:hover img {
    transform: rotateY(360deg);
  }
</style>

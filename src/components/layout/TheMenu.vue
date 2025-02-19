<template>
  <header class="border-b-1" style="border-color: #8a8aa0">
    <div class="container">
      <div class="menu flex w-full items-center justify-between">
        <div class="logo mr-60.5 flex w-7.5 items-center">
          <img src="/logo/logo.svg" alt="loading" class="mr-2.5" />
          <h1 class="text-[36px] leading-[56px] font-bold">Axies</h1>
        </div>

        <div class="menu-main mr-26.25">
          <ul class="flex gap-10 text-[18px] leading-[26px] font-bold">
            <RouterLink to="/">Home</RouterLink>
            <router-link to="/explorer">Explore</router-link>
            <!-- <li>Activity</li> -->
             <router-link to="/detail">Activity</router-link>
            <li>Community</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="search flex items-center">
          <img src="/logo/search.svg" alt="loading" class="h-5 w-5" />
          <BaseButton icon="wallet" text="Wallet connect" class="ml-9 text-white"></BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/base/button/BaseButton.vue'
</script>

<style scoped lang="scss">
  .menu {
    height: 80px;
  }
  .logo {
    height: 41px;
    width: 30px;
    // margin-right: 242px;
  }
</style>

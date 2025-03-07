<script setup lang="ts">
  import BaseButton from '@/components/base/button/BaseButton.vue'

  const isShow = ref(false)
  const toggleSearch = () => {
    isShow.value = !isShow.value
  }
  const open = ref(false)
  const toggleMenu = () => {
    open.value = !open.value
  }
</script>

<template>
  <header class=" border-b-1" style="border-color: #8a8aa0">
    <div class="container">
      <div class="menu flex w-full items-center justify-between">
        <div class="logo flex w-7.5 items-center">
          <img src="/logo/logo.svg" alt="loading" class="mr-2.5" />
          <h1 class="text-[36px] leading-[56px] font-bold">Axies</h1>
        </div>
        <div class="menu-main">
          <ul
            :class="open ? 'visible left-0 opacity-100' : 'sm:hidden lg:hidden'"
            class="flex gap-10 text-[18px] leading-[26px] font-bold sm:absolute lg:absolute sm:top-[80px] lg:top-[80px]  lg:right-0  sm:left-0 lg:z-[1] sm:z-[1] lg:w-full sm:w-full lg:flex-col sm:flex-col sm:gap-0 lg:gap-0 sm:bg-black lg:bg-black sm:text-[16px] lg:text-[16px] sm:font-normal sm:text-white lg:font-normal lg:text-white"
          >
            <RouterLink to="/" class="sm:p-[15px] sm:pl-[20px] lg:p-[15px] lg:pl-[20px]">Home</RouterLink>
            <router-link to="/explorer" class="sm:p-[15px] sm:pl-[20px] lg:p-[15px] lg:pl-[20px]">Explore</router-link>
            <router-link to="/create" class="sm:p-[15px] sm:pl-[20px] lg:p-[15px] lg:pl-[20px]">Activity</router-link>
            <router-link to="/create" class="sm:p-[15px] sm:pl-[20px] lg:p-[15px] lg:pl-[20px]">Community</router-link>
            <router-link to="/author" class="sm:p-[15px] sm:pl-[20px] lg:p-[15px] lg:pl-[20px]">Pages</router-link>
            <router-link to="/edit" class="sm:p-[15px] sm:pl-[20px] lg:p-[15px] lg:pl-[20px]">Contact</router-link>
          </ul>
        </div>
        <div class="search flex items-center">
          <div class="relative">
            <img @click="toggleSearch" src="/logo/search.svg" alt="loading" class="h-5 w-5 cursor-pointer" />
            <transition name="fade">
              <div class="absolute top-[50px] right-[-16px] sm:z-[1] lg:z-[1]" v-show="isShow">
                <img
                  src="/logo/search.svg"
                  alt="loading"
                  class="absolute top-[15px] right-[10px] h-5 w-5 cursor-pointer brightness-0"
                />
                <input
                  type="search"
                  placeholder="Search..."
                  class="w-[250px] rounded-[30px] border bg-white p-[15px] text-black outline-none"
                />
              </div>
            </transition>
          </div>
          <BaseButton icon="wallet" text="Wallet connect" class="ml-9 text-white "></BaseButton>
        </div>
        <div @click="toggleMenu" class="hidden cursor-pointer p-2 sm:block lg:block">
          <img v-if="!open" src="/logo/bars.svg" alt="Menu" class="h-6 w-6 filter brightness-0 invert" />
          <img v-else src="/logo/closeMenu.svg" alt="Close" class="h-6 w-6 filter brightness-0 invert" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @media screen and (max-width: 767px) {
    a {
      border-bottom: 1px solid rgba(138, 138, 160, 0.3);
    }
    a:last-child {
      border-bottom: 0;
    }
  }
  @media screen and (max-width: 1023px) {
    a {
      border-bottom: 1px solid rgba(138, 138, 160, 0.3);
    }
    a:last-child {
      border-bottom: 0;
    }
  }

  header {
    background: url(https://themesflat.co/html/axiesv/assets/images/backgroup-secsion/img_bg_page_title_dark.jpg);
    background-size: cover;
  }
  .menu {
    height: 80px;
  }
  ::placeholder {
    color: black;
  }
  .logo {
    height: 41px;
    width: 30px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

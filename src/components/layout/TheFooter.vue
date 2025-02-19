<script setup lang="ts"></script>

<template>
  <footer  class="bg-footer">
    <div class="container">
      <div class="flex justify-between pt-[98px] pb-[78px]">
        <div>
          <div class="mb-[12px] flex items-center gap-[12px]">
            <img src="/logo/logo.svg" alt="loading" />
            <h2 class="text-[36px] leading-[56px] font-bold capitalize">Axies</h2>
          </div>
          <p class="w-[242px]">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
          </p>
          <div class="mt-[28px] flex gap-[12px]">
            <div class="bg-items flex h-[40px] w-[40px] items-center justify-center rounded-[8px]">
              <img src="/logo/fb.svg" alt="" />
            </div>
            <div class="bg-items flex h-[40px] w-[40px] items-center justify-center rounded-[8px]">
              <img src="/logo/twitter.svg" alt="" />
            </div>
            <div class="bg-items flex h-[40px] w-[40px] items-center justify-center rounded-[8px]">
              <img src="/logo/gg.svg" alt="" />
            </div>
            <div class="bg-items flex h-[40px] w-[40px] items-center justify-center rounded-[8px]">
              <img src="/logo/chat.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="">
          <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">My Account</h2>
          <ul>
            <li>Authors</li>
            <li>Collection</li>
            <li>Author Profile</li>
            <li>Create Collection</li>
          </ul>
        </div>
        <div class="">
          <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">Resources</h2>
          <ul>
            <li>Help & Support</li>
            <li>Live Auctions</li>
            <li>Item Details</li>
            <li>Activity</li>
          </ul>
        </div>
        <div class="">
          <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">Company</h2>
          <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>Our Blog</li>
            <li>Discover</li>
          </ul>
        </div>
        <div class="">
          <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">Subscribe Us</h2>
          <div class="relative">
            <input
              type="text"
              class="border-primary h-[56px] w-[311px] rounded-[10px] border p-[17px]"
              placeholder="Info@yourgmail.com"
            />
            <div
              class="bg-primary absolute top-[0px] left-[251px] flex h-[56px] w-[60px] items-center justify-center rounded-r-lg"
            >
              <img src="/logo/arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="css">
  li {
    margin-bottom: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }
  input::placeholder {
    font-style: italic;
    color: #8a8aa0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
</style>

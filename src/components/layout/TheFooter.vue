<script setup lang="ts"></script>

<template>
  <footer class="bg-footer mt-[80px]">
    <div class="container">
      <div class="flex gap-[147px] pt-[98px] pb-[78px] sm:grid grid-cols-1 sm:grid-rows-2 sm:gap-0 lg:gap-[30px]">
        <div>
          <div class="mb-[12px] flex items-center gap-[12px]">
            <img src="/logo/logo.svg" alt="loading" />
            <h2 class="text-[36px] leading-[56px] font-bold capitalize">Axies</h2>
          </div>
          <p class="w-[242px]">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
          </p>
          <div class="mt-[28px] flex gap-[12px]">
            <div class="bg-items hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] transition">
              <img src="/logo/fb.svg" alt="" />
            </div>
            <div class="bg-items hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] transition">
              <img src="/logo/twitter.svg" alt="" />
            </div>
            <div class="bg-items hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] transition">
              <img src="/logo/gg.svg" alt="" />
            </div>
            <div class="bg-items hover:bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-[8px] transition">
              <img src="/logo/chat.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="flex gap-[145px] sm:grid grid-cols-2 sm:grid-rows-2 sm:gap-0 sm:gap-y-[20px] lg:gap-[20px]">
          <div>
            <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">My Account</h2>
            <ul>
              <li><a>Authors</a></li>
              <li><a>Collection</a></li>
              <li><a>Author Profile</a></li>
              <li><a>Create Collection</a></li>
            </ul>
          </div>
          <div>
            <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">Resources</h2>
            <ul>
              <li><a>Help & Support</a></li>
              <li><a>Live Auctions</a></li>
              <li><a>Item Details</a></li>
              <li><a>Activity</a></li>
            </ul>
          </div>
          <div>
            <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">Company</h2>
            <ul>
              <li><a>About Us</a></li>
              <li><a>About Us</a></li>
              <li><a>Our Blog</a></li>
              <li><a>Discover</a></li>
            </ul>
          </div>
          <div>
            <h2 class="mb-[24px] text-[18px] leading-[26px] font-bold">Subscribe Us</h2>
            <div class="relative">
              <input
                type="text"
                class="border-primary h-[56px] w-[311px] rounded-[10px] border p-[17px] lg:w-[200px]"
                placeholder="Info@yourgmail.com"
              />
              <div
                class="bg-primary absolute top-[0px] left-[251px] lg:left-[150px] flex h-[56px] w-[60px] items-center justify-center rounded-r-lg"
              >
                <img src="/logo/arrow.svg" alt="" />
              </div>
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
    transition: all 0.3s ease-in-out;
    letter-spacing: 0.1px;
  }

  a:hover {
    color: blue;
    transition: 0.3s;
    text-decoration: underline;
  }
  input::placeholder {
    font-style: italic;
    color: #8a8aa0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
</style>

<script setup lang="ts">
  import CardItem from '@/components/card/CardItem.vue'

  const isShow = ref(true)
  const categories = ref(true)
  const chains = ref(true)
  const collectibles = ref(true)
</script>

<template>
  <div class="mt-[80px] mb-[80px] flex justify-between">
    <div>
      <div class="flex">
        <div>
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Status</h2>
          <div class="flex" v-show="isShow">
            <div class="mr-[8px] grid">
              <input type="checkbox" id="buy" value="Buy" />
              <input type="checkbox" id="auctions" value="Auctions" />
              <input type="checkbox" id="offers" value="Offers" />
            </div>
            <div class="leading-[20px]` grid text-[13px] font-normal">
              <label for="buy">Buy Now</label>
              <label for="auctions">On Auctions</label>
              <label for="offers">Has Offers</label>
            </div>
          </div>
        </div>
        <div @click="isShow = !isShow" class="ml-[162px]">
          <img src="/logo/an.svg" alt="an" />
        </div>
      </div>
      <hr style="color: #343444; margin: 24px 0" />
      <div class="flex">
        <div>
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Categories</h2>
          <div class="flex" v-show="categories">
            <div class="mr-[8px] grid">
              <input type="checkbox" id="Art" value="Art" />
              <input type="checkbox" id="Music" value="Music" />
              <input type="checkbox" id="Names" value="Names" />
              <input type="checkbox" id="Virtual" value="Virtual" />
              <input type="checkbox" value="Cards" id="Cards" />
              <input type="checkbox" id="Collectibles" value="Collectinles" />
              <input type="checkbox" id="Sports" value="Sports" />
              <input type="checkbox" id="Utility" value="Utility" />
            </div>
            <div class="leading-[20px]` grid text-[13px] font-normal">
              <label for="Art">Art</label>
              <label for="Music">Music</label>
              <label for="Names">Domain Names</label>
              <label for="Virtual">Virtual Worlds</label>
              <label for="Cards">Trading Cards</label>
              <label for="Collectibles">Collectibles</label>
              <label for="Sports">Sports</label>
              <label for="Utility">Utility</label>
            </div>
          </div>
        </div>
        <div @click="categories = !categories" class="ml-[144px]">
          <img src="/logo/an.svg" alt="an" />
        </div>
      </div>
      <hr style="color: #343444; margin: 24px 0" />
      <div class="flex">
        <div>
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Chains</h2>
          <div class="flex" v-show="chains">
            <div class="mr-[8px] grid">
              <input type="checkbox" id="Ethereum" value="Ethereum" />
              <input type="checkbox" id="Polygon" value="Polygon" />
              <input type="checkbox" id="Klaytn" value="Klaytn" />
            </div>
            <div class="leading-[20px]` grid text-[13px] font-normal">
              <label for="Ethereum">Ethereum</label>
              <label for="Polygon">Polygon</label>
              <label for="Klaytn">Klaytn</label>
            </div>
          </div>
        </div>
        <div @click="chains = !chains" class="ml-[176px]">
          <img src="/logo/an.svg" alt="an" />
        </div>
      </div>
      <hr style="color: #343444; margin: 24px 0" />
      <div class="flex">
        <div>
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Collections</h2>
          <div class="flex" v-show="collectibles">
            <div class="mr-[8px] grid">
              <input type="checkbox" id="Abstraction" value="Abstraction" />
              <input type="checkbox" id="Pattern" value="Pattern" />
              <input type="checkbox" id="Ske" value="Ske" />
              <input type="checkbox" id="Car" value="Car" />
              <input type="checkbox" id="Virtuland" value="Virtuland" />
              <input type="checkbox" id="Paper" value="Paper" />
            </div>
            <div class="leading-[20px]` grid text-[13px] font-normal">
              <label for="Abstraction">Abstraction</label>
              <label for="Pattern">Patternlicious</label>
              <label for="Ske">Skecthify</label>
              <label for="Car">Cartoonism</label>
              <label for="Virtuland">Virtuland</label>
              <label for="Paper">Papercut</label>
            </div>
          </div>
        </div>
        <div @click="collectibles = !collectibles" class="ml-[154px]">
          <img src="/logo/an.svg" alt="an" />
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-1 gap-x-[30px] gap-y-[40px] md:grid-cols-3">
        <CardItem></CardItem>
      </div>
     <button class="border m-auto flex items-center justify-center w-[154px] h-[54px] rounded-[30px] text-[15px] leading-[22px] font-bold hover:bg-white hover:text-black cursor-pointer">Load More</button>

    </div>
  </div>
</template>

<style scoped lang="scss">
  label,
  input {
    margin-bottom: 8px;
  }
</style>

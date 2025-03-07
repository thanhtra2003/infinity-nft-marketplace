<script setup lang="ts">
  // import CartItemAuthor from '@/components/card/CartItemAuthor.vue'
import CardItem from '@/components/card/CardItem.vue'
  // const products = Array.from({ length: 8 }, (_, i) => ({
  //   id: i + 1,
  //   name: `product ${i + 1}`,
  //   text: `Hello Việt Nam ${i + 1}`,
  //   price: (Math.random() * 200).toFixed(2)
  // }))
  const products = [
    { id: 1, name: 'Laptop', owner: 'Thanh Trà', baseButtonType: 'Off Market' },
    { id: 2, name: 'Smartphone', owner: 'Thanh Trà', baseButtonType: 'Buy Now' },
    { id: 3, name: 'Tablet', owner: 'Thanh Trà', baseButtonType: 'Buy Now' },
    { id: 4, name: 'Headphones', owner: 'Thanh Trà', baseButtonType: 'List for sale' },
    { id: 5, name: 'Camera', owner: 'Hiếu Thứ Hai', baseButtonType: 'Off Market' },
    { id: 6, name: 'Keyboard', owner: 'Bạch Kính Đình', baseButtonType: 'Remove from Sale' },
    { id: 7, name: 'Mouse', owner: 'Tang Diên', baseButtonType: 'List for sale' },
    { id: 8, name: 'Smartwatch', owner: 'Anh Jack', baseButtonType: 'Remove from Sale' },
    { id: 9, name: 'Monitor', owner: 'Ôn Dĩ Phàm', baseButtonType: 'Buy now' },
    { id: 10, name: 'Speaker', owner: 'Sơn Tùng', baseButtonType: 'List for sale' }
  ]
  const isShow = ref(true)
  const categories = ref(true)
  const chains = ref(true)
  const collectibles = ref(true)
</script>

<template>
  <div class="mt-[80px] flex justify-between lg:grid">
    <div class="sm:flex sm:justify-between lg:mb-[40px]">
      <div>
        <div class="flex justify-between">
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Status</h2>
          <div @click="isShow = !isShow" class="cursor-pointer transition-transform duration-300">
            <img src="/logo/an.svg" alt="an" />
          </div>
        </div>
        <transition name="fade">
          <div v-show="isShow" class="flex overflow-hidden transition-all duration-500 ease-in-out">
            <div class="mr-[8px] grid">
              <input type="checkbox" id="buy" value="Buy" />

            </div>
            <div class="grid text-[13px] leading-[20px] font-normal">
              <label for="buy">Buy Now</label>

            </div>
          </div>
        </transition>
      </div>
      <hr style="color: #343444; margin: 24px 0" class="sm:hidden" />
      <div>
        <div class="flex justify-between">
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Categories</h2>

          <div @click="categories = !categories" class="cursor-pointer transition-transform duration-300">
            <img src="/logo/an.svg" alt="an" />
          </div>
        </div>
        <Transition name="fade">
          <div class="flex overflow-hidden transition-all duration-500 ease-in-out" v-show="categories">
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
        </Transition>
      </div>
      <hr style="color: #343444; margin: 24px 0" class="sm:hidden"/>
      <div>
        <div class="flex justify-between">
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Chains</h2>

          <div @click="chains = !chains" class="cursor-pointer transition-transform duration-300">
            <img src="/logo/an.svg" alt="an" />
          </div>
        </div>
        <Transition name="fade">
          <div class="flex overflow-hidden transition-all duration-500 ease-in-out" v-show="chains">
            <div class="mr-[8px] grid">
              <input type="checkbox" id="bnb" value="bnb" />

            </div>
            <div class="leading-[20px]` grid text-[13px] font-normal">
              <label for="bnb">BNB Smart Chain</label>

            </div>
          </div>
        </Transition>
      </div>
      <hr style="color: #343444; margin: 24px 0" class="sm:hidden"/>
      <div>
        <div class="flex justify-between">
          <h2 class="mb-[10px] text-[20px] leading-[26px] font-bold">Collections</h2>
          <div @click="collectibles = !collectibles" class="cursor-pointer transition-transform duration-300">
            <img src="/logo/an.svg" alt="an" />
          </div>
        </div>
        <Transition name="fade">
          <div class="flex overflow-hidden transition-all duration-500 ease-in-out" v-show="collectibles">
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
        </Transition>
      </div>
    </div>
    <div>
      <div>
        <div
          class="mb-[40px] grid grid-cols-3 grid-rows-2 gap-x-[30px] gap-y-[40px] xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
        <CardItem v-for="item in products.slice(0, 6)" :key="item.id" v-bind="item" />
        </div>
      </div>
      <button
        class="m-auto mt-[40px] flex h-[54px] w-[154px] cursor-pointer items-center justify-center rounded-[30px] border-2 text-[15px] leading-[22px] font-bold transition duration-500 ease-in-out hover:bg-white hover:text-black"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  label {
    margin-bottom: 8px;
    cursor: pointer;
  }
  input {
    margin-bottom: 8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px blue;
    background: transparent;
  }
  h2,
  img {
    cursor: pointer;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition:
      max-height 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    max-height: 0;
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave-from {
    max-height: 100px;
    opacity: 1;
  }
</style>

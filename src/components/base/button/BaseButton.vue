<!-- <template>
  <button
    class="flex items-center gap-2 rounded-[30px] border-2 border-solid border-[#5142fc] bg-transparent p-[14px] text-[15px] leading-[22px] font-bold text-white transition duration-700 ease-in-out hover:border-white hover:bg-white hover:text-black
    sm:relative"
  >
    <BaseIcon :name="icon" size="20" class="base-icon" />
    <div class="title xs:hidden">{{ props.text }}</div>
  </button>
</template>

<script setup lang="ts">
  interface IProps {
    icon: string
    text: string
    // isLoading?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    icon: '',
    text: ''
    // isLoading: false
  })
</script>

<style scoped lang="scss"></style> -->
<template>
  <button
    class="flex items-center gap-2 rounded-[30px] border-2 border-solid border-[#5142fc] bg-transparent p-[14px] text-[15px] leading-[22px] font-bold text-white transition duration-700 ease-in-out hover:border-white hover:bg-white hover:text-black
    sm:relative"
  >
    <BaseIcon v-if="buttonIcon" :name="buttonIcon" size="20" class="base-icon" />
    <div class="title xs:hidden">{{ text }}</div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  text: string;
}

const props = defineProps<IProps>();

const buttonIcon = computed(() => {
  return props.text === "Buy Now" ? "cart" : "";
});
</script>


<template>
  <button
    class="flex  items-center justify-center gap-2 rounded-[30px] border-2 border-solid border-[#5142fc] bg-transparent !p-[15px] text-[15px] leading-[22px] font-bold text-white transition duration-700 ease-in-out hover:border-white hover:bg-white hover:text-black sm:relative"
  >
    <div class="title xs:hidden">{{ props.text }}</div>
  </button>
</template>

<script setup lang="ts">
  interface IProps {
    text: string
    // isLoading?: boolean
  }

  const props = withDefaults(defineProps<IProps>(), {
    text: ''
    // isLoading: false
  })
</script>

<style scoped lang="scss"></style>

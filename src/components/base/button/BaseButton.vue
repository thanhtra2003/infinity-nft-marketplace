<template>
  <button class="text-white flex items-center gap-2 rounded-[30px] border border-solid border-[#5142fc] bg-transparent p-[14px] text-[15px] leading-[22px] font-bold">
    <!-- <BaseIcon  class="base-icon" :name="icon" size="20" style="color: white" /> -->
    <BaseIcon :name="icon" size="20" class="base-icon hover:text-primary" />
    <div class="title">{{ props.text }}</div>
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
    text: '',
    // isLoading: false
  })
</script>

<style scoped lang="scss">
 
</style>

<template>
  <div class="banner p-[80px] flex items-center justify-center text-[48px] font-bold capitalize bg-cover mb-[80px]">
    <h1>{{ props.text }}</h1>
  </div>
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

<style scoped lang ="scss">
.banner{
  background: url(https://themesflat.co/html/axiesv/assets/images/backgroup-secsion/img_bg_page_title_dark.jpg);
  background-size: cover;
}
</style>

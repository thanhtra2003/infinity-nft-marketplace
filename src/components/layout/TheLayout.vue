<template>
  <div>
    <TheMenu></TheMenu>
    <RouterView />
    <TheFooter></TheFooter>

  </div>
</template>


<script setup lang="ts">
import TheFooter from './TheFooter.vue'
import TheMenu  from './TheMenu.vue'


</script>

<style scoped></style>

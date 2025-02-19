<template>
  <div class="base-popup text-brand">
    <div class="header">Header</div>
    <div class="body">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

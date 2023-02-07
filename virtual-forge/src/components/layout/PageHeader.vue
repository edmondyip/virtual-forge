<script setup lang="ts">
import PageLogo from "./PageLogo.vue"
import MiniCart from "../cart/MiniCart.vue"
</script>

<template lang="pug">
header
  .container
    PageLogo
    MiniCart
</template>

<style lang="scss" scoped>
header {
  height: 80px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
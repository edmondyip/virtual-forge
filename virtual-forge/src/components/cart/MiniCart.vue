<script setup lang="ts">
import { useCart } from "../../stores/cart";
const cart = useCart();
</script>

<template lang="pug">
.mini-cart
  .total £{{cart.total}}
  .count {{cart.count}}
</template>

<style lang="scss" scoped>
.mini-cart {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  line-height: 24px;
  .count {
    background: var(--color-action);
    border-radius: 100%;
    width: 24px;
    height: 24px;
    color: #ffffff;
    text-align: center;
    margin: 0 0 0 8px;
  }
}
</style>

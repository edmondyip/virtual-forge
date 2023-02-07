<script setup lang="ts">
defineProps(["products"]);
import { useCart } from "../../stores/cart";
const cart = useCart();
</script>

<template lang="pug">
ul.cart-list
  li(v-for="product in products" :key="product.id")
    .title {{product.title}} x {{product.quantity}}
    .price £{{product.price * product.quantity}}
    .option {{product.option}}
    button.remove(@click="cart.removeFromCart(product.id)") Remove
</template>

<style lang="scss" scoped>
ul.cart-list {
  list-style: none;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    display: grid;
    grid-template-columns: 1fr 50px;
    border-bottom: 1px solid var(--color-border);
    padding: 0 0 16px 0;
    .price {
      text-align: right;
    }
    .option {
      color: var(--color-action);
    }
    button {
      border: none;
      text-transform: uppercase;
      font-size: 0.5rem;
      padding: 0;
      cursor: pointer;
      background: var(--color-background2);
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>

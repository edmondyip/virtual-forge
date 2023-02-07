<script setup lang="ts">
import { computed } from "vue";
import { useCart } from "../../stores/cart";
import { useProduct } from "../../stores/products";
import CartList from "./CartList.vue";
const store = useProduct();
const cart = useCart();
const products = computed(() => {
  return Object.keys(cart.cart.cart).map((id) => ({
    id: id,
    title: store.products.items[id].title,
    image: store.products.items[id].image,
    price: store.products.items[id].price,
    option: store.products.items[id].option,
    quantity: cart.cart.cart[id].quantity
  }))
});
</script>

<template lang="pug">
.cart 
  .wrapper
    .title CART
      span.count {{cart.count}}
    .no-cart(v-if="cart.count === 0") nothing in cart
    CartList(:products="products")
    .total
      span Total
      span.amount £{{cart.total}}
</template>

<style lang="scss" scoped>
.cart {
  padding: 16px;
  position: relative;
  .wrapper {
    position: sticky;
    top: 16px;
    border-top: 1px solid var(--color-action);
    background: #ffffff;
    padding: 16px;
    box-shadow: rgba(16, 16, 16, 0.2) 0px 0px 8px;
    .title {
      font-size: 1.1rem;
      padding: 0 0 16px 0;
      border-bottom: 1px solid var(--color-border);
      span.count {
        background: var(--color-action);
        border-radius: 100%;
        display: inline-block;
        font-size: 0.9rem;
        width: 24px;
        height: 24px;
        color: #ffffff;
        text-align: center;
        margin: 0 0 0 8px;
      }
    }
    .no-cart {
      padding: 16px;
    }
    .total {
      padding: 16px;
      background: var(--color-background2);
      display: flex;
      justify-content: space-between;
      .amount {
        color: var(--color-heading);
        font-size: 1.1rem;
      }
    }
  }
}
</style>
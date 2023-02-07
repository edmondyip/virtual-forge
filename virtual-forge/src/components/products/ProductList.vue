<script setup lang="ts">
import { useCart } from "../../stores/cart";
import { useProduct } from "../../stores/products";
const store = useProduct();
const cart = useCart();
store.getProducts();
</script>

<template lang="pug">
ul.products
  li.product(v-for="id in store.sortedProducts" :key="id")
    .image
      img(:src="store.products.items[id].image" alt="")
    .info
      h2.title {{store.products.items[id].title}}
      .price £{{store.products.items[id].price}}
    .action
      button.add-to-cart(@click="cart.addToCart(id)") Add to cart
      button.quick-view Quick View
</template>

<style lang="scss" scoped>
ul.products {
  list-style: none;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (max-width: 768px) {
    display: block;
  }
  li {
    padding: 16px;
    background: #ffffff;
    box-shadow: rgba(16, 16, 16, 0.2) 0px 0px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .image {
      position: relative;
      padding: 16px;
      background: var(--color-background2);
      img {
        width: 100%;
      }
    }
    .info {
      display: flex;
      gap: 8px;
      justify-content: space-between;
      padding: 12px 0;
      h2.title {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        line-height: 1;
        text-transform: uppercase;
        color: var(--color-heading);
      }
      .price {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        color: var(--color-heading);
      }
    }
    .action {
      display: grid;
      grid-template-columns: 50% 50%;
      button {
        border: none;
        text-transform: uppercase;
        font-size: 1rem;
        padding: 10px 18px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      .add-to-cart {
        background: var(--color-action);
        color: #ffffff;
      }
      .quick-view {
        background: var(--color-background2);
      }
    }
  }
}
</style>

<script setup lang="ts">
import ProductSort from "./ProductSort.vue";
import ProductList from "./ProductList.vue";
import ShoppingCart from "../cart/index.vue";
</script>

<template lang="pug">
.product-gallery.container
  ProductSort.sort
  ProductList.list
  ShoppingCart.cart
</template>

<style lang="scss" scoped>
.product-gallery {
  display: grid;
  gap: 16px;
  grid-template-areas: "sort cart" "list cart";
  grid-template-columns: 75% 25%;
  @media (max-width: 768px) {
    display: block;
    padding: 16px;
  }
  .sort {
    grid-area: sort;
  }
  .list {
    grid-area: list;
  }
  .cart {
    grid-area: cart;
  }
}
</style>

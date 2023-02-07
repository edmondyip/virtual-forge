<script setup lang="ts">
import PageHeader from "./components/layout/PageHeader.vue";
import HeroBanner from "./components/layout/HeroBanner.vue";
import ProductGallery from "./components/products/index.vue";
import { useTitle } from "@vueuse/core"
const title = useTitle()
title.value = "VF-APPAREL CO"
</script>

<template lang="pug">
.layout
  PageHeader
  main
    HeroBanner
    ProductGallery
</template>

<style lang="scss">
body {
  background: #f5f3f6;
}
</style>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
  }
}
</style>

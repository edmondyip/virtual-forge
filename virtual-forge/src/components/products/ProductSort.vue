<script setup lang="ts">
import { ref } from "vue";
import { useProduct } from "../../stores/products"
const store = useProduct();
const selected = ref("highest");
const options = ref([
  {
    label: "Highest Price",
    value: "highest",
  },
  {
    label: "Lowest Price",
    value: "lowest",
  },
  {
    label: "Title - A to Z",
    value: "order",
  },
  {
    label: "Title - Z to A",
    value: "reverse",
  },
]);

const updateSelected = () => {
  store.updateSorting(selected.value)
}
</script>

<template lang="pug">
.product-sort
  select(v-model="selected" @change="updateSelected()") {{selected}}
    option(v-for="option in options" :key="option.value" :value="option.value" ) {{option.label}}
</template>

<style lang="scss" scoped>
.product-sort {
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
  select {
    padding: 16px 24px 16px 16px;
    border: 1px solid var(--color-border);
  }
}
</style>

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useProduct } from "./products";

export interface Item {
  id: number;
  quantity: number;
}

interface CartState {
  cart: Record<string, Item>;
}

export const useCart = defineStore("cart", () => {
  const cart = ref<CartState>({
    cart: {},
  });

  const addToCart = (id: number) => {
    cart.value.cart[id]
      ? (cart.value.cart[id].quantity += 1)
      : (cart.value.cart[id] = {
          id,
          quantity: 1,
        });
  };

  const removeFromCart = (id: number) => {
    if (!cart.value.cart[id]) {
      return;
    }

    cart.value.cart[id].quantity -= 1;

    if (cart.value.cart[id].quantity === 0) {
      delete cart.value.cart[id];
    }
  };

  const count = computed(() => {
    return Object.keys(cart.value.cart).reduce((count, id) => {
      return count + cart.value.cart[id].quantity;
    }, 0);
  });

  const total = computed(() => {
    const store = useProduct();
    return Object.keys(cart.value.cart).reduce((total, id) => {
      return (
        total + store.products.items[id].price * cart.value.cart[id].quantity
      );
    }, 0);
  });

  return {
    cart,
    count,
    total,
    addToCart,
    removeFromCart,
  };
});

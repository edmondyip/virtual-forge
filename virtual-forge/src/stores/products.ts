import { computed, ref } from "vue";
import { defineStore } from "pinia";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  option: string;
  quantity?: number;
  variants?: any;
  images?: any;
}

interface ProductState {
  items: Record<string, Product>;
  ids: number[];
  sorting: string;
}

export const useProduct = defineStore("products", () => {
  const api = "https://efuktshirts.com/products.json";
  const productData = ref<Product[]>([]);
  const products = ref<ProductState>({
    items: {},
    ids: [],
    sorting: "highest",
  });

  const sorting = (data: any) => {
    return data.sort((a: Product, b: Product) => {
      if (products.value.sorting === "highest") {
        return b.variants[0].price - a.variants[0].price;
      }
      if (products.value.sorting === "lowest") {
        return a.variants[0].price - b.variants[0].price;
      }
      if (products.value.sorting === "order") {
        return a.title.localeCompare(b.title);
      }
      if (products.value.sorting === "reverse") {
        return b.title.localeCompare(a.title);
      }
    });
  };

  const getProducts = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        productData.value = data.products;
        products.value.ids = data.products.map((product: Product) => {
          products.value.items[product.id] = {
            id: product.id,
            title: product.title,
            price: Math.round(parseFloat(product.variants[0].price)),
            image: `${product.images[0].src}.webp?width=300&height=300&crop=center&pad_color=ffffff`,
            option: `${product.variants[0]?.option1} ${
              product.variants[0]?.option2 ?? ""
            }`,
          };
          return product.id;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sortedProducts = computed(() => {
    return (products.value.ids = sorting(productData.value).map(
      (product: Product) => {
        return product.id;
      }
    ));
  });

  const updateSorting = (selected: string) => {
    products.value.sorting = selected;
    getProducts();
  };

  return {
    products,
    sortedProducts,
    getProducts,
    updateSorting,
  };
});

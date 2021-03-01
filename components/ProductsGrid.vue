<script>
import { mapState } from 'vuex';
import Product from '~/components/Product';

export default {
  components: {
    Product,
  },
  props: ['products'],
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
  },
  methods: {
    getLineItem(product) {
      if (!this.cart) {
        return null;
      }
      return this.cart.line_items.find((item) => item.product_id === product.id);
    },
  },
};
</script>

<template>
  <div class="products-grid">
    <div
      v-for="product in products"
      :key="'product-' + product.id"
      class="products-grid__product"
    >
      <nuxt-link :to="`/products/${product.id}`">
        <product
          :product="product"
          :line-item="getLineItem(product)"
        />
      </nuxt-link>
    </div>
    <div v-if="products.length % 2 !== 0" class="products-grid__product" />
  </div>
</template>

<style lang="scss">
  .products-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -10px;

    &__product {
      flex: 1 0 0;
      min-width: 300px;
      margin: 0 10px 20px;
    }
  }
</style>

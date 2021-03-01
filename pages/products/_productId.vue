<script>
import commerce from '~/common/commerce';
import Product from '../../components/Product';

export default {
  components: { Product },
  async asyncData({ params }) {
    const product = await commerce.products.retrieve(params.productId);
    console.log(product);

    return {
      product,
    };
  },
};
</script>

<template>
  <div v-if="product" class="product-page">
    <product :product="product" row />
  </div>
</template>

<style lang="scss">
  .product-page {

  }
</style>

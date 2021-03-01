<script>
import commerce from '~/common/commerce';
import ProductsGrid from '../../components/ProductsGrid';

export default {
  components: { ProductsGrid },
  async asyncData({ $prismic }) {
    const { data: products } = await commerce.products.list();
    const content = (await $prismic.api.getSingle('products_page')).data;

    return {
      products,
      content,
    };
  },
};
</script>

<template>
  <div class="products-page container">
    <h1>{{ content.page_title[0].text }}</h1>
    <p>{{ content.description[0].text }}</p>
    <products-grid :products="products" />
  </div>
</template>

<style lang="scss">
  .products-page {
    padding: 40px 0;
  }
</style>

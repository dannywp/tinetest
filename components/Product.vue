<script>
import { mapActions } from 'vuex';
import Card from '~/components/Card';

export default {
  components: {
    Card,
  },
  props: ['product', 'lineItem'],
  methods: {
    ...mapActions({
      updateProduct: 'cart/updateProduct',
    }),
    async addToCart() {
      await this.$cart.add(this.product);
    },
    increaseQuantity() {
      this.updateProduct({
        id: this.lineItem.id,
        data: { quantity: this.lineItem.quantity + 1 },
      });
    },
    decreaseQuantity() {
      this.updateProduct({
        id: this.lineItem.id,
        data: { quantity: this.lineItem.quantity - 1 },
      });
    },
  },
};
</script>

<template>
  <div v-if="product" class="product">
    <card>
      <h3 class="product__title">
        {{ product.name }}
      </h3>
      <img :src="product.assets[0].url" :alt="product.name" class="product__image">
      <div v-html="product.description" class="product__description" />
      <div class="product__details">
        <div>
          Quantity: {{ product.quantity }}
        </div>
        <div>
          Price: {{ product.price.formatted_with_symbol }}
        </div>
        <div v-if="product.variants.length && false">
          <select name="Variants" id="product-variants">
            <option
              v-for="option in product.variants[0].options"
              :key="option.id"
              :value="option.id"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <button v-if="!lineItem" class="product__button" @click="addToCart">
        Add to cart
      </button>
      <div v-else class="product__buttons">
        <button class="product__button product__button--half" @click="decreaseQuantity">
          {{ lineItem.quantity > 1 ? '-' : 'remove' }}
        </button>
        <button class="product__button product__button--half" @click="increaseQuantity">
          +
        </button>
      </div>
    </card>
  </div>
</template>

<style lang="scss">
  .product {
    background-color: white;
    display: flex;
    justify-content: space-between;

    &__title {
      text-transform: uppercase;
      font-weight: 900;
      border-bottom: 1px solid lightgrey;
      color: grey;
      margin-bottom: 15px;
      padding-bottom: 5px;
    }

    &__description {
      padding-bottom: 15px;
      margin-bottom: 20px;
      border-bottom: 1px solid lightgrey;

      > p {
        margin: 0;
        font-size: 16px;
        color: grey;
        font-weight: 500;
      }
    }

    &__image {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    &__details {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      margin-bottom: 20px;
      border-bottom: 1px solid lightgrey;
      color: grey;
    }

    &__button {
      width: 100%;
      padding: 7px 15px;
      text-transform: uppercase;
      border: 1px solid lightgrey;
      transition: background-color 100ms ease;
      color: grey;

      &:hover {
        background-color: darken(white, 2%);
      }

      &--half {
        width: calc(50% - 10px);
      }
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

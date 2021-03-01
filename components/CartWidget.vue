<script>
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  mapGetters,
  mapState,
} from 'vuex';

export default {
  components: {},
  data() {
    return {
      toggled: false,
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
    ...mapGetters({
      numOfCartItems: 'cart/numOfCartItems',
    }),
    faShoppingCart() {
      return faShoppingCart;
    },
  },
  mounted() {
    this.$cart.init();
  },
  methods: {
    clearAll() {
      if (this.cart) {
        this.cart.line_items.forEach((item) => {
          this.$cart.remove(item);
        });
      }
    },
  },
};
</script>

<template>
  <div class="cart-widget">
    <div class="cart-widget__main" @click="toggled = !toggled">
      <font-awesome-icon :icon="faShoppingCart" />
      <div class="cart-widget__number">
        {{ numOfCartItems }}
      </div>
    </div>
    <!--    <div @click="clearAll">-->
    <!--      Clear All-->
    <!--    </div>-->
    <transition name="fade">
      <div v-if="toggled && numOfCartItems" class="cart-widget__list">
        <div
          v-for="item in cart.line_items"
          class="cart-widget__item"
        >
          <img :src="item.media.source" class="cart-widget__item-image">
          <div class="cart-widget__item-name">
            {{ item.name }} x {{ item.quantity }}
          </div>
          <div class="cart-widget__item-price">
            {{ item.line_total.formatted_with_symbol }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
  .cart-widget {
    position: relative;

    &__main {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 35px;
      height: 35px;
      transition: background-color 100ms ease;
      border-radius: 50%;

      &:hover {
        background-color: lightgrey;
      }
    }

    &__number {
      position: absolute;
      right: -5px;
      top: -5px;
      background-color: red;
      border-radius: 50%;
      font-size: 12px;
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      color: white;
    }

    &__list {
      position: absolute;
      top: 40px;
      right: 0;
      padding: 10px 20px;
      background-color: white;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.125);
    }

    &__item {
      display: flex;
      align-items: center;
      height: 70px;
      padding: 15px 0;
      user-select: none;

      &:not(:last-child) {
        border-bottom: 1px solid lightgrey;
      }

      &-image {
        height: 100%;
        width: auto;
        margin-right: 15px;
      }

      &-name {
        flex: 1;
        white-space: nowrap;
        margin-right: 40px;
      }

      &-price {
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 300ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

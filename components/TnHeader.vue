<script>
import LinkResolver from '~/plugins/link-resolver.js';
import { mapState } from 'vuex';
import CartWidget from './CartWidget';

export default {
  components: { CartWidget },
  data() {
    return {
      LinkResolver,
    };
  },
  computed: {
    ...mapState({
      header: (state) => state.core.header,
    }),
  },
};
</script>

<template>
  <div class="header">
    <div class="header__fake" />
    <div class="header__bar">
      <div v-if="header" class="header__container container">
        <div class="header__title">
          <nuxt-link to="/">
            {{ header.data.page_title[0].text }}
          </nuxt-link>
        </div>
        <div class="header__links">
          <div
            v-for="(link, index) in header.data.links"
            :key="'header-link-' + index"
            class="header__link"
          >
            <template v-if="link.menu_item.link_type === 'Web'">
              <a :href="link.menu_item.url">
                {{ link.title[0].text }}
              </a>
            </template>
            <template v-else>
              <nuxt-link :to="LinkResolver(link.menu_item)">
                <div>{{ link.title[0].text }}</div>
              </nuxt-link>
            </template>
          </div>
        </div>
        <cart-widget />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    &__fake {
      height: 70px;
    }

    &__bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.125);
      height: 70px;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      flex: 1;
    }

    &__title {
      a {
        color: grey;
      }
    }

    &__links {
      display: flex;
    }

    &__link {
      a {
        color: grey;
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
</style>

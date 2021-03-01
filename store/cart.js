import commerce from '~/common/commerce';

export const state = () => ({
  cart: null,

  loading: true,
});

export const actions = {
  async getCart({ commit }) {
    const cart = await commerce.cart.retrieve();
    commit('setCart', cart);
  },
  async addToCart({ dispatch, commit }, product) {
    commit('setLoading', true);
    await commerce.cart.add(product.id);
    await dispatch('getCart');
    commit('setLoading', false);
  },

  async removeFromCart({ dispatch, commit }, product) {
    commit('setLoading', true);
    await commerce.cart.remove(product.id);
    await dispatch('getCart');
    commit('setLoading', false);
  },

  async updateProduct({ dispatch, commit }, { id, data }) {
    await commerce.cart.update(id, data);
    await dispatch('getCart');
  },
};

export const getters = {
  numOfCartItems(state) {
    if (!state.cart) {
      return 0;
    }
    return state.cart.line_items.length;
  },
};

export const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  },
  setLoading(state, status) {
    state.lading = status;
  },
};

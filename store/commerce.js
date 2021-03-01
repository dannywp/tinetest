export const state = () => ({
  products: [],
});

export const actions = {
  async getProducts({ commit }) {
    try {
      const products = await this.$commerce.products.list();
      commit('setProducts', products);
    } catch (err) {
      console.log(err);
    }
  },
};

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

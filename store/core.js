export const state = () => ({
  header: null,
});

export const actions = {
  async load({ commit }) {
    const header = await this.$prismic.api.getSingle('header');
    commit('setData', { header });
  },
};

export const mutations = {
  setData(state, { header }) {
    state.header = header;
  },
};

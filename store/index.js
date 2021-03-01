// eslint-disable-next-line import/prefer-default-export
import commerce from '../plugins/commerce';

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { error }) {
    try {
      await dispatch('core/load');
    } catch (err) {
      return error({
        statusCode: 503,
        message: 'nuxtServerInit failed',
      });
    }
  },
};

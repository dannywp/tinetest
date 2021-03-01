import Vue from 'vue';
import commerce from '~/common/commerce';
import CartService from '../services/CartService';

export default ({ app }) => {
  Vue.prototype.$commerce = commerce;
  Vue.prototype.$cart = CartService(app);
}

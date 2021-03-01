export default ({ store, $commerce }) => ({
  init() {
    store.dispatch('cart/getCart');
  },
  add(product) {
    store.dispatch('cart/addToCart', product);
  },
  remove(product) {
    store.dispatch('cart/removeFromCart', product);
  },
  hasProduct(product) {
    if (!store.state.cart.cart) {
      return false;
    }
    return store.state.cart.cart.line_items.find((item) => item.product_id === product.id);
  },
})

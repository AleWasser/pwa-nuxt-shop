export default {
  getCartProducts(state) {
    return state.products;
  },
  getCartTotal(state) {
    let total = null;
    state.products.forEach(element => {
      total += +element.price;
    });
    return total;
  }
}

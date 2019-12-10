export default {
  storeProduct({
    dispatch
  }, data) {
    let products = [];

    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
    }

    products.push(data);
    localStorage.setItem('products', JSON.stringify(products));
    dispatch('fetchCartProducts');
  },
  fetchCartProducts({
    commit
  }) {
    commit('setProducts', JSON.parse(localStorage.getItem('products')));
  },
  deleteProductCartById({
    dispatch
  }, id) {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    dispatch('fetchCartProducts');
  }
}

export default {
  storeProduct({
    dispatch,
    commit
  }, data) {
    let products = [];

    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
    }

    products.push(data);
    localStorage.setItem('products', JSON.stringify(products));
    dispatch('fetchCartProducts');
    commit('setNotification', {
      text: 'Product added to cart',
      color: 'success'
    }, {
      root: true
    });
  },
  fetchCartProducts({
    commit
  }) {
    commit('setProducts', JSON.parse(localStorage.getItem('products')));
  },
  deleteProductCartById({
    dispatch,
    commit
  }, id) {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    dispatch('fetchCartProducts');
    commit('setNotification', {
      text: 'Product deleted from cart',
      color: 'success'
    }, {
      root: true
    });
  },
  clearCart({
    dispatch,
    commit
  }) {
    localStorage.removeItem('products');
    dispatch('fetchCartProducts');
  }
}

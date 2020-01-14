export default {
  getOrders(state) {
    return state.orders;
  },
  getLastOrders(state) {
    return state.orders.slice(-3)
  },
  getSales(state) {
    let products = [];
    let sales = {
      'books': 0,
      'games': 0,
      'phones': 0
    };

    for (let i = 0; i < state.orders.length; i++) {
      for (let j = 0; j < state.orders[i].products.length; j++) {
        products.push(state.orders[i].products[j]);
      }
    }

    products.find(element => {
      if (element.category == 'books') {
        sales.books++;
      } else if (element.category == 'games') {
        sales.games++;
      } else {
        sales.phones++;
      }
    })
    return sales;
  }
}

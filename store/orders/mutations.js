export default {
  setOrders(state, data) {
    for (let key in data) {
      const item = data[key];
      item.id = key;
      state.orders.push(item);
    }
  }
}

export default {
  getOrders(state) {
    return state.orders;
  },
  getLastOrders(state) {
    return state.orders.slice(-3)
  }
}

export default {
  isAuthenticated(state) {
    return state.token != null;
  },
  getUserData(state) {
    return state.user;
  }
}

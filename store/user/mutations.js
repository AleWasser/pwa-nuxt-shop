export default {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
  setUserData(state, payload) {
    state.user = payload;
  }
}

export default {
  getGames(state) {
    return state.games;
  },
  getProductById: (state) => (id, category) => {
    switch (category) {
      case 'games':
        return state.games.find(e => e.id === id);

      default:
        break;
    }

  }
}

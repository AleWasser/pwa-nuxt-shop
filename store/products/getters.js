export default {
  getProducts(state) {
    return [...state.books, ...state.games, ...state.phones];
  },
  getGames(state) {
    return state.games;
  },
  getProductById: (state) => (id, category) => {
    switch (category) {
      case 'games':
        return state.games.find(e => e.id === id);
      case 'books':
        return state.books.find(e => e.id === id);
      case 'phones':
        return state.phones.find(e => e.id === id);
      default:
        break;
    }

  }
}

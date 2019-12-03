export default {
  setProducts(state, data) {
    state.games = [];
    state.books = [];
    state.phones = [];
    if (data) {
      for (let key in data.games) {
        const item = data.games[key];
        item.id = key;
        state.games.push(item);
      }
      for (let key in data.books) {
        const item = data.books[key];
        item.id = key;
        state.books.push(item);
      }
      for (let key in data.phones) {
        const item = data.phones[key];
        item.id = key;
        state.phones.push(item);
      }
    }
  }
}

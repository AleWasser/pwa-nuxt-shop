import {
  db
} from '~/plugins/firebase.js';

export default {
  createOrder({
    dispatch
  }, data) {
    return db.ref(`data/orders`)
      .push(data)
      .then(() => {
        dispatch('storeOrders');
      })
      .catch(err => console.error(err));
  },
  storeOrders({
    commit
  }) {
    return db.ref('data/orders')
      .once('value')
      .then(res => {
        commit('setOrders', res.val());
      })
      .catch(err => console.log(err));
  }
}

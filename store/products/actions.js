import {
  db,
  storage
} from '~/plugins/firebase.js';

export default {
  createProduct({
    dispatch,
    commit
  }, data) {
    console.log('[Create Product]', data);
    return db.ref(`data/products/${data.category}`)
      .push(data)
      .then(res => {
        if (data.image) {
          data.id = res.key;
          dispatch('uploadImage', {
            data: data
          });
        } else {
          dispatch('storeProducts');
        }
        // this.$router.push('/admin/adopciones');
        // commit('setNotification', {
        //   text: 'Adopcion creada',
        //   color: 'success'
        // }, {
        //   root: true
        // });
      })
      .catch(err => console.error(err));
  },
  storeProducts({
    commit
  }) {
    return db.ref('data/products')
      .once('value')
      .then(res => {
        commit('setProducts', res.val());
      })
      .catch(err => console.log(err));
  },
  uploadImage({
    dispatch
  }, payload) {
    const task = storage.ref(`images/products/${payload.data.category}/${payload.data.id}`).put(payload.data.image);
    task.on('state_changed',
      snapshot => console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
      err => console.error(err),
      () => {
        task.snapshot.ref.getDownloadURL()
          .then(url => {
            payload.data.imageUrl = url;
            dispatch('setImage', {
              data: payload.data
            });
          });
      });
  },
  setImage({
    dispatch
  }, payload) {
    return db.ref(`data/products/${payload.data.category}/${payload.data.id}`)
      .update({
        imageUrl: payload.data.imageUrl
      })
      .then(() => {
        dispatch('storeProducts');
      })
      .catch(err => console.error(err));
  },
  deleteImage({
    dispatch
  }, payload) {
    return storage.ref(`images/products/${payload.data.id}`)
      .delete()
      .then(() => {
        dispatch('storeProducts');
      })
      .catch(err => console.error(err));
  }
}
import firebase from 'firebase';
import '@firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBEulfR3I1gpIZNesLs731kbmLP8mZshYY",
    authDomain: "pwa-nuxt-shop.firebaseapp.com",
    databaseURL: "https://pwa-nuxt-shop.firebaseio.com",
    projectId: "pwa-nuxt-shop",
    storageBucket: "pwa-nuxt-shop.appspot.com",
    messagingSenderId: "467679951979",
    appId: "1:467679951979:web:f5382182d3be34dabc052e",
    measurementId: "G-5GMSG6WX8S"
  })
}

const db = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();

export {
  db,
  storage,
  auth
}

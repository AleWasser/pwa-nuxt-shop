import Cookie from "js-cookie";

import {
  db,
  auth
} from '~/plugins/firebase.js';

/* import checkUser from './../helpers/checkUser'; */

export default {
  userLogin({
    commit,
    state
  }, data) {
    auth.signInWithEmailAndPassword(data.email, data.password)
      .then(data => {
        //        if (checkUser(state.user, data.user.uid)) { //* Si el usuario esta en la base de datos loguearlo
        commit('setUserData', {
          userName: data.user.displayName,
          email: data.user.email
        });
        return data.user.getIdToken()
          .then(token => {
            commit('setToken', token);
            localStorage.setItem('token', token);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() * 1000
            );
            Cookie.set("jwt", token);
            Cookie.set(
              "expirationDate",
              new Date().getTime() * 1000
            );
            Cookie.set('userName', data.user.displayName);
            Cookie.set('email', data.user.email);
            this.$router.push('/admin');
            /* commit('setNotification', {
              text: 'Usuario logueado'
            }); */
          })
        //} else { //* Si no esta en la base de datos, eliminarlo
        /* commit('setNotification', {
          text: 'Usted no tiene permitido ingresar al sistema',
          color: 'error'
        }); */
        /*    auth.currentUser.delete()
             .catch(err => console.error(err));
         } */
      })
      .catch(err => {
        console.error(err);
        /* commit('setNotification', {
          text: 'Usuario o contraseña incorrectos',
          color: 'warning'
        }); */
      });
  },
  editUser({
    commit
  }, data) {
    let user = auth.currentUser;
    if (user) {
      console.log(user.displayName);
      user.updateProfile({
          displayName: data.userName
          //photoUrl: data.imagen
        })
        .then(() => {
          commit('setUserData', {
            userName: user.displayName,
            email: user.email
          });
          /*           commit('setNotification', {
                      text: 'Usuario modificado',
                      color: 'success'
                    }); */
        })
        .catch(err => {
          console.error(err);
          /*  commit('setNotification', {
             text: 'Error intente de nuevo',
             color: 'error'
           }); */
        })
    }
  },
  initAuth({
    commit,
    dispatch
  }, req) {
    let token;
    let expirationDate;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("expirationDate="))
        .split("=")[1];

      //* Datos del usuario autenticado
      let userName = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("userName="))
        .split("=")[1];
      let email = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("email="))
        .split("=")[1];
      commit('setUserData', {
        userName,
        email
      });

    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("No token or invalid token");
      dispatch("logout");
      return;
    }
    commit("setToken", token);
  },
  logout({
    commit
  }) {
    commit("clearToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
    this.$router.push("/admin/login");
  },
}

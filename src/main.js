import Vue from 'vue'
import firebase from "firebase";
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let firebaseConfig = {
  apiKey: "AIzaSyB3BKEiEr1an7gHjab7B02TAIJ1YiamqqE",
  authDomain: "register-form-bdae8.firebaseapp.com",
  projectId: "register-form-bdae8",
  storageBucket: "register-form-bdae8.appspot.com",
  messagingSenderId: "73534257690",
  appId: "1:73534257690:web:d729c959ba94128b6eefa3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

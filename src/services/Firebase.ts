import * as firebase from "firebase";

var config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "vue-pwa-tutorial-a5c81.firebaseapp.com",
    databaseURL: "https://vue-pwa-tutorial-a5c81.firebaseio.com",
    projectId: "vue-pwa-tutorial-a5c81",
    storageBucket: "vue-pwa-tutorial-a5c81.appspot.com",
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_ID,
  }; // 4. Get Firebase Configuration
  firebase.initializeApp(config);

  export default firebase
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from './services/Firebase';
import { messaging } from './services/Messaging';

Vue.config.productionTip = false;
//firebase messaging
messaging(firebase);

firebase.auth().onAuthStateChanged(() => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
      }).$mount('#app');
  });

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

import firebase from './services/Firebase';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
      },
  ],
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('/');
    else if(to.path === '/login' && currentUser)
        next('/');
    else next();
  });
  
  export default router;
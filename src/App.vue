<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
       <button v-if="currentUser" @click="logout">Logout</button>
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <span>Install!</span>
      </a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from './services/Firebase'
export default {
  data() {
    return {
      installBtn: "none",
      installer: undefined
    };
  },
  created() {
    let installPrompt;

    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = "block";
    });

    this.installer = () => {
      this.installBtn = "none";
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === "accepted") {
          console.log("Install accepted!")
        } else {
          console.log("Install denied!")
        }
      });
    };
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  computed:{
      currentUser(){
          return firebase.auth().currentUser
      }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text"  placeholder="Email"><br>
        <input type="password"  placeholder="Password"><br>
        <button >Connection</button>
        <br>

        Or
        <br>
        
        <button @click="socialLogin" class="social-button">
        <img alt="Google Logo" src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png">
      </button>
  </div>
</template>

<script>
import firebase from './../services/Firebase'
export default {
    name: 'Login',
    methods: {
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then((result) => {
                console.log(result)
            this.$router.replace('/');
            }).catch((err) => {
            alert('Oops. ' + err.message)
            });
        }
    }
}
</script>
 <style scoped>
     .social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
 </style>
<template>
  <div class="body">
    <div class="login-container d-flex align-items-center justify-content-center">
      <form @submit.prevent="signInReq" class="login-form text-center">
        <h1 class="mb-5 font-wight-light text-uppercase">Login</h1>
        <div class="form-group">
          <input v-model="email" type="text" class="form-control rounded-pill form-control-lg" placeholder="email">
          <div>
            {{emailError}}
          </div>
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control rounded-pill form-control-lg" placeholder="password">
          {{passwordError}}
        </div>
        <div class="forgot-link d-flex align-items-center justify-content-between">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="remember">
            <lable for="remember">Remember Password</lable>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" :disabled="!validForm" class="btn  btn-custom btn-block text-uppercase rounded-pill btn-lg">Login</button>
        <br> <br>
        <router-link to="/register" class="mt-3 "> Don't have an account? <strong>Register Now!</strong></router-link>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignIn_Form",
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    }
  },
  methods: {
    signInReq() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (res) => {
            alert(`Sign in successfully as ${res.user.email}`)
          },
          (err) => {
            alert(`Error- ${err.message}`)
          }
      )
    },
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    }
  },
  computed: {
    validForm(){
      return this.email.length > 0 && this.validateEmail() && this.password.length >= 6
    }
  },
  watch: {
    email() {
      if (!this.validateEmail()) {
        this.emailError = 'Invalid Email'
      } else{
        this.emailError = ''
      }
    },
    password(){
      if (this.password.length < 6){
        this.passwordError = 'Password must be 6 character'
      }
      else{
        this.passwordError = ''
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.body {
  font-family: 'poppins', sans-serif;
  font-size: 14px;
  background: #eee;
  color: #666;
}

.login-container {
  height: 100vh;
  width: 100%;
}

.login-form {
  max-width: 100%;
  width: 370px;
  padding: 15px;
  margin: auto;
}

.login-form a {
  text-decoration: none;
  color: #666;
}

.login-form a:hover {
  color: #723dbe;
}

.form-control {
  font-size: 15px;
  min-height: 48px;
  font-weight: 500;
  margin: 15px;
}

.form-control:focus {
  border-color: #723dbe;
  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, .25);
}

.forgot-link {
  font-size: 13px;
}

.forgot-link label {
  margin-bottom: 0;
}

.btn-custom {
  background: #723dbe;
  border-color: #723dbe;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  min-height: 48px;
}

.btn-custom:focus,
.btn-custom:hover,
.btn-custom:active,
.btn-custom:active:focus {
  background: #54229d;
  border-color: #54229d;
  color: #fff;
}

.btn-custom:focus {
  box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, .25);
}
</style>
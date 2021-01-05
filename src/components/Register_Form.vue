<template>
  <div class="body">
    <div class="login-container d-flex align-items-center justify-content-center">

      <form @submit.prevent="submitRequest" class="login-form text-center">
        <h1 class="mb-5 font-wight-light text-uppercase">Register Now!</h1>
        <!--        <div class="form-group">-->
        <!--          <input type="text" class="form-control rounded-pill form-control-lg" placeholder="Your name">-->
        <!--        </div>-->
        <div class="form-group">
          <input v-model="email" type="text" class="form-control rounded-pill form-control-lg" placeholder="email">
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control rounded-pill form-control-lg"
                 placeholder="password">
        </div>
        <div class="forgot-link d-flex align-items-center justify-content-between">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="remember">
            <lable for="remember">Remember Password</lable>
          </div>
        </div>
        <button type="submit" class="btn  btn-custom btn-block text-uppercase rounded-pill btn-lg">Sign Up</button>
        <br><br>
        <p>Registration Successful !!</p>

      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register_Form",
  data() {
    return {
      email: '',
      password: '',
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    submitRequest() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (res) => {
            alert(`Please enter correct email`)
            if (!this.reg.test(res.user.email)){
              // console.log('Please enter correct email')

            }
          },
          (err) => {
            alert(`Error- ${err.message}`)
          }
      )
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

form p{
  color: green;
  font-weight: bold;
}

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
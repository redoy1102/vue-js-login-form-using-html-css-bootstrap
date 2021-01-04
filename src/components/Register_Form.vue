<template>
  <div class="body">
    <div class="login-container d-flex align-items-center justify-content-center">
      <form class="login-form text-center">
        <h1 class="mb-5 font-wight-light text-uppercase">Login</h1>
        <div class="form-group">
          <input type="text" class="form-control rounded-pill form-control-lg" placeholder="username">
        </div>
        <div class="form-group">
          <input type="password" class="form-control rounded-pill form-control-lg" placeholder="password">
        </div>
        <div class="forgot-link d-flex align-items-center justify-content-between">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="remember">
            <lable for="remember">Remember Password</lable>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="btn btn-primary btn-block rounded-pill btn-lg">Login</button>
        <p class="mt-3 font-weight-normal">Don't have an account? <a href="#">Register Now!</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register_Form",
  data() {
    return {}
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

.form-control{
  font-size: 15px;
  min-height: 48px;
  font-weight: 400;
}

.form-control:focus{

}
</style>
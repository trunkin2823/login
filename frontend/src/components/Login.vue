<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="register-text">
        Bạn chưa có tài khoản ?
      </div>
      <div class="extra-buttons">
        <button @click="showRegisterForm">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {

        const response = await axios.post('http://localhost:8080/login', {
          username: this.username,
          password: this.password
        });

        localStorage.setItem('isLoggedIn','true')


        if (response.status === 200) {
          // Đăng nhập thành công
          await Swal.fire({
            title: "Success!",
            text: "Login success!",
            icon: "success"
          });
          // Chuyển hướng tới trang homepage
          await this.$router.push('/home');
        } else {
          // Đăng nhập thất bại
          await Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username or password incorrect!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }

      } catch (error) {

        console.error('Error during login:', error);
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or password incorrect!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    },
    showRegisterForm() {
      this.$router.push({ name: 'Register' });
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

h1 {
  text-align: center;
  margin-bottom: 10px;
}

label {
  display: flex;
  font-weight: bold;
}

* {
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}

.login-container {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 70vh;
  background-color: #cdc5c5;
  padding: 5em;
}

.login-box {
  background: #ffffff;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 90%;
  max-width: 500px;
  margin: 1em;
}

h2 {
  margin-bottom: 1px;
  font-size: 2em;
}

.input-group {
  margin-bottom: 1px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 1px;
  font-size: 1em;
}

#username,
#password {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #dddddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

input[type="username"]:focus,
input[type="password"]:focus {
  background-color: #ffffff;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #716c6c;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button hover {
  background: #554f4f;
}

extra-buttons {
  margin-top: 1em;
}

.register-text {
  margin: 2px 3px;
  font-size: 1em;
  color: #4274c3;
}

.extra-buttons button {
  width: auto;
  padding: 0.5em 1em;
  margin: 0.5em;
  border: none;
  border-radius: 5px;
  background: #716c6c;
  color: white;
  font-size: 1em;
  cursor: pointer;
}

.extra-buttons button:hover {
  background: #554f4f;
}

</style>

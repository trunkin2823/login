<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <div class="input-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <button type="submit">Register</button>
      </form>
      <div class="extra-buttons">
        <button @click="showLoginForm">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:8080/register', {
          username: this.username,
          password: this.password,
          email: this.email
        });
        if (response.status === 200) {
          await Swal.fire({
            title: "Success!",
            text: "Registration successful!",
            icon: "success"
          });
        } else {
          await Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration failed!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      } catch (error) {
        console.error('Error during registration:', error);
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration failed!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    },
    showLoginForm() {
      this.$router.push({ name: 'Login' });
    }
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

.register-container {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 80vh;
  background-color: #cdc5c5;
  padding: 5em;
}

.register-box {
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
  margin-bottom: 0;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 1px;
  font-size: 1em;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #dddddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
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

button:hover {
  background: #554f4f;
}

extra-buttons {
  margin-top: 1em;
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

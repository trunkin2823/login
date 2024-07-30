<template>
  <div id="home">
    <Header />
    <div class="home-container">
      <h1>Welcome to the Homepage</h1>
<!--      <div class="buttons">-->
<!--        <router-link to="/login"><button>Login</button></router-link>-->
<!--        <router-link to="/register"><button>Register</button></router-link>-->
<!--      </div>-->
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  name: 'Home'
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to right, #6926b4, #4587f3);
  font-family: 'Roboto', sans-serif;
}

.home-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.content {
  max-width: 600px;
  padding: 2em;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.2em;
  margin-bottom: 1.5em;
}

.buttons {
  margin-top: 1em;
}

button {
  padding: 0.8em 1.5em;
  margin: 0.5em;
  border: none;
  border-radius: 5px;
  background: #225cb3;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #1d32b1;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>